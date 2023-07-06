//Create Person Name
let personName ="aBdul Ahad";

// Print Person Name in upper case
console.log(personName.toUpperCase());
// Print Person Name in lower case
console.log(personName.toLocaleLowerCase());

// Convert Person Name int Title case
const newName = personName.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")
console.log(newName)


// Create variable with my favorite number
let myFavNumber:Number = 5;
// print my favorite number
console.log(`My Favorite Number is ${myFavNumber}`);
