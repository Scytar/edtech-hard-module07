let numberA = null;
let numberB = null;
let inputA = document.querySelector("#inputA");
let inputB = document.querySelector("#inputB");
let operator = document.querySelector("#mathOperation");
let calcButton = document.querySelector("#calcButton");
let result = document.querySelector("#result");

inputA.addEventListener("change", (e) => {
    numberA = parseFloat(e.target.value);
})

inputB.addEventListener("change", (e) => {
    numberB = parseFloat(e.target.value);
})

calcButton.addEventListener("click", () => {
    result.innerHTML = "= " + (numberA+numberB)
    if (operator.value === "subtraction") {
        result.innerHTML = "= " + (numberA-numberB)
    }
    if (operator.value === "multiplication") {
        result.innerHTML = "= " + (numberA*numberB)
    }
    if (operator.value === "division") {
        result.innerHTML = "= " + (numberA/numberB)
    }
})