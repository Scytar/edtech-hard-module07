const getDate = new Date()
const thisYear = getDate.getFullYear();
const thisMonth = getDate.getMonth()+1;
const thisDay = getDate.getDate();

let bYear = null;
let bMonth = null;
let bDay = null;
let gender = null;

// Listen for birthdate
document.querySelector("#birthYear").addEventListener("change", (e) => {
    bYear = Number(e.target.value);
    // console.log(bYear);
});
document.querySelector("#birthMonth").addEventListener("change", (e) => {
    bMonth = Number(e.target.value);
    // console.log(bMonth);
});
document.querySelector("#birthDay").addEventListener("change", (e) => {
    bDay = Number(e.target.value);
    // console.log(bDay);
});

// Listen for gender
document.querySelector("#genderFemale").addEventListener("change", (e) => {
    gender = e.target.value;
    // console.log(gender)
});
document.querySelector("#genderMale").addEventListener("change", (e) => {
    gender = e.target.value;
    // console.log(gender)
});

// Listen for death calc button
document.querySelector("#deathButton").addEventListener("click", (e) => {
    let ageYears = (thisYear - bYear);
    let ageMonths = (thisMonth - bMonth);
    let ageDays = (thisDay - bDay);
    let ageTotalDays = (ageYears*365)+(ageMonths*30)+ageDays;
    let lifeSpan = null

    // Data from IBGE
    if (gender === "female") {
        lifeSpan = 29237
    }
    if (gender === "male") {
        lifeSpan = 26682
    }

    let result = (lifeSpan - ageTotalDays)

    let message = "Enjoy your " + result + " days remaining. Make good use of them!"

    if (result === 0) {
        message = "Dear friend, I fear your time has come. Embrace yourself... Your deathday is today."
    }

    if (result < 0) {
        message = "Mayhaps you weren't supposed to be alive. Your death day was " + -result + " days ago..."
    }

    if (bDay+bMonth+bYear === 0) {
        message = "Are you... ⠀ ⠀ ⠀ Jesus?!"
    }

    if (gender === null) {
        message = "I know your soul is genderless, but you're more than bones at this moment..."
    }


    document.querySelector("#result").style.opacity = 1;
    document.querySelector("#result").innerHTML = message;
    // console.log(ageDays, ageMonths , ageYears, ageTotalDays, lifeSpan, result)
});