let current_users: string[] = ["Waleed", "Waqar", "Mustafa", "Ahmed", "Sohail"];
let new_users: string[] = ["Asim", "Mustafa", "Waleed", "Raheel", "Shanze"];

// loop over new_users array
for (let i = 0; i < new_users.length; i++) {
  let usernameExists = false;

  //loop over current_users array
  for (let j = 0; j < current_users.length; j++) {
    //check if new_users item exist in current_users
    if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
      usernameExists = true;
      break;
    }
  }

  if (usernameExists) {
    console.log(`Sorry, the username "${new_users[i]}" is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations! The username "${new_users[i]}" is available.`);
  }
}
