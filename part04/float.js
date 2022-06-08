const userInput = document.querySelector("#userFloat");
const findButton = document.querySelector("#findButton");
const resultElement = document.querySelector("#result");

findButton.addEventListener("click", findIntegers);

function findIntegers() {
    const userFloat = parseFloat((userInput.value).replace(",", "."));
    const lowerInteger = Math.floor(userFloat);
    const upperInteger = Math.ceil(userFloat);
    let message = `The closest integers are ${lowerInteger} and ${upperInteger}.`;

    if (isNaN(userFloat)) {
        message = "Please enter a non integer number.";
    }
    resultElement.style.opacity = 1;
    resultElement.innerHTML = message;
    return
}