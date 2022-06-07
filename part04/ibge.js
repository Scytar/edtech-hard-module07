const pickButton = document.querySelector("#pickButton");
const resultElement = document.querySelector("#result");

pickButton.addEventListener("click", pickPerson);

function pickPerson() {
    const personPicked = Math.floor(Math.random()*10000)/100;
    let message = "A man was picked!";
    
    if (personPicked < 60) {
        message = "An elder man was picked!"
    }
    if (personPicked < 51.7) {
        message = "A woman was picked!"
    }
    if (personPicked < 8.6) {
        message = "An elder woman as picked!"
    }
    resultElement.style.opacity = 1;
    resultElement.innerHTML = message;
    pickButton.innerHTML = "New Pick!";
    return null;
}