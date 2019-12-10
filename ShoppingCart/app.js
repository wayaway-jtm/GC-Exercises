// Initializing cart
let shoppingCart = new ShoppingCart();


// Form button event
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let newItemName = document.querySelector('#inpItemName').value;
    let newItemPrice = document.querySelector('#inpItemPrice').value;
    console.log('Item name: ', newItemName);
    console.log('Item price: ', newItemPrice);
    AddItemToCart(newItemName, newItemPrice);
})

// Add item to cart & update display
function AddItemToCart(newItemName, newItemPrice) {
    let newItem = new Item(newItemName, newItemPrice);
    shoppingCart.addItem(newItem);

    let main = document.querySelector('main');
    main.innerHTML += `<p class='cartItem'>
                            ${newItemName} &#8195; $${newItemPrice}
                        </p>`;
}