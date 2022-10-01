// Declare variables, define which characters the password can be generated comprising.
var size = "";
var loChar = ['abcdefghijklmnopqrstuvwxyz'];
var upChar = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var nuChar = ['0123456789'];
var spChar = ['~!@#$%^&*()-_=+:;.,?'];
var input = "";
var output ="";

// A series of window prompts will define password settings.
function generatePassword(){

// Length is defined by user as a number between 8 and 128.
size = window.prompt("How long should the password be? Enter a number of characters between 8 and 128:")
if (size < 8 || size > 128 || isNaN(size)) {
  return alert ("Please enter a number between 8 and 128.");
}

// Case, special, and numerical characters are defined by user as boolean.
var lowercase = confirm("Your password will be " + size + " characters long.\n\nDo you want to include lower case characters?\n\nPress 'OK' for yes, press 'Cancel' for no.");
var uppercase = confirm("Include lowercase is set to " + lowercase + ".\n\nDo you want to include uppercase characters?\n\nPress 'OK' for yes, press 'Cancel' for no.");
var numerical = confirm("Include uppercase is set to " + uppercase + ".\n\nDo you want to include numerical characters?\n\nPress 'OK' for yes, press 'Cancel' for no.");
var special = confirm("Include lowercase is set to " + numerical + ".\n\nDo you want to include special characters?\n\nPress 'OK' for yes, press 'Cancel' for no.");

// User input is verfied to be valid.
if (lowercase == false && uppercase == false && numerical == false && special == false) {
  return alert ("Password must include characters.");
}

// Concatenate an array of characters defined as "input".
if (lowercase) {
  input = input.concat(loChar);
}
if (uppercase) {
  input = input.concat(upChar);
}
if (numerical) {
  input = input.concat(nuChar);
}
if (special) {
  input = input.concat(spChar);
}

// Console log user-defined settings
console.log("Length: " + size);
console.log("Include lowercase: " + lowercase);
console.log("Include uppercase: " + uppercase);
console.log("Include numerical: " + numerical);
console.log("Include special: " + special);
console.log("Character settings: " + input)

// Password is generated
for (var i = 0; i <= size; i++) {
  let randomize = [Math.floor(Math.random() * input.length)];
  output = output + input[randomize];
}
console.log("Password generated: " + output)
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
