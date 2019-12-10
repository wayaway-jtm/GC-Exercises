// Initializing cart
let shoppingCart = new ShoppingCart();


// Form button event
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let newItemName = document.querySelector('#inpItemName').value;
    let newItemPrice = document.querySelector('#inpItemPrice').value;
    addItemToCart(newItemName, newItemPrice);
})

// Add item to cart & update display
function addItemToCart(newItemName, newItemPrice) {
    let newItem = new Item(newItemName, newItemPrice);
    shoppingCart.addItem(newItem);

    let main = document.querySelector('main');
    main.innerHTML += `<p class='cartItem' id='${newItemName + newItemPrice.toString()}'>
                            <label>
                                <span class='itemName' id='${newItemName}'>${newItemName}</span>
                                <span class='itemPrice' id='${newItemPrice}'>$${Number(newItemPrice).toFixed(2)}</span>
                                <input type='checkbox' id='${newItemName + newItemPrice.toString()}'>
                            </label>
                        </p>`;
}

function removeSelectedItems() {
    let checkedBoxes = document.querySelectorAll("input[type='checkbox']:checked");
    if (checkedBoxes.length > 0) {
        for (const checkbox of checkedBoxes) {
            let pElement = checkbox.parentElement;
        }
    }
}