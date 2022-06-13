const nameInput = document.querySelector("#nameInput");
const weightInput = document.querySelector("#weightInput");
const heightInput = document.querySelector("#heightInput");
const birthDateInput = document.querySelector("#birthDateInput");
const genderInput = document.querySelector("#genderInput");
const saveButton = document.querySelector("#saveButton");
const messageBox = document.querySelector("#messageBox");
const currentDate = new Date();
const user = {
    name: null,
    weight: null,
    height: null,
    birthDate: null,
    gender: null
};
let userJSON = null;

function saveProfile() {
    if ((birthDateInput.value != "") && (genderInput != null)) {
            
        user.name = nameInput.value;
        user.weight = parseFloat(weightInput.value);
        user.height = parseInt(heightInput.value);
        user.birthDate = birthDateInput.value;
        user.gender = genderInput.value;
        userJSON = JSON.stringify(user);
        messageBox.textContent = "";
    } else {
        messageBox.textContent = "Please fill all fields"
    }
    console.log(userJSON)
    return null;
}

function checkDate() {
    const birthDate = Date.parse(birthDateInput.value)
    if (birthDate >= currentDate) {
        messageBox.textContent = "Please enter a valid birth date!"
    
    } else{
        messageBox.textContent = ""
    }
    return null;
}

saveButton.addEventListener("click", saveProfile);
birthDateInput.addEventListener("change", checkDate);