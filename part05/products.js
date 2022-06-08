const productSelect = document.querySelector("#productSelect");
const productDisplay = document.querySelector("#productDisplay");

productSelect.addEventListener("input", showProduct);

function showProduct() {
    
    switch (productSelect.value) {
        case "Perfume":
            productDisplay.style.backgroundImage = "url(./assets/imgs/perfume.jpg)"
            break;
        case "Notebook":
            productDisplay.style.backgroundImage = "url(./assets/imgs/notebook.jpg)";
            break;
        case "Fan":
            productDisplay.style.backgroundImage = "url(./assets/imgs/fan.jpg)";
            break;
        case "Car":
            productDisplay.style.backgroundImage = "url(./assets/imgs/car.jpg)";
            break;
        case "Fridge":
            productDisplay.style.backgroundImage = "url(./assets/imgs/fridge.jpg)";
            break;
        case "default":
            productDisplay.style.backgroundImage = "url(./assets/imgs/store.png)";
            break;
        default:
            productDisplay.style.backgroundImage = "url(./assets/imgs/store.png)";
            break;
    }

    return null;
}