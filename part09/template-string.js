const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const sumButton = document.querySelector("#sumButton");
const messageBox = document.querySelector("#messageBox");

function sumNumbers(a, b) {
    console.log(a,b)
    try {
        if (isNaN(a) || isNaN(b)) {
            throw `[sum] Impossible to sum ${a} + ${b}`;
        } else {
            if ((a === "") || (b === "")) {
                throw `Please, enter values in the inputs!`;
            } else {
                messageBox.textContent = parseInt(a)+parseInt(b);
            }
        }
    } catch (error) {
        messageBox.textContent = error;
    }
    return null;
}

sumButton.addEventListener("click", ()=>{sumNumbers(num1.value, num2.value)});