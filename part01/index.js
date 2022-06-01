function consoleHello() {
    return console.log('Hello Console! (OnClick)');
}

function eventListenerHello() {
    return console.log('Hello Console! (Event Listener)');
}

const helloButton = document.getElementById('helloConsoleBtn');

helloButton.addEventListener("click", eventListenerHello, false)