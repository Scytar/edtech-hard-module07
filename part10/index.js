// HTML Elements
const productNameInput = document.getElementById('productName');
const productPrice = document.getElementById('productPrice');
const productDescriptionInput = document.getElementById('productDescription');
const addButton = document.getElementById('addButton');
const listButton = document.getElementById('listButton');
const productsTable = document.getElementById('productsList');
const messageBox = document.getElementById('messageBox');
const searchInput = document.getElementById('searchInput');
const nameColumnHeader = document.getElementById('nameColumnHeader');
const priceColumnHeader = document.getElementById('priceColumnHeader');

// Modals HTML Elements
    //Show Details Modal
    const showModal = document.getElementById('showModal');
    const showModalId = document.getElementById('showModalId');
    const showModalName = document.getElementById('showModalName');
    const showModalPrice = document.getElementById('showModalPrice');
    const showModalDescription = document.getElementById('showModalDescription');
    const showModalCreationDate = document.getElementById('showModalCreationDate');
    const showModalClose = document.getElementById('showModalClose');
    const showModalContent = document.getElementById('showModalContent');

    //Edit Modal
    const editModal = document.getElementById('editModal');
    const editForm = document.getElementById('editForm');
    const editProductId = document.getElementById('editProductId');
    const editCreationDate = document.getElementById('editCreationDate');
    const editProductName = document.getElementById('editProductName');
    const editProductPrice = document.getElementById('editProductPrice');
    const editProductDescription = document.getElementById('editProductDescription');
    const editButton = document.getElementById('editButton');
    const editModalClose = document.getElementById('editModalClose');
    const editMessageBox = document.getElementById('editMessageBox');

//Set unique id to each product
let nextElementId = 4;

//Current product to look
let myObj = null;

// List array
// productsList is not empty for testing convenience
let productsList = [
    {
        id: 0,
        name: 'Camera',
        price: 200,
        description: '600 Megapixels',
        creationDate: Date.now()
    },
    {
        id: 1,
        name: 'Notebook',
        price: 2000,
        description: 'Ryzen 7 32GB RAM',
        creationDate: Date.now()
    },
    {
        id: 2,
        name: 'Smartphone',
        price: 1500,
        description: '128GB ROM 6GB RAM',
        creationDate: Date.now()
    },
    {
        id: 3,
        name: 'Smart TV',
        price: 3000,
        description: '4k Bluetooth Wi-fi',
        creationDate: Date.now()
    }
];

// Fade out message box
function fadeMessageBox() {
    messageBox.textContent = '';
    messageBox.style.opacity = 0;
}

// Fade out edit modal message box
function fadeEditMessageBox() {
    editMessageBox.textContent = '';
    editMessageBox.style.opacity = 0;
}

// Check if inputs are valid
function checkInputs() {
    fadeMessageBox();
    try {
        if (productNameInput.value === '' || productPrice.value === '' || productDescriptionInput.value === '') throw `Please fill in all fields`;
        if (productNameInput.value.length < 3) throw `Product name must be at least 3 characters long`;
        if (productNameInput.value.length > 20) throw `Product name must be less than 20 characters long`;
        if (isNaN(productPrice.value)) throw 'Price is not a number';
        if (parseFloat(productPrice.value.replace(',','.')) <= 0) throw 'Product price must be greater than 0';
        if (productDescriptionInput.value.length < 5) throw `Product description must be at least 5 characters long`;
    } catch (error) {
        messageBox.textContent = error;
        messageBox.style.opacity = 1;
        setTimeout(fadeMessageBox, 3000);
        return false
    }
    return true;
}

// Check if edit inputs are valid
function checkEditInputs() {
    fadeEditMessageBox();
    try {
        if (editProductName.value === '' || editProductPrice.value === '' || editProductDescription.value === '') throw `Please fill in all fields`;
        if (editProductName.value.length < 3) throw `Product name must be at least 3 characters long`;
        if (editProductName.value.length > 20) throw `Product name must be less than 20 characters long`;
        if (isNaN(editProductPrice.value)) throw 'Price is not a number';
        if (parseFloat(editProductPrice.value.replace(',','.')) <= 0) throw 'Product price must be greater than 0';
        if (editProductDescription.value.length < 5) throw `Product description must be at least 5 characters long`;
    } catch (error) {
        editMessageBox.textContent = error;
        editMessageBox.style.opacity = 1;
        setTimeout(fadeEditMessageBox, 3000);
        return false
    }
    return true;
}

// Add product to list
function addProduct() {
    if (checkInputs()) {
        const creationDate = Date.now();
        const product = {
            id: nextElementId,
            name: productNameInput.value,
            price: productPrice.value.replace(',','.'),
            description: productDescriptionInput.value,
            creationDate: creationDate
        };
        //Set next object ID
        nextElementId++;
        productsList.push(product);

        //Updates products list
        listProducts(productsList);

        //Reset inputs
        productNameInput.value = '';
        productPrice.value = '';
        productDescriptionInput.value = '';

        // Display success message
        messageBox.style.opacity = 1;
        messageBox.textContent = `Product ${product.name} was added succesfully!`;
        setTimeout(fadeMessageBox, 3000);
    }
}

// Show product
function showProduct(id) {
    //Get product
    myObj = null;
    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].id === id) {
            myObj = productsList[i];
            break;
        }
    }
    const date = new Date(myObj.creationDate);

    //Show product details modal
    showModal.style.display = 'flex';
    showModalId.textContent = myObj.id;
    showModalName.textContent = myObj.name;
    showModalPrice.textContent = myObj.price;
    showModalDescription.textContent = myObj.description;
    showModalCreationDate.textContent = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

