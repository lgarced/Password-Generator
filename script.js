// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var lowerCases = "abcdefghijklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";


//Determine the lenght of the password and characters included
function generatePassword() {
  console.log("Button Clicked!") // Confirmation button was clicked
  var results = "";
  var numberOfCharacters = window.prompt("How many characters would you like your password to contain");
  var characterQuantity = parseInt(numberOfCharacters);
  if (characterQuantity >= 8 && characterQuantity <= 128) {
    var okayButton = [];
    while (true) {
      if (window.confirm("Click OK to confirm lowercase letter.")) {
        okayButton.push(lowerCases);
      }
      if (window.confirm("Click OK to confirm Uppercase letter.")) {
        okayButton.push(upperCases);
      }
      if (window.confirm("Click OK to confirm Numbers values")) {
        okayButton.push(numbers);
      }
      if (window.confirm("Click OK to confirm Special characters")) {
        okayButton.push(special);
      }
      if (okayButton.length > 0) {
        break;
      }
      alert("You need to confirm at least one kind of character, try again.");
    }
    for (var i = 0; i < characterQuantity; i++) {
      var storeButton = Math.floor(Math.random() * okayButton.length);
      var selectedArray = okayButton[storeButton];
       results += selectedArray[Math.floor(Math.random() * selectedArray.length)]; 

}}};


// Write password to the #password input
function writePassword () {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

    if (!password) {
    return
  }

  if (password) {
    passwordText.textContent = password;
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);


