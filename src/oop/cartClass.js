import _ from 'lodash';
export default class Cart {
    constructor() {
        this.items = []
    }

    addItem(item, count) {
        this.items.push({ item, count})
    }
    getItems() {
        return this.items
    }
    getCost() {
        return this.items.reduce((acc, cartItem) => acc + cartItem.item.price * cartItem.count, 0)
    }
    getCount() {
        return this.items.reduce((acc, cartItem) => acc + cartItem.count, 0)
    }
}

const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
cart.getItems().length;  //?
// 2
cart.getCost(); //?
// 35
cart.getCount(); //?