let A = null;
let B = null;

function setA() {
    A = document.getElementById("numberA").value;
    console.log(document.getElementById("numberA").value);
    return null
}

function setB() {
    B = document.getElementById("numberB").value;
    console.log(document.getElementById("numberB").value);
    return null
}

function checkGreaterThan(A, B) {
    document.getElementById("result").opacity = 1;
    console.log(A,B)
    if (A > B) {
        document.getElementById("result").innerText = "A é MAIOR que B!";
        return null
    }
    if (A === B) {
        document.getElementById("result").innerText = "A é IGUAL a B!";
        return null
    }
    if (A < B) {
        document.getElementById("result").innerText = "A é MENOR que B!";
        return null
    }
}