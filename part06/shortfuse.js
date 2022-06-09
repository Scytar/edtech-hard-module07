const startButton = document.querySelector("#startButton");
const challengeDisplay = document.querySelector("#challengeDisplay");
const h3 = document.querySelector("h3");
const bombImg = document.querySelector("#bombImg");
const audioPlant = new Audio("./assets/sfx/bomb-planted.wav");
const audioExplosion = new Audio("./assets/sfx/explosion.mp3");
const audioRelief = new Audio("./assets/sfx/relief.wav");
let bombTimer = null;

function bombPlant() {
    document.title = "IT'S GONNA EXPLODE!";
    challengeDisplay.style.opacity = 1;
    startButton.style.display = "none";
    h3.innerHTML = "You have 10 seconds!";
    bombImg.style.cursor = "pointer";
    bombImg.src = "./assets/imgs/bomb-active.png";

    audioPlant.volume = 0.1;
    audioPlant.play();
    bombTimer = setTimeout(bombExplode,10000);
    bombImg.addEventListener("click", bombDefuse);
    return null;
}

function bombExplode() {
    document.title = "YOU FAILE--BOOM!";
    startButton.style.display = "flex";
    startButton.innerHTML = "Retry";
    h3.innerHTML = "You failed to defuse the bomb in time!";
    bombImg.src = "./assets/imgs/explosion.png";
    bombImg.removeEventListener("click", bombDefuse);

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
    clearTimeout(bombTimer);
    bombImg.style.cursor = "default";

    audioRelief.volume = 0.3;
    audioRelief.play();
    return null;
}

startButton.addEventListener("click", bombPlant);