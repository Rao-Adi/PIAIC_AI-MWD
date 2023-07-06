let personName ="Abdul Ahad";

console.log(personName.toUpperCase());
console.log(personName.toLocaleLowerCase());

const newName = personName.split(" ").map((l: string) => l[0].toUpperCase() + l.substr(1)).join(" ")
console.log(newName)
