function show_magicians(magicians: string[]): void {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

function make_great(magicians: string[]): string[] {
  let greatMagicians: string[] = [];

  for (let i = 0; i < magicians.length; i++) {
    greatMagicians.push(magicians[i] + " the Great");
  }

  return greatMagicians;
}

// Creating an array of magician's names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Making a copy of the magicians array
let originalMagicians: string[] = [...magicians];

// Calling the make_great() function with the copied array
let greatMagicians: string[] = make_great([...magicians]);

// Calling the show_magicians() function with both arrays
console.log("Original Magicians:");
show_magicians(originalMagicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
