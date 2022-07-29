const mainInput = document.querySelector('#mainInput');
const mainButton = document.querySelector('#mainButton');
const messageBox = document.querySelector('#messageBox');

//Fetch template
let myData;

fetch('')
.then((res) => {
    if (res.status === 200) {
        res.json();
    }
})
.then((data)=>{

})
.catch((err) => {messageBox.innerHTML = err});


//Event listeners
mainInput.addEventListener('input', (e)=>{
    
})
mainButton.addEventListener('click', (e)=>{
    e.preventDefault();
})