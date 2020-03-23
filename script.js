

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Returns a regular expression defining a vocabulary that
// conforms to given parameters. Set parameter true to 
// include char sets, false to exclude.
function generateRegex(numeric, special, uppercase, lowercase){
  var numstr = "0-9";
  var spcstr = "\\W";
  var lcstr = "a-z";
  var ucstr = "A-Z";
  var regex = '[';
  if(numeric) regex += numstr; 
  if(special) regex += spcstr; 
  if(uppercase) regex += ucstr; 
  if(lowercase) regex += lcstr; 
  return RegExp(regex + "]+");
}

// Returns a random non whitespace ASCII character
function randChar(){
  var lo = 33;    //start of non whitespace chars in ASCII
  var hi = 126;   //end of non whitespace chars in ASCII
  var r = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return String.fromCharCode(r % (hi - lo) + lo);
}

// Returns true if at least one character in given string matches
// given regex pattern
function containsChar(password, regex){
  for(var i = 0; i < password.length; i++)
    if(regex.test(password[i])) return true;
  return false;
} 

// Prompts user to input password criteria and returns a random
// string conforming to selected criteria.
function generatePassword(){
  
  // request and validate input from the user
  while(true){
    var length = prompt("Choose a password length between 8 and 128 characters.");
    if(length >= 8 && length <=128) break;
    else alert("Please enter an integer value between 8 and 128 inclusive.");
  }
  while(true){
    var numeric = confirm("Should the password contain numeric characters?");
    var special = confirm("Should the password contain special characters?");
    var uppercase = confirm("Should the password contain uppercase characters?");
    var lowercase = confirm("Should the password contain lowercase characters?");
    if(numeric || special || uppercase || lowercase) break;
    else alert("Password must include at least one class of characters.");
  }
  
  // generate regex conforming to selected criteria
  var regex = generateRegex(numeric, special, uppercase, lowercase);
  var password = "";
  var c;
  var isValid = false;
  
  while(!isValid){
    
    // generate password
    while(password.length < length){
      c = randChar();
      if(regex.test(c)) password += c;
    }
    
    // validate password
    isValid = true;
    if(numeric   && !containsChar(password, RegExp("[0-9]")) || 
       special   && !containsChar(password, RegExp("[\\W]")) || 
       uppercase && !containsChar(password, RegExp("[A-Z]")) ||
       lowercase && !containsChar(password, RegExp("[a-z]"))) isValid = false; 
    }
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Testing out cryptographic random number generator
var array = new Uint32Array(10);
window.crypto.getRandomValues(array);
 
 