// Product Inventory Project – Create an application which manages an inventory of products. Create a product class which has a price, id, and quantity on hand. Then create an inventory class which keeps track of various products and can sum up the inventory value

// Product constructor
function Product(name, price, quantity, measurement) {
    return {
        name: name,
        price: price,
        quantity: quantity,
        measurement: measurement,
        getValue: function() {
            return this.price * this.quantity;
        },
    };
    
};

// Products in the store
var products = [
	milk = Product('Milk', 3.00, 250, "gallons"),
    eggs = Product('Eggs', 1.50, 100, "cartons"),
    beef = Product('Beef', 4.50, 100, "pounds"),
    bananas = Product('Bananas', 5, 0, 'bunches'),
];

// Inventory class
var Inventory = {
	totalValue: 0,

// Function to compute total inventory value 
	totalAdd: function() {
		for (var i = 0; i < products.length; i++) {
			this.totalValue += (products[i].price * products[i].quantity);
		}
	},

// List of products, separated by in stock and out of stock
	productList: function() {
		console.log("Currently in stock:");
	for (var i = 0; i < products.length; i++) {
		if (products[i].quantity > 0) {
    		console.log(products[i].name);
    } else {
    	console.log("Currently out of stock: " + products[i].name);

    }
} 	
}
}


// Testing
Inventory.totalAdd();
Inventory.productList();
console.log("The total value of all the milk in inventory is $" + milk.getValue() + ", constituting " + milk.quantity + " " + milk.measurement + " at a cost of $" + milk.price + " per unit.");
console.log("The total value of the items in inventory is $" + Inventory.totalValue);