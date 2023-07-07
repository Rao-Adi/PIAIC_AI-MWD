// Create an array to store rivers
let rivers: string[] = [
    "Nile",
    "Amazon",
    "Yangtze",
    "Mississippi",
    "Danube",
    "Ganges",
    "Congo",
  ];
  
  // Try to access an index that doesn't exist (intentional error)
  console.log(rivers[8]); // Accessing index 8, which is out of bounds
  
  // Corrected version
  console.log(rivers[6]); // Accessing index 9
  
