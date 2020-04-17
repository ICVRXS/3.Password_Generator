var generateBtn = document.querySelector("#generate");
// generateBtn.addEventListener("click", newPass);


var passLength = 0;
    lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    special = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", ",", "<", ".", ">", "/", "?", "'"];

function isPassLengthTrue(passLength) {
  return passLength >= 8 && passLength <= 128;
}

while (! isPassLengthTrue(passLength)) {
  passLength = parseInt (prompt("Provide a password length between 8 and 128"));
}

var options = {
  "passLength": passLength,
  "lowercase": confirm ("Would you like lowercase letters in your password?"),
  "uppercase": confirm ("Would you like UPPERCASE letters in your password?"),
  "numbers": confirm ("Would you like numbers in your password?"),
  "special": confirm ("Would you like special characters in your password?"),
};
console.log(options);


function passGen() {

  var possibleChars = [];
      requiredChars = [];
      password = "";

  if (options.lowercase){
    possibleChars = possibleChars.concat(lowercase);
    requiredChars.push(lowercase [Math.floor(Math.random()*lowercase.length)]);
  }
  if (options.uppercase){
    possibleChars = possibleChars.concat(uppercase);
    requiredChars.push(uppercase [Math.floor(Math.random()*uppercase.length)]);
  }
  if (options.numbers){
    possibleChars = possibleChars.concat(numbers);
    requiredChars.push(numbers [Math.floor(Math.random()*numbers.length)]);
  }
  if (options.special){
    possibleChars = possibleChars.concat(special);
    requiredChars.push(special [Math.floor(Math.random()*special.length)]);
  }

  for (var i = 0; i < options.passLength; i++) {
    if (requiredChars[i]){
      password += requiredChars[i];
    }else{
      password += possibleChars [Math.floor(Math.random()*possibleChars.length)];
    }
  }

  console.log(possibleChars);
  return password;

};

console.log(passGen());






// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
