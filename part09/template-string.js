const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const sumButton = document.querySelector("#sumButton");
const messageBox = document.querySelector("#messageBox");
const subtractButton = document.querySelector("#subtractButton");
const multiplyButton = document.querySelector("#multiplyButton");
const powerButton = document.querySelector("#powerButton");
const divideButton = document.querySelector("#divideButton");
let quotient = 0;

// Sum Operation

function sumNumbers(a, b) {
    if (b === 0) {
        return a;
    } else {
        return sumNumbers(a^b, (a & b) << 1);
    }
}

function checkSum(a, b) {
    try {
        if ((a < 0 ) || (b < 0)) throw `Enter positive values!`
        if (isNaN(a) || isNaN(b)) {
            throw `[sum] Impossible to sum ${a} + ${b}`;
        } else {
            return messageBox.textContent = sumNumbers(a, b);
        }

    } catch (error) {
        messageBox.textContent = error;
    }
}

function subtractNumbers(a, b) {
    if (b === 0) return a;
    return subtractNumbers(a^b, (~a & b) << 1);
}

// Subtraction Operation

function checkSubtraction(a, b) {
    try {
        if (isNaN(a) || isNaN(b)) {
            throw `[subtract] Impossible to subtract ${a} - ${b}`;
        } else {
            if ((a < 0) || (b < 0)) throw `Enter positive values!`
            if (a < b) throw `${b} is greater than ${a}!`;
            if (a === b) throw messageBox.textContent = 0;
            if (a > b) {
                messageBox.textContent = subtractNumbers(a, b);
            }
        }
        
    } catch (error) {
        messageBox.textContent = error;
    }
}

//Multiply Operation

function multiplyNumbers(a, b) {
    if (b === 0) {
        return 0;
    }
    if (b > 0) {
        return (sumNumbers(a, multiplyNumbers(a, subtractNumbers(b, 1))));
    }
}

function checkMultiplication(a, b) {
    try {
        if ((a < 0) || (b < 0)) throw `Enter positive values!`
        if (isNaN(a) || isNaN(b)) {
            throw `[multiply] Impossible to multiply ${a} times ${b}`;
        } else {
            messageBox.textContent = multiplyNumbers(a, b);
        }

    } catch (error) {
        messageBox.textContent = error;
    }
}

// Power Operation

function powerNumbers(a, b) {
    if (a === 0) {
        return 0;
    } else {
        if (b === 0) {
            return 1;
        } else {
            return (multiplyNumbers(a, powerNumbers(a, subtractNumbers(b, 1))));
        }
    }
}

function checkPower(a, b) {
    try {
        if ((a < 0) || (b < 0)) throw `Enter positive values!`
        if (isNaN(a) || isNaN(b)) {
            throw `[power] Impossible to power base ${a} to exponent ${b}`;
        } else {
            messageBox.textContent = powerNumbers(a, b);
        }

    } catch (error) {
        messageBox.textContent = error;
    }
}

// Division Operation

function divideNumbers(a,b) {
    if (b === 1) {
        return a;
    } else {
        if (a >= b) {
            a = subtractNumbers(a,b);
            quotient = sumNumbers(quotient, 1);
            divideNumbers(a, b);
        }
    }
    return quotient;
}

function checkDivision(a, b) {
    quotient = 0;
    try {
        if ((a < 0) || (b < 0)) throw `Enter positive values!`
        if (b === 0) throw `Division by zero`
        if (a === 0) throw 0;
        if (a < b) throw `Divisor is greater than dividend`
        if (isNaN(a) || isNaN(b)) {
            throw `[division] Impossible to divide ${a} by ${b}`;
        } else {
            messageBox.textContent = divideNumbers(a, b);
        }

    } catch (error) {
        messageBox.textContent = error;
    }
}

sumButton.addEventListener("click", ()=>{checkSum(parseInt(num1.value), parseInt(num2.value))});
subtractButton.addEventListener("click", ()=>{checkSubtraction(parseInt(num1.value), parseInt(num2.value))});
multiplyButton.addEventListener("click", ()=>{checkMultiplication(parseInt(num1.value), parseInt(num2.value))});
powerButton.addEventListener("click", ()=>{checkPower(parseInt(num1.value), parseInt(num2.value))});
divideButton.addEventListener("click", ()=>{checkDivision(parseInt(num1.value), parseInt(num2.value))})