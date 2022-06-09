const productSelect = document.querySelector("#productSelect");
const productDisplay = document.querySelector("#productDisplay");

//Adding a button increments the number of user interactions, so it's not a good practice for a simple task such as show an product image
//In order to add a button, the following code should be swapped with the code line 10, also, it's required to add an html button element in the HTML file between lines 30 and 31.
//--Start of the code-- //
//const viewButton = document.querySelector("#viewButton");
//viewButton.addEventListener("click", showProduct);
//--End of the code-- //
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