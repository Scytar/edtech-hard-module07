const cepInput = document.querySelector("#cepInput");
let postalCode = "";

const fetchCEPButton = document.querySelector('#fetchCEPButton');
const messageBox = document.querySelector('#messageBox');
const mapIframe = document.querySelector('#iframe');
let lat = null;
let lng = null;
const showMapButton = document.querySelector('#showMapButton');
const loadingModal = document.querySelector('#loadingModal');

function checkCEPInput() {
    let firstPart = cepInput.value.substring(0,5);
    let lastPart = postalCode.substring(6,Math.min(cepInput.value.length+1,9));
    if (isNaN(firstPart) || isNaN(lastPart)) {
        cepInput.value = postalCode;
    } else {
        postalCode = cepInput.value;
    }
    return null;
}

function beautifyPostalCode() {
    //Format input
    if ((postalCode.length === 5)) {
        postalCode = postalCode + "-";
        cepInput.value = postalCode;
    }

    if (postalCode.length >= 6) {
        let firstPart = postalCode.substring(0,5);
        let lastPart = postalCode.substring(6,Math.min(postalCode.length+1,9));
        cepInput.value = firstPart + "-" + lastPart;
    }

    //Change CEP Button click availability
    changeCEPButton();

    return null;
}

function changeCEPButton() {
    if (cepInput.value.length === 9) {fetchCEPButton.removeAttribute('disabled');}
    else fetchCEPButton.setAttribute('disabled', 'disabled');
    
    return null;
}

function displayMapButton(boolean) {
    if (boolean) {
        showMapButton.style.display = 'block';
        showMapButton.focus();
    }
    else {
        showMapButton.style.display = 'none';
    }

    return null;
}

function displayAddressMessage(obj) {
    messageBox.textContent = `${obj.address} - ${obj.district} - ${obj.city} / ${obj.state} 
    (Latitude: ${obj.lat} / Longitude: ${obj.lng})`

    return null;
}

function isLoading(boolean) {
    if (boolean) {loadingModal.style.display = 'flex'}
    else loadingModal.style.display = 'none';
}

function fetchCEP(cep) {
    //Reset message box
    messageBox.textContent = '';

    //Hide map
    showIframe(false);

    //Format CEP for GET request
    const firstPart = cep.substring(0,5);
    const lastPart = cep.substring(6,9);
    cep = firstPart+lastPart;

    //Call loading modal
    isLoading(true);                  

    //Fetch CEP API
    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
    //Parse GET request to JSON
    .then(res => res.json())

    //Display the fetched data
    .then(data => {
        //Check for API expected errors
        if (data.status != 400 && data.status != 404){
            displayAddressMessage(data);
            
            //Store latitude & longitude on global scope
            lat = data.lat;
            lng = data.lng;

            //Display Show Map Button
            displayMapButton(true);

            //Close loading modal
            isLoading(false);
        } else {
            messageBox.textContent = data.message;
            isLoading(false);
        }
    })

    //Display any error
    .catch(error => {
        messageBox.textContent = error;
        isLoading(false);
    })
}

function showIframe(boolean) {
    //Hide iframe while fetching
    mapIframe.style.display = 'none';

    if (boolean){
        //Show iframe
        mapIframe.style.display = 'block';

        //Set SRC attribute for map iframe
        mapIframe.setAttribute('src', `https://www.google.com/maps/embed/v1/view?key=AIzaSyC06ldRSm657B9ZNibE05wVSGtahmVOsk8&center=${lat},${lng}&zoom=18&maptype=roadmap`);
    }

    return null;
}

cepInput.addEventListener("input", checkCEPInput);
cepInput.addEventListener("keyup", beautifyPostalCode);
fetchCEPButton.addEventListener('click', (e)=>{
    e.preventDefault();
    fetchCEP(cepInput.value)
});
showMapButton.addEventListener('click', ()=>{showIframe(true)});