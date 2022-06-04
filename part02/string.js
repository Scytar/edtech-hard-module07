let textALength = null;
let textBLength = null;

function setTextALength(e) {
    textALength = e.target.value.length;
    return null
} 

function setTextBLength(e) {
    textBLength = e.target.value.length;
    return null
} 

function checkLength() {
    let message = null;
    if (textALength > textBLength){
        message = "O primeiro texto é o maior! " + textALength + " caracteres."
    }
    if (textALength < textBLength){
        message = "O segundo texto é o maior! " + textBLength + " caracteres."
    }
    if (textALength === textBLength){
        message = "Os textos são do mesmo tamanho! " + textALength + " caracteres."
    }
    if ((textALength || textBLength) === null){
        message = "Não esqueça de digitar/colar os textos!"
    }
    document.querySelector("#result").innerText = message;
    document.querySelector("#result").style.opacity = 1;
    return null
}

document.querySelector("#textA").addEventListener("change", (e) => {setTextALength(e)});

document.querySelector("#textB").addEventListener("change", (e) => {setTextBLength(e)});

document.querySelector("#checkButton").addEventListener("click", checkLength)