const minValueInput = document.querySelector("#minValue");
const maxValueInput = document.querySelector("#maxValue");
const resultElement = document.querySelector("#result");

document.querySelector("#generateButton").addEventListener("click", randomRange);

function randomRange() {
    const minValue = parseFloat(minValueInput.value);
    const maxValue = parseFloat(maxValueInput.value);
    const result = minValue+(Math.floor(Math.random()*(maxValue)));

    resultElement.style.opacity = 1;
    resultElement.innerHTML = result;
    if (minValue > maxValue) {
        resultElement.innerHTML = "Please enter a max value greater than the minimum value!"
    }
    if (isNaN((minValue)) || isNaN((maxValue))) {
        resultElement.innerHTML = "Please enter valid values!"
    }
    console.log(minValue, maxValue, result)
    return null;
}