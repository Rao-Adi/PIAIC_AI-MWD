let friendNames: String[] = ["Abid Ali","Sohail Ahmed","Umar Khattab"];
 

printInvitation(friendNames);

console.log(`Hurra! We found a bigger table for dinner.\n`);
 
//Adding friend at the beginning 
friendNames.unshift("Owais");
console.log(`After adding friend "Owais" in the beginning .\n`);
printInvitation(friendNames);

// Adding friend at index 2/middle
friendNames.splice(2,0,"Yahya Husaini");
console.log(`After adding friend "Yahya Husaini" at Index 2 in the middle .\n`);
printInvitation(friendNames);


// Adding friend at the end
friendNames.push("Muhammad Noman");
console.log(`After adding friend "Muhammad Noman" at the end .\n`);
printInvitation(friendNames);

function printInvitation(arr:String[]){
    arr.forEach(name => {
        console.log(`Dear ${name}, You are cordially invited to attend the dinner party we have planned for June 7 2023 \n`);
    })
}
