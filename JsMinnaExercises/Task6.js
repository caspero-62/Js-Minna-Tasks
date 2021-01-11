//===================1.Solving task using Object Constructors=============//
function Cart() {
    //array of cart items
    let basket = [];

    //function to add item to the cart
    this.addItem = (itemName, quantity, price) => {
        //push the item to be added into the cart i.e basket array
        basket.map(item => {
            //making sure each item in the cart is unique
            if (item.itemName === itemName) {
                throw ('item with itemName exists already, try updating the cart');
            }
        });

        // basket.push({
        //     itemName: itemName,
        //     quantity: quantity,
        //     price: price
        // });

        basket = [...basket, {
            itemName: itemName,
            quantity: quantity,
            price: price
        }]

        //return statement for the purpose of viewing result after addition
        return basket;

    };

    //function to update property of item in cart
    this.updateItem = (itemName, parameter, value) => {
        //search for the object with the same itemName and update property otherwise return the object
        let newBasket = basket.map(item => {
            if (item.itemName === itemName) {
                return {...item, [parameter]: value}
            } else {
                return {...item}
            }
        });

        basket = newBasket;

         //return statement for the purpose of viewing result after update
        return basket;
    };

    //function to remover item from cart
    this.removeItem = (itemName, quantity) => {
        //deduct quantity of object with same itemName if greater than, remove item completely if same quantity, and throw error if less than 
        let newBasket = basket.map((item, idx) => {
            if (item.itemName === itemName) {
                if (item.quantity > quantity) {
                    return {...item,  quantity: item.quantity - quantity}
                } else if (item.quantity === quantity) {
                    item = null;
                } else {
                    throw 'Sorry item quantity is not up to quantity to be removed';
                }
            } else {
                return {...item}
            }
        });

        basket = newBasket.filter(item => item !== undefined);

        //return statement for the purpose of viewing result after removal
        return basket;
    };

    //function to calculate total price of items in cart
    this.total = () => {
        //logic to tell user cart is empty if basket is empty and return total price when its not;
        if(basket.length === 0) {
            return 'no items in cart';
        } else {
            const total = basket.reduce((arg, item) => arg + (item.price * item.quantity), 0);
            return total;
        }
    }
};

//shop object that user interacts with, inheriting Cart Object
function Shop(){
    //calling the Cart object.
    Cart.call(this);

    //adding a checkout function to the object
    this.checkout = (cash) => {
        switch (true) {
            case this.total() !== 0 && cash >= this.total() :
                return true;
                break;
            default:
                return false;
                break;
        }
    }
};

console.log('//==========Testing No.1==========//')
const myShop = new Shop();

console.log('adding bag:', myShop.addItem('bag', 20, 1500));

console.log('adding shoe:', myShop.addItem('shoe', 30, 3000));

console.log('updating shoe price:', myShop.updateItem('shoe', 'price', 3500));

console.log('removing bag quantity:', myShop.removeItem('bag', 15));

console.log('total cart price:', myShop.total());

console.log('checkout status:', myShop.checkout(4500));

console.log('checkout status:', myShop.checkout(5000));

console.log('view cart basket:', myShop.basket);
console.log('//==========Testing No.1==========//')

//===================2.Solving task using Object Class=============//
//======added 2 to classnames for distinction=========//
class Cart2 {
    constructor() {
        this.item = {};
        this.basket = [];
    }

    addItem(itemName, quantity, price){
        //push the item to be added into the cart i.e basket array
        this.basket.map(item => {
            //making sure each item in the cart is unique
            if (item.itemName === itemName) {
                throw ('item with itemName exists already, try updating the cart');
            }
        });

        this.item.itemName = itemName;
        this.item.quantity = quantity;
        this.item.price = price;

        this.basket = [...this.basket, this.item];
        this.item = {};

        //return statement for purposes of viewing result after addition
        return this.basket
    }

    updateItem(itemName, parameter, value){
        //search for the object with the same itemName and update property otherwise return the object
        let newBasket = this.basket.map(item => {
            if (item.itemName === itemName) {
                return {...item, [parameter]: value}
            } else {
                return {...item}
            }
        });

        this.basket = newBasket;

         //return statement for the purpose of viewing result after update
        return this.basket;
    }

    removeItem(itemName, quantity){
        //deduct quantity of object with same itemName if greater than, remove item completely if same quantity, and throw error if less than 
        let newBasket = this.basket.map((item, idx) => {
            if (item.itemName === itemName) {
                if (item.quantity > quantity) {
                    return {...item,  quantity: item.quantity - quantity}
                } else if (item.quantity === quantity) {
                    item = null;
                } else {
                    throw 'Sorry item quantity is not up to quantity to be removed';
                }
            } else {
                return {...item}
            }
        });

        this.basket = newBasket.filter(item => item !== undefined);

        //return statement for the purpose of viewing result after removal
        return this.basket;
    }

    total(){
        //logic to tell user cart is empty if basket is empty and return total price when its not;
        if(this.basket.length === 0) {
            return 'no items in cart';
        } else {
            const total = this.basket.reduce((arg, item) => arg + (item.price * item.quantity), 0);
            return total;
        }
    }
}

class Shop2 extends Cart2{
    constructor(){
        super();
    }

    checkout(cash){
        if (cash >= this.total()) {
            return (`true, ${cash - this.total()}`);
        } else{
            return false;
        }
    }
}

console.log('//==========Testing No.2==========//')
const myShop2 = new Shop2();

console.log('adding bag:', myShop2.addItem('bag', 20, 1500));

console.log('adding shoe:', myShop2.addItem('shoe', 30, 3000));

console.log('updating shoe price:', myShop2.updateItem('shoe', 'price', 3500));

console.log('removing bag quantity:', myShop2.removeItem('bag', 15));

console.log('total cart price:', myShop2.total());

console.log('checkout status:', myShop2.checkout(4500));

console.log('checkout status:', myShop2.checkout(5000));

console.log('view cart basket:', myShop2.basket);
console.log('//==========Testing No.2==========//')
