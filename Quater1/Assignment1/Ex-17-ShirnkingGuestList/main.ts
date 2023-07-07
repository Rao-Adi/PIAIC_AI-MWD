let friendNames: String[] = ["Abid Ali", "Sohail Ahmed", "Umar Khattab"];
let message: String = "You are cordially invited to attend the dinner party we have planned for June 7 2023.\n";

printInvitation(friendNames);

console.log(`Hurra! We found a bigger table for dinner.\n`);

//Adding friend at the beginning 
friendNames.unshift("Owais");
console.log(`After adding friend "Owais" in the beginning .\n`);
printInvitation(friendNames);

// Adding friend at index 2/middle
friendNames.splice(2, 0, "Yahya Husaini");
console.log(`After adding friend "Yahya Husaini" at Index 2 in the middle .\n`);
printInvitation(friendNames);


// Adding friend at the end
friendNames.push("Muhammad Noman");
console.log(`After adding friend "Muhammad Noman" at the end .\n`);
printInvitation(friendNames);

// remove friends to whom you are not inviting
console.log(`Unfortunately I can only invite two people for dinner because unavailablity of space for dinner.\n`);
//update message for sorry 
message = "I apologize fot not to invite you on dinner this time.\n";
printSorryMessage(friendNames);


//still invited message
console.log(`I am still inviting below friends for dinner.\n`);
// update message that your still inviting
message = "You are still cordially invited to attend the dinner party we have planned for June 7 2023.\n";
printInvitation(friendNames);

//Make list emplty
friendNames = [];
printInvitation(friendNames);


function printInvitation(arr: String[]) {
     
    if (arr.length > 0) {
        arr.forEach(name => {
            console.log(`Dear ${name},${message}`);
        })
    }
    else {
        console.log("Your Friend list is empty");
    }
}

function printSorryMessage(arr: String[]) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i == 1)
            break;
        console.log(`Dear ${arr[i]}, ${message}`);
        arr.pop();
    }
}