// Edit product
function openEditModal(id) {
    // Get product
    myObj = null;
    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].id === id) {
            myObj = productsList[i];
            break;
        }
    }
    const date = new Date(myObj.creationDate);

    //Show product edit modal
    editModal.style.display = 'flex';
    editProductId.textContent = myObj.id;
    editCreationDate.textContent = 'Created ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' - ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    //Show product current editable data
    editProductName.value = myObj.name;
    editProductPrice.value = myObj.price;
    editProductDescription.value = myObj.description;
}

//Edit product data
function editProduct(id) {
    //Check if inputs are valids
    if (checkEditInputs()) {
        //Update product object inside productsList[]
        productsList[id].name = editProductName.value;
        productsList[id].price = editProductPrice.value.replace(',','.');
        productsList[id].description = editProductDescription.value;
        productsList[id].creationDate = Date.now();

        //Display success message
        messageBox.style.opacity = 1;
        messageBox.textContent = `Product ${productsList[id].name} was edited succesfully!`;
        setTimeout(fadeMessageBox, 3000);

        //Close edit modal
        editModal.style.display = 'none';

        //Update products list
        listProducts(productsList);
    }
}

//Delete product
function deleteProduct(id) {
    //Create new empty array
    let newProductList = [];
    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].id === id) {
            newProductList = productsList.slice(0,i).concat(productsList.slice(i+1, productsList.length))
        }
    }
    //Swap original produtcs array with the new without the desired obj
    productsList = newProductList;

    //Updates the list in display
    listProducts(productsList);
}

// Update products list
function listProducts(list) {
    // Clear table
    productsTable.innerHTML = ``;

    for (let i = 0; i < list.length; i++) {
        const row = productsTable.insertRow(i);

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.innerHTML = `#${list[i].id} ${list[i].name}`;
        cell2.innerHTML = `R$ ${list[i].price}`;
        cell3.innerHTML = `<span class="material-icons")>edit</span>`;
        cell4.innerHTML = `<span class="material-icons">delete</span>`;

        cell1.classList.add('nameColumn');
        cell2.classList.add('priceColumn');
        cell3.classList.add('editColumn');
        cell4.classList.add('deleteColumn');
        
        //Set unique ID to be attached to the eventListener
        let id = list[i].id;
        cell1.addEventListener('click', ()=>{showProduct(id)});
        cell3.addEventListener('click', ()=>{openEditModal(id)});
        cell4.addEventListener('click', ()=>{deleteProduct(id)});
    }
    return null;
}

//Sort Products List by Alphabet
function sortProductsByAlphabet() {
    productsList.sort(function (a,b){
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    });
    nameColumnHeader.textContent = `Product ↓`;
    priceColumnHeader.textContent = `Price`;
    listProducts(productsList);
    return null;
}

//Sort Products List by Price
function sortProductsByPrice() {
    productsList.sort(function(a,b) {
        return (a.price - b.price);
    });
    nameColumnHeader.textContent = `Product`;
    priceColumnHeader.textContent = `Price ↓`;
    listProducts(productsList);
    return null;
}

//Sort Products List by ID
function sortProductsByID() {
    productsList.sort(function(a,b) {
        return (a.id - b.id);
    });
    nameColumnHeader.textContent = `Product`;
    priceColumnHeader.textContent = `Price`;
    listProducts(productsList);
    return null;
}

//Search Products by name/description string
function searchProduct() {

    //Clear message box
    fadeMessageBox();
    //Reset list headers
    nameColumnHeader.textContent = `Product`;
    priceColumnHeader.textContent = `Price`;
    if (searchInput.value === '') return sortProductsByID(); else {

        //Set an empty array to display filtered
        let searchList = [];
        //Look for matching name/description
        for (let i = 0; i < productsList.length; i++) {
            if ((productsList[i].name.toLowerCase()).includes(searchInput.value.toLowerCase().trim()) || (productsList[i].description.toLowerCase()).includes(searchInput.value.toLowerCase().trim())) {
                searchList.push(productsList[i]);
            }
        }

        //Display in message box
        messageBox.style.opacity = 1;
        messageBox.textContent = `${searchList.length} product(s) found`
        if (searchList.length === 0) messageBox.textContent = `No products were found using the current search key`;
        
        listProducts(searchList);
    }
    return null;
}

// Close modal if click away from it
    function modalClose(modalBackground) {
        modalBackground.style.display = 'none';
    }

    showModal.addEventListener('click', ()=>{modalClose(showModal)});
    showModalContent.addEventListener('click', (e)=>{e.stopPropagation()});
    editModal.addEventListener('click', ()=>{modalClose(editModal)});
    editForm.addEventListener('click', (e)=>{e.stopPropagation()});

showModalClose.addEventListener('click', ()=>{showModal.style.display = 'none'});
editModalClose.addEventListener('click', ()=>{editModal.style.display = 'none'});

addButton.addEventListener('click', addProduct);
listButton.addEventListener('click', sortProductsByID);
editButton.addEventListener('click', ()=>{editProduct(myObj.id)});
nameColumnHeader.addEventListener('click', sortProductsByAlphabet);
priceColumnHeader.addEventListener('click', sortProductsByPrice);
searchInput.addEventListener('input', searchProduct);

//Convinient for testing
listProducts(productsList);
editModalClose.addEventListener('click', ()=>{showModal.style.display = 'none'});