// Assignment Code
var generateBtn = document.querySelector("#generate");

// character variables
var upChars = ('QWERTYUIOPASDFGHJKLZXCVBNM')
var lowChars = ('qwertyuiopasdfghjklzxcvbnm')
var numChars = ('1234567890')
var symbChar = ('!@#$%^&*(){}[]=<>/,.')

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//function to gen password
function generatePassword() {

  //empty variable for password characters
  var pChars = ('');
  //how long the user would want the password
  var pLength = window.prompt('choose how many characters you would like your password to be 10-50')
  // if passowrd is not within limits send prompt 
  if (pLength < 10 || pLength > 50) {
    window.alert('please choose adequate length')
  };
  //prompt for symbols
  var symbChars = window.confirm('Include symbols?')
  if (symbChars) {
    pChars += symbChars
  }
  //prompt for numbers
  var numChars = window.confirm('Include numbers?')
  if (numChars) {
    pChars += symbChars
  }
  //lowercase letter prompt
  var lowChars = window.confirm('Include lowercase letters?')
  if (lowChars) {
    pChars += lowChars
  }
  //Uppercase letter prompt
  var upChars = window.confirm('Include uppercase letters?')
  if (upChars) {
    pChars += upChars
  }
  //need to select at least one character type or else!
  if (upChars != true && lowChars != true && numChars != true && symbChar != true) {
    window.alert('Please select on character type')
  }
  //generate random password according to specification 
  var pGen = ("");
  for (let i = 0; i <pLength; i++) {
    pGen += pChars[Math.floor(Math.random() * pChars.length)]
  }
  //return password
  return pGen;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
