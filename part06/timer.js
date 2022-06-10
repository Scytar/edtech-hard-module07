const minutesInput = document.querySelector("#minutesInput");
const secondsInput = document.querySelector("#secondsInput");
const timerButton = document.querySelector("#timerButton");
const timer = document.querySelector("#timer");
const audioAlarm = new Audio("./assets/sfx/alarm.wav");
const audioTick = new Audio("./assets/sfx/tick.wav");
let initialTime = null;
let timerState = null;
let secondsRemaining = null;
let buttonMode = "start";

timerButton.addEventListener("click", timerFunction);

function timerFunction() {
    if (buttonMode === "start") {
        timer.textContent = minutesInput.value + " : " + secondsInput.value;
        initialTime = parseInt(minutesInput.value)*60 + parseInt(secondsInput.value);
        secondsRemaining = initialTime;
        timerState = setInterval(timerOn, 1000);
        buttonMode = "pause";
        timerButton.textContent = "Stop"
        timer.style.fontWeight = "200";
    } else {
        audioAlarm.pause();
        clearInterval(timerState);
        buttonMode = "start"
        timerButton.textContent = "Start";
        timer.style.fontWeight = "200";
    }
    return null;
}

function timerOn() {
    if (secondsRemaining === 0) {
        audioAlarm.volume = 1;
        audioAlarm.play();
        clearInterval(timerState);
    } else if (secondsRemaining <= Math.ceil(initialTime/20)) {
        audioTick.volume = 0.5;
        audioTick.play();
        secondsRemaining--;
        timer.textContent = parseInt(secondsRemaining/60) + " : " + (secondsRemaining%60);
        if ((secondsRemaining%60) <10) {
            
            timer.textContent = parseInt(secondsRemaining/60) + " : 0" + (secondsRemaining%60);
        }
        timer.style.fontWeight = "600";
    } else if (secondsRemaining !=0) {
        secondsRemaining--;
        timer.textContent = parseInt(secondsRemaining/60) + " : " + (secondsRemaining%60);
        if ((secondsRemaining%60) <10) {
            
            timer.textContent = parseInt(secondsRemaining/60) + " : 0" + (secondsRemaining%60);
        }
    }
    return null;
}