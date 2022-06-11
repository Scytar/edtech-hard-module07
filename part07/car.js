const carSelect = document.querySelector("#carSelect");
const carDisplay = document.querySelector("#carDisplay");
const carPrice = document.querySelector("#carPrice");
const carName = document.querySelector("#carName");
const carManufacturer = document.querySelector("#carManufacturer");
const carMaxSpeed = document.querySelector("#carMaxSpeed");
const carAcc = document.querySelector("#carAcc");
const carWeight = document.querySelector("#carWeight");
// Ref: https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=18200
const mcLaren = {
    carPrice: "R$6 700 000,00",
    carName: "765LT",
    carManufacturer: "McLaren",
    carMaxSpeed: 330,
    carAcc: 2.8,
    carWeight: 1339,
    carDisplay: "./assets/imgs/mclaren.jpg"
};
// Ref: https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=11868
const ferrari = {
    carPrice: "R$7 000 000,00",
    carName: "SF90 Stradale",
    carManufacturer: "Ferrari",
    carMaxSpeed: 340,
    carAcc: 2.5,
    carWeight: 1570,
    carDisplay: "./assets/imgs/ferrari.jpg"
};
// Ref: https://www.carrosnaweb.com.br/fichadetalhe.asp?codigo=17799
const lamborghini = {
    carPrice: "R$7 400 000,00",
    carName: "Aventador SVJ 770-4",
    carManufacturer: "Lamborghini",
    carMaxSpeed: 350,
    carAcc: 2.8,
    carWeight: 1525,
    carDisplay: "./assets/imgs/lamborghini.jpg"
};

carSelect.addEventListener("change", selectCar);

function selectCar() {
    let carSelected = null;
    switch (carSelect.value) {
        case "ferrari":
            carSelected = ferrari;
            break;
        
        case "mcLaren":
            carSelected = mcLaren;
            break;

        case "lamborghini":
            carSelected = lamborghini;
            break;
    }
    carDisplay.style.backgroundImage = `url(${carSelected.carDisplay})`;
    carPrice.textContent = carSelected.carPrice;
    carName.textContent = carSelected.carName;
    carManufacturer.textContent = carSelected.carManufacturer;
    carMaxSpeed.textContent = carSelected.carMaxSpeed;
    carAcc.textContent = carSelected.carAcc;
    carWeight.textContent = carSelected.carWeight;
    return null;
}