function consoleHello() {
    return console.log('Hello Console! (OnClick)');
}

function eventListenerHello(e) {
     console.log('Hello Console! (Event Listener)');
     e.target.textContent = 'Hello Event Listener!';
     console.log(e)
     return null
}

const helloButton = document.getElementById('helloConsoleBtn');

helloButton.addEventListener("click", (e)=>{eventListenerHello(e)});