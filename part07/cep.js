const postalCodeInput = document.querySelector("#postalCodeInput");
let postalCode = "";

postalCodeInput.addEventListener("input", checkInput);
postalCodeInput.addEventListener("keyup", beautifyPostalCode);

function checkInput() {
    let firstPart = postalCodeInput.value.substring(0,5);
    let lastPart = postalCode.substring(6,Math.min(postalCodeInput.value.length+1,9));
    if (isNaN(firstPart) || isNaN(lastPart)) {
        postalCodeInput.value = postalCode;
    } else {
        postalCode = postalCodeInput.value;
    }
    return null;
}

function beautifyPostalCode() {
    if ((postalCode.length === 5)) {
        postalCode = postalCode + "-";
        postalCodeInput.value = postalCode;
    }

    if (postalCode.length >= 6) {
        let firstPart = postalCode.substring(0,5);
        let lastPart = postalCode.substring(6,Math.min(postalCode.length+1,9));
        postalCodeInput.value = firstPart + "-" + lastPart;
    }
    return null;
}