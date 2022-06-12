const chatDisplay = document.querySelector("#chatDisplay");
const messageInput = document.querySelector("#messageInput");
const sendButton = document.querySelector("#sendButton");
const clearButton = document.querySelector("#clearButton");

setTimeout(()=>{
    chatDisplay.textContent += "Samir: Bom dia, aspirante!";
},1000)
setTimeout(()=>{
    chatDisplay.textContent += "\r\nSamir: Você está convidado para o meu churrasco!";
},3000)
setTimeout(()=>{
    chatDisplay.textContent += "\r\nSamir: Partiu?";
},4500)
setTimeout(()=>{
    chatDisplay.textContent += "\r\nSamir: 🍖🍴🍗🍢🔥🥓👩‍🍳";
},5700)

function sendMessage() {
    if (messageInput.value != "") {
        chatDisplay.textContent += "\r\nEu: " + messageInput.value;
        chatDisplay.scrollTop += 100;
        messageInput.value = "";
    }
    return null;
}

function clearHistory() {
    chatDisplay.textContent = "";
    return null;
}

clearButton.addEventListener("click", clearHistory)
sendButton.addEventListener("click", sendMessage);
messageInput.addEventListener("keydown", (e)=>{
    if (e.keyCode === 0x0D) {
        sendMessage();
    }
})