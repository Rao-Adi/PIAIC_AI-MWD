function order_sandwich(...items: string[]): void {
    console.log("Sandwich order summary:");
    console.log("Bread: ", items[0]);
    console.log("Meat: ", items[1]);
    console.log("Vegetables: ", items.slice(2).join(", "));
    console.log("------------------------");
}

// Calling the function with different number of arguments
order_sandwich("Wheat Bread", "Turkey", "Lettuce", "Tomato", "Onion");
order_sandwich("Sourdough Bread", "Ham", "Cheese");
order_sandwich("Multigrain Bread", "Chicken");
