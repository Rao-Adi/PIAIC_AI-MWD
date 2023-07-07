function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`The shirt size is ${size} and it will have the message: "${message}" printed on it.`);
}

// Calling the function with default values
make_shirt(); // Large shirt with default message: "I love TypeScript"

// Calling the function with different sizes and the default message
make_shirt("Medium"); // Medium shirt with default message: "I love TypeScript"

// Calling the function with a custom size and message
make_shirt("Small", "I Love C#"); // Custom size (Small) shirt with custom message: "I Love C#"
