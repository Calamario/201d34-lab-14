'use strict';

var Cart = [];
var tbodyEl = document.getElementsByTagName('tbody')[0];


// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
// table.addEventListener('click', removeItemFromCart);

function loadCart() {
  Cart = JSON.parse(localStorage.getItem('cart')) || [];
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  // clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  tbodyEl.removeChild('tr');
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  // TODO: Iterate over the items in the cart

  for (var i in Cart) {
    var tdEl = document.createElement('td');
    var trEl = document.createElement('tr');
    tdEl.textContent = 'X';
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = parseInt(Cart[i].quantity);
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    tdEl.textContent = Cart[i].name;
    trEl.appendChild(tdEl);
    tbodyEl.appendChild(trEl);
  }
  console.log(Cart);
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
    var erase = event.target.text;
    console.log(event);
    if (erase === 'X') {
    tbodyEl.removeChild(trEl);

    }
  }
// }

  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table


// This will initialize the page and draw the cart on screen
renderCart();

