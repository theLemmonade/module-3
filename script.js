// Declare variables, define which characters the password can be generated comprising.
var lowChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numChar = ['0','1','2','3','4','5','6','7','8','9'];
var speChar = ['~','!','@','#','$','%','^','&','*','(',')','-','_','=','+',':', ';',',','.','?'];
var char = "";
var size = "";
var output ="";

// A series of window prompts will define password settings.
function generatePassword(){

// Length is defined by user as a number between 8 and 128.
size = window.prompt("How long should the password be? Enter a number of characters between 8 and 128:")
if (size < 8 || size > 128 || isNaN(size)) {
  return alert ("Please enter a number between 8 and 128.");
}

// Case, special, and numerical characters are defined by user as boolean.
var lowercase = confirm("Your password will be " + size + " characters long.\n\nDo you want to include lower case characters?");
var uppercase = confirm("Include lowercase is set to " + lowercase + ".\n\nDo you want to include uppercase characters?");
var numerical = confirm("Include uppercase is set to " + uppercase + ".\n\nDo you want to include numerical characters?");
var special = confirm("Include lowercase is set to " + numerical + ".\n\nDo you want to include special characters?");

// User input is verfied to be valid.
if (lowercase == false && uppercase == false && numerical == false && special == false) {
  return alert ("Password must include characters.");
}

// User defined settings are console logged for reference.
console.log("Length: " + size);
console.log("Include lowercase: " + lowercase);
console.log("Include uppercase: " + uppercase);
console.log("Include numerical: " + numerical);
console.log("Include special: " + special);

// Generate an array comprised of user defined character settings.
if (lowercase) {
  char = char.concat(lowChar);
}
if (uppercase) {
  char = char.concat(uppChar);
}
if (numerical) {
  char = char.concat(numChar);
}
if (lowercase) {
  char = char.concat(lowChar);
}

// Character array is console logged for reference.
console.log("Character settings: " + char)

// Password is generated
for (var i = 0; i <= size; i++) {
  let randomize = [Math.floor(Math.random() * char.length)];
  output = output + char[randomize];
}
return output;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var output = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = output;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
