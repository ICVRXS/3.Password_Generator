// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength = 0;
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", ",", "<", ".", ">", "/", "?", "'"];

function isPassLengthTrue (passLength) {
  return passLength >= 8 && passLength <= 128;
}

while (! isPassLengthTrue (passLength)) {
  passLength = parseInt (prompt("Provide a password length between 8 and 128"));
}

var options = {
  "passLength": passLength,
  "lowercase": confirm ("Would you like lowercase letters in your password?"),
  "uppercase": confirm ("Would you like UPPERCASE letters in your password?"),
  "numbers": confirm ("Would you like numbers in your password?"),
  "special": confirm ("Would you like special characters in your password?");
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
