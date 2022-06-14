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

let fieldIsInvalid = true;
const resultDiv = document.querySelector("#resultDiv");
const resultName = document.querySelector("#resultName");
const resultWeight = document.querySelector("#resultWeight");
const resultHeight = document.querySelector("#resultHeight");
const resultBirthDate = document.querySelector("#resultBirthDate");
const resultGender = document.querySelector("#resultGender");
const resultJSON = document.querySelector("#resultJSON");

function checkDate() {
    const birthDate = Date.parse(birthDateInput.value)
    if ((birthDate >= currentDate) || (!birthDateInput.value)) {
        return false;
    
    } else {
        return true;
    }
    return null;
}

function saveProfile() {
    messageBox.textContent = "";
    
    user.name = nameInput.value;
    user.weight = parseFloat(weightInput.value);
    user.height = parseInt(heightInput.value);
    user.birthDate = birthDateInput.value;
    user.gender = genderInput.value;
    userJSON = JSON.stringify(user);
    
    try {
        fieldIsInvalid = false;
        if (nameInput.value.length < 5) throw 'Field "Name" is invalid!';
        if (isNaN(weightInput.value) || weightInput.value === "") throw 'Field "Weight" is invalid!';
        if (isNaN(heightInput.value) || heightInput.value === "") throw 'Field "Height" is invalid!';
        if (!checkDate()) throw 'Field "Birth Date" is invalid!';
        if (genderInput.value === "null") throw 'Field "Gender" is invalid!';
    }

    catch(err) {
        messageBox.textContent = err;
        fieldIsInvalid = true;
    }

    if (!fieldIsInvalid) {
        resultDiv.style.display = "block";
        resultName.textContent = user.name;
        resultWeight.textContent = user.weight;
        resultHeight.textContent = user.height;
        resultBirthDate.textContent = user.birthDate;
        resultGender.textContent = user.gender;
        resultJSON.textContent = userJSON;

        console.log(user,userJSON, userJSON.parse());
    }
    
    return null;
}

saveButton.addEventListener("click", saveProfile);
birthDateInput.addEventListener("change", checkDate);