const chatDisplay = document.querySelector("#chatDisplay");
const messageInput = document.querySelector("#messageInput");
const sendButton = document.querySelector("#sendButton");
const clearButton = document.querySelector("#clearButton");
const audioPop = new Audio("./assets/sfx/message-pop.wav")
const audioExplode = new Audio("./assets/sfx/explosion.mp3")
let response = true;

function samirResponse() {
    if (response) {
        response = false;
        setTimeout(()=>{
            chatDisplay.textContent += "\r\nSamir: Bom dia, aspirante...";
            audioPop.play();
        },1000)
        setTimeout(()=>{
            chatDisplay.textContent += "\r\nSamir: Atenção!";
            audioPop.play();
        },2300)
        setTimeout(()=>{
            chatDisplay.textContent += "\r\nSamir: Plantão Alpha EdTech!";
            audioPop.play();
        },4000)
        setTimeout(()=>{
            chatDisplay.textContent += "\r\nSamir: Você está convidado para o meu churrasco!";
            audioPop.play();
        },6000)
        setTimeout(()=>{
            chatDisplay.textContent += "\r\nSamir: Partiu?";
            audioPop.play();
        },7100)
        setTimeout(()=>{
            chatDisplay.textContent += "\r\nSamir: 🍖🍴🍗🍢🔥🥓👩‍🍳";
            audioPop.play();
        },8700)
    }
    return null;
}

function sendMessage() {
    if (messageInput.value != "") {
        chatDisplay.textContent += "\r\nEu: " + messageInput.value;
        chatDisplay.scrollTop += 100;
        messageInput.value = "";
        audioPop.play();
        samirResponse();
    }
    return null;
}

function clearHistory() {
    chatDisplay.textContent = "";
    audioExplode.volume = 0.1;
    audioExplode.play();
    return null;
}

clearButton.addEventListener("click", clearHistory);
sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keydown", (e)=>{
    //Send message if return key is pressed down
    if (e.keyCode === 0x0D) {
        sendMessage();
    }
})