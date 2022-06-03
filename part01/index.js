function consoleHello() {
    return console.log('Hello Console! (OnClick)');
}

function eventListenerHello() {
     console.log('Hello Console! (Event Listener)');
     return null
}

const helloButton = document.getElementById('helloConsoleBtn');

helloButton.addEventListener("click", eventListenerHello);