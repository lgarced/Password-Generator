// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCases = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCases = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "-",
  ".",
  "`",
  "~",
  "|",
  "<",
  ">",
  "=",
  "-",
  "_",
];

//Determine the lenght of the password and characters included. It will ask end user the following questions to determined what lenghts and values will the password have.
function generatePassword() {
  console.log("Button Clicked!"); // Confirmation button was clicked
  var options = collectUserInput();
  console.log(options);
var allPossibleCharacters = [];
var password = "";

  if (options.lowercase) {
    allPossibleCharacters = allPossibleCharacters.concat(lowerCases);
  } 
  if (options.upperCases) {
    allPossibleCharacters = allPossibleCharacters.concat(upperCases);
  } 
  if (options.special) {
    allPossibleCharacters = allPossibleCharacters.concat(special);
  }
  if (options.numbers) {
    allPossibleCharacters = allPossibleCharacters.concat(numbers);
  } 
  
  for (var i = 0; i < options.length; i++) {
    var arrayIndex = Math.floor(Math.random() * allPossibleCharacters.length);
    var selectedArray = allPossibleCharacters[arrayIndex];
     password = password + selectedArray
  }
  return password;
}

function collectUserInput() {
  var results = "";
  var numberOfCharacters = window.prompt(
    "How many characters would you like your password to contain?"
  );
  var characterQuantity = parseInt(numberOfCharacters);
  if (Number.isNaN(characterQuantity)) {
    //if they put text instead of a number
    alert("You did it wrong, put a number!!!");
    collectUserInput();
  }
  if (characterQuantity >= 8 || characterQuantity <= 128) {
    var useLowercase = window.confirm("Click OK to confirm lowercase letter.");

    var useUppercaser = window.confirm("Click OK to confirm Uppercase letter.");

    var useNumbers = window.confirm("Click OK to confirm Numbers values");

    var useSpecial = window.confirm("Click OK to confirm Special characters");

  } else {
    alert("You did it wrong!!!"); // if they picked a wrong number
    collectUserInput();
  }

  console.log("Questions answered");
  return {
    length: numberOfCharacters,
    lowercase: useLowercase,
    upperCases: useUppercaser,
    special: useSpecial,
    numbers: useNumbers,
  };
}

// Write password to the #password input
function writePassword() {
  var passwords = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwords;

  setTimeout(function () {
    passwordText.value = "For your safety, your passwor 🔒 was delete";
    setTimeout(function () {
      passwordText.value = "Thanks for your patronage!🤗 ";
      setTimeout(function () {
        passwordText.value = " ";
      },1500)
    },3000)
  },10000)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
