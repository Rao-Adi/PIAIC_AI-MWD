let friendNames: String[] = ["Abid Ali","Sohail Ahmed","Umar Khattab"];
 

printInvitation(friendNames);
console.log(`Unfortunatlity, ${friendNames[1]} cannot make it.\n`);

//modify Frinds list
friendNames[1] ="Rao Hasnain";

printInvitation(friendNames);

//creating function
function printInvitation(arr:String[]){
    arr.forEach(name => {
        console.log(`Dear ${name}, You are cordially invited to attend the dinner party we have planned for June 7 2023 \n`);
    })
}
