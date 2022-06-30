// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInteger(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInteger(list.length)]
}

function generatePassword() {
  var userInput = window.prompt("How long do you want your password to be?")
  
  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("That is not a number!")
    return
  }
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length must be between 8 and 128 characters")
    return
  }
  
  var userNumbers = window.confirm("Would you like to include numbers in your password?")
  var userSymbols = window.confirm("Would you like to include symbols in your password?")
  var userLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userUppercase = window.confirm("Would you like to include uppercase letters in your password?")

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolList = ["!", "?", "#", "$", "%", "^", "&", "*", "/"]
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercaseList = []

  var optionsSelection = []

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase
  }

  if (userNumbers == true) {
    optionsSelection.push(numberList)
  }

  if (userSymbols == true) {
    optionsSelection.push(symbolList)
  }

  if (userLowercase == true) {
    optionsSelection.push(lowercaseList)
  }

  if (userUppercase == true) {
    optionsSelection.push(uppercaseList)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsSelection)
    var randomCharacter = getRandomItem(randomList)
    generatedPassword += randomCharacter
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
