const jsonInput = document.querySelector("#jsonInput");
const checkButton = document.querySelector("#checkButton");
const messageBox = document.querySelector("#messageBox");

    const emptyObject = {};
    emptyObject["spaced attribute"] = 1;
    Object.defineProperty(emptyObject, 'another attribute', {value:2});
    console.log(emptyObject["spaced attribute"], Object.getOwnPropertyDescriptor(emptyObject, 'another attribute'), emptyObject);

function checkJSON() {
    
    try {
        messageBox.textContent = "Parsable JSON string!";
        if (!JSON.parse(jsonInput.value)) {
            throw 'Text is not a JSON string!';
        } else {
            console.log(JSON.parse(jsonInput.value))
        }
    } catch (error) {
        messageBox.textContent = error;
    }

    return null;
}

checkButton.addEventListener("click", checkJSON);