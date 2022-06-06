let numberA = null;
let numberB = null;
const inputA = document.querySelector("#inputA");
const inputB = document.querySelector("#inputB");
const operator = document.querySelector("#mathOperation");
const calcButton = document.querySelector("#calcButton");
const result = document.querySelector("#result");

inputA.addEventListener("change", (e) => {
    numberA = parseFloat(e.target.value);
})

inputB.addEventListener("change", (e) => {
    numberB = parseFloat(e.target.value);
})

calcButton.addEventListener("click", () => {
    result.innerHTML = "= " + (numberA+numberB);
    console.log("sum = " + numberA+numberB);
    if (operator.value === "subtraction") {
        result.innerHTML = "= " + (numberA-numberB);
        console.log(numberA-numberB);
    }
    if (operator.value === "multiplication") {
        result.innerHTML = "= " + (numberA*numberB);
        console.log(numberA*numberB);
    }
    if (operator.value === "division") {
        result.innerHTML = "= " + (numberA/numberB);
        console.log(numberA/numberB);
    }
})