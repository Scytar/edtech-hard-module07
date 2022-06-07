const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const calcButton = document.querySelector("#calcButton");
const resultElement = document.querySelector("#result");

calcButton.addEventListener("click", calcBMI);

function calcBMI() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const BMI = (Math.floor(10*weight/(Math.pow((height/100), 2))))/10;
    let rating = null;
    if (18.5 > BMI) {
        rating = "Abaixo do peso"
    }
    if (18.5 <= BMI) {
        rating = "Normal";
    }
    if (25 <= BMI) {
        rating = "Sobrepeso";
    }
    if (30 <= BMI) {
        rating = "Obesidade";
    }
    resultElement.innerHTML = "IMC = "+ BMI + " - Classificação: " + rating;
    if (isNaN(BMI)) {
        resultElement.innerHTML = "Digite valores válidos!";
    }
    resultElement.style.opacity = 1;
    // console.log(weight, height, Math.pow((height/100), 2), BMI, rating);
    return null
}