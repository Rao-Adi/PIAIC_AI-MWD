let car = 'subaru';
let age = 25;
let fruits = ['apple', 'banana', 'orange'];

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford');

console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'honda'? I predict False.");
console.log(car === 'honda');

console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');

console.log("Is 'hello' lowercase == 'hello'? I predict True.");
console.log('hello'.toLowerCase() == 'hello');

console.log("Is 'WORLD' lowercase == 'world'? I predict False.");
console.log('WORLD'.toLowerCase() == 'world');

console.log("Is age == 25? I predict True.");
console.log(age == 25);

console.log("Is age != 30? I predict True.");
console.log(age != 30);

console.log("Is age > 18? I predict True.");
console.log(age > 18);

console.log("Is age < 20? I predict False.");
console.log(age < 20);

console.log("Is age >= 25? I predict True.");
console.log(age >= 25);

console.log("Is age <= 30? I predict True.");
console.log(age <= 30);

console.log("Is car == 'subaru' and age == 25? I predict True.");
console.log(car == 'subaru' && age == 25);

console.log("Is car == 'subaru' or age == 30? I predict True.");
console.log(car == 'subaru' || age == 30);

console.log("Is 'apple' in fruits? I predict True.");
console.log('apple' in fruits);

console.log("Is 'grape' not in fruits? I predict True.");
console.log(fruits.indexOf('grape') !== -1);
