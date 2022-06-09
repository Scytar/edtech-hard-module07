const startButton = document.querySelector("#startButton");
const challengeDisplay = document.querySelector("#challengeDisplay");
const h3 = document.querySelector("h3");
const bombImg = document.querySelector("#bombImg");
const audioPlant = new Audio("./assets/sfx/bomb-planted.wav");
const audioExplosion = new Audio("./assets/sfx/explosion.mp3");
const audioRelief = new Audio("./assets/sfx/relief.wav");
const audioTick = new Audio("./assets/sfx/tick.wav");
let bombTimer = null;
let remainingTime = 10;

function bombPlant() {
    document.title = "IT'S GONNA EXPLODE!";
    challengeDisplay.style.opacity = 1;
    startButton.style.display = "none";
    remainingTime = 10;
    h3.innerHTML = "You have " + Math.ceil(remainingTime) + " seconds!";
    bombImg.style.cursor = "pointer";
    bombImg.src = "./assets/imgs/bomb-active.png";

    audioPlant.volume = 0.1;
    audioPlant.play();
    bombTimer = setInterval(bombTick,1000);
    bombImg.addEventListener("click", bombDefuse);
    return null;
}

function bombTick() {
    if (remainingTime != 1) {
        remainingTime--;
        h3.innerHTML = "You have " + Math.ceil(remainingTime) + " seconds!";
        audioTick.volume = 0.1;
        audioTick.play();
    } else {
        bombExplode();
    }
    return null;
}

function bombExplode() {
    document.title = "YOU FAILE--BOOM!";
    startButton.style.display = "flex";
    startButton.innerHTML = "Retry";
    h3.innerHTML = "You failed to defuse the bomb in time!";
    bombImg.src = "./assets/imgs/explosion.png";
    bombImg.removeEventListener("click", bombDefuse);
    clearInterval(bombTimer);

    audioExplosion.volume = 0.1;
    audioExplosion.play();
    return null;
}

function bombDefuse() {
    document.title = "SUCCESS!";
    startButton.style.display = "flex";
    startButton.innerHTML = "Retry";
    h3.innerHTML = "Phew! You did it!";
    bombImg.src = "./assets/imgs/thumb-up.png";
    clearInterval(bombTimer);
    bombImg.style.cursor = "default";

    audioRelief.volume = 0.3;
    audioRelief.play();
    return null;
}

startButton.addEventListener("click", bombPlant);