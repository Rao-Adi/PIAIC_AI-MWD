function describe_city(city: string, country: string = "Unknown") {
    console.log(`${city} is in ${country}.`);
}

// Calling the function with different cities and countries
describe_city("Karachi", "Pakistan");
describe_city("London", "United Kingdom");
describe_city("Sydney"); // Using the default country "Unknown"
