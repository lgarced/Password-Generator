
//Elements 
var password = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
let everyCharacter = "";


//This is the mess I am creating lol

function generatePassword () {
    let passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");
    if (passwordLength<8){
       alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else{
    alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
    }

// This is to make sure to guide the customer properly to get a close to efficient password.
    if (
      askLowerCase === false &&
      askUpperCase === false &&
      askNumeric === false &&
      askSpecialCharacters === false
    ) {
      alert("Please select at least one character type.");
      generatePassword();
    }
  }
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += everyCharacter.charAt(
      Math.floor(Math.random() * everyCharacter.length)
    );
  }
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;


//Adding event listent that will "listen" to the click and then shoot and email to the people upstairs.
generateBtn.addEventListener("click", writePassword)





