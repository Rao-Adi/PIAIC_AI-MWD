let animals: string[] = ["Dog", "Cat", "Rabbit"];
//print animals name
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

console.log("");
//print animal names with statement
for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];

  if (animal === "Dog") {
    console.log("A dog would make a great pet.");
  } else if (animal === "Cat") {
    console.log("A cat would make a great pet.");
  } else if (animal === "Rabbit") {
    console.log("A rabbit would make a great pet.");
  }
}

console.log("");
//final statement
console.log("Any of these animals would make a great pet!");
