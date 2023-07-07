function store_car_info(manufacturer: string, model: string, ...kwargs: any[]): object {
    let carInfo: object = {
        manufacturer: manufacturer,
        model: model,
        ...kwargs
    };

    return carInfo;
}

// Calling the function with required information and additional name-value pairs
let carInfo = store_car_info("Toyota", "Camry", {'color': "Silver"}, {'feature': "Sunroof"});

// Printing the object to verify the stored information
console.log(carInfo);
