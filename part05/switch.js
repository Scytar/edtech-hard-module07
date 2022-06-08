const numberInput = document.querySelector("#numberInput");
const translateButton = document.querySelector("#translateButton");
const resultElement = document.querySelector("#result");

translateButton.addEventListener("click", translateToString);

function translateToString() {
    let message = null
    switch (parseInt(numberInput.value)) {
        case 0:
            message = "Zero"
            break;
        case 1:
            message = "One"
            break;
        case 2:
            message = "Two"
            break;
        case 3:
            message = "Three"
            break;
        case 4:
            message = "Four"
            break;
        case 5:
            message = "Five"
            break;
        case 6:
            message = "Six"
            break;
        case 7:
            message = "Seven"
            break;
        case 8:
            message = "Eight"
            break;
        case 9:
            message = "Nine"
            break;
        case 10:
            message = "Ten"
            break;
                            
    
        default:
            message = "Please, enter a number from 0 to 10 only!"
            break;
    }
    resultElement.style.opacity = 1;
    resultElement.innerHTML = message;
}