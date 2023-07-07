// Define the array of locations
let locations: string[] = ["Japan", "New York", "Pakistan", "India", "UAE"];

// Print the array in its original order
console.log("Original order:");
console.log(locations);

// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical order:");
console.log([...locations].sort());

// Print the array to show that it's still in its original order
console.log("Original order after sorting:");
console.log(locations);

// Print the array in reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:");
console.log([...locations].sort().reverse());

// Print the array to show that it's still in its original order
console.log("Original order after reverse sorting:");
console.log(locations);

// Reverse the order of the list
locations = locations.reverse();

// Print the array to show that its order has changed
console.log("Reversed order:");
console.log(locations);

// Reverse the order of the list again to restore its original order
locations = locations.reverse();

// Print the array to show that it's back to its original order
console.log("Original order after double reversal:");
console.log(locations);

// Sort the array in alphabetical order
locations.sort();

// Print the array to show that its order has been changed
console.log("Alphabetical order after sorting:");
console.log(locations);

// Sort the array in reverse alphabetical order
locations.sort((a, b) => b.localeCompare(a));

// Print the array to show that its order has changed
console.log("Reverse alphabetical order after sorting:");
console.log(locations);
