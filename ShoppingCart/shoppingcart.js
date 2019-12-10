class Item {
    constructor(itemName, itemPrice) {
        this.name = itemName;
        this.price = itemPrice;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(itemName, itemPrice) {
        this.items.push(new Item(itemName, itemPrice));
    }

    removeItem(itemName) {
        this.items.splice(this.items.findIndex(item => item.name === itemName), 1);
    }

    editItem() {

    }

    printTotal() {
        let totalPrice = 0;
        for (const item of this.items) {
            totalPrice += item.price;
        }

        totalPrice *= 1.06;
        console.log('Total: ', totalPrice);
        return totalPrice;
    }
}