/* global Product, Cart */

'use strict';

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var optionEl = document.createElement('option');
    optionEl.textContent = Product.allProducts[i].name;
    // var imgEl = document.createElement('img');
    // imgEl.src = Product.allProducts[i].filePath;
    selectElement.appendChild(optionEl);
    // selectElement.appendChild(imgEl);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  console.log(event);
  // Do all the things ...
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  var selectElement = document.getElementById('items');
  var selectedName = selectElement.options[selectElement.selectedIndex].text;
  // console.log(selectedName);

  // TODO: suss out the item picked from the select list
  for(var i in Product.allProducts) {
    if(selectedName === Product.allProducts[i].name) {
      var selectedFilePath = Product.allProducts[i].filePath;
    }
  }
  console.log(selectedFilePath);
  // TODO: get the quantity
  var quantityEl = document.getElementById('quantity');
  var selectedQuantity = quantityEl.value;
  // console.log(selectedQuantity);
  // TODO: using those, create a new Cart item instance
  new Cart(selectedName, selectedFilePath, selectedQuantity);
  // console.log(Cart.allInCart);
}

// TODO: Save the contents of the cart to Local Storage
function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(Cart.allInCart));
}

var itemCounter = 0;
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var quantityEl = document.getElementById('quantity');
  itemCounter += parseInt(quantityEl.value);
  var spanEl = document.getElementById('itemCount');
  spanEl.textContent = itemCounter;
  console.log(spanEl);
}

// Rewrite this section to print out from the array Cart.allinCart. Give conditional to handleSubmit function that tests for overlap in names.

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  var previewEl = document.getElementById('cartContents');

  var selectElement = document.getElementById('items');
  var selectedName = selectElement.options[selectElement.selectedIndex].text;

  var quantityEl = document.getElementById('quantity');
  var selectedQuantity = quantityEl.value;
  // TODO: Add a new element to the cartContents div with that information
  var pEl = document.createElement('p');
  pEl.textContent = selectedName + ': ' + selectedQuantity + ' ordered';
  previewEl.appendChild(pEl);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
