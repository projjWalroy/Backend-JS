/*
class Product {
    discount = 10; // data member
    constructor(n, p) {
        / constructor function to create new real life instances called as object
        / When we create an object this constructor is the first function that gets called
        this.name = n; // data member
        this.price = p; // data member
    }

    / member function
    displayProduct() {
        console.log(this.name, this.price, this.discount); 
    }

    buyProduct() {

    }
}

let iphone = new Product("Iphone 11", 500000);
let macbook = new Product("Macbook air", 100000);
iphone.displayProduct();
/ console.log(iphone, macbook);
/ console.log(typeof macbook);
/ let obj = {
/     name: "Sanket",
/     age: 24
/ }

In js this keyword referenced to the calling side from where the function or class is called.
new keyword only called constructor but it does way more than that.
new keyword actually executes 4 step process
1. it creates empty brand new js object
2. it does a process of linking
3. it calles the function with this property assign to the empty 
4. the function execution starts and we know that this keyword belong to calling side, 
At last if the func doesnot return any specific object, then it autometically returns this.



*/