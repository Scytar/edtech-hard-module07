let variableA = null
let variableB = null



function updateVariableForCalc(e, variable){
    if (variable === "A"){
        variableA = Number(e.target.value)
    }
    if (variable === "B") {
        variableB = Number(e.target.value)
    } 
}

document.getElementById('numberA').addEventListener('change', (e) => {updateVariableForCalc(e, "A")});
document.getElementById('numberB').addEventListener('change', (e) => {updateVariableForCalc(e, "B")});
document.getElementById('submitButton').addEventListener('click', () => {checkGreaterThan(variableA,variableB)});


function checkGreaterThan(a,b) {
    console.log(a, b)
    let message = null
    document.getElementById("result").style.opacity = 1;   
    if (a > b) {      
        message = "A é MAIOR que B!"        
    }
    if (a ===  b) {
        message = "A é IGUAL a B!"    
    }
    if (a < b) {
        message = "A é MENOR que B!"        
    }
    document.getElementById("result").innerText = message;
}

console.log(document.getElementById("numberA").value)