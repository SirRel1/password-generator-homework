
const resultEl = document.getElementById("password")
// var lengthEl = userLen;
var intro = function () {
  userLen = prompt("How long would you like your password to be?");

  

  //Conditionals to require a certain type and length from user.
if (userLen < 8 || userLen < 0) {
  alert("Password length must be greater than 7!")
  intro();

}
else if (userLen > 129) {
  alert("Password cannot be longer than 129 characters!")
  intro();
}
else if (isNaN(userLen)) {
  alert("You must enter a number in digits")
  intro();
}
 else if (userLen == null) {
   alert("Enter a number length between 7-129 please...")
   intro();
}
else {
  
  
    }
  }
  intro();
  var lengthEl = userLen;

  
//Functions to generate random: nums(upper/lower), symbols
const randomFunc = {
    lower: forLower,
    upper: forUpper,
    number: forandNum,
    symbol: forSymbol
};




//DOM element connections

// var passwordDislpay = document.getElementById("password").innerHTML = ''
const but = document.querySelector('.btn')
generate.addEventListener('click', () => {
    const length = +lengthEl;
    const hasLower = lowerCase;
    const hasUpper = upperCase;
    const hasSymbol = symbols;
    const hasNumber = numbers;

    resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol,
    length
    );

  
});

//Generate function
function generatePassword (lower, upper, number, symbol, length) {
    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
         return '';
    }

    for(let i=0; i<length; i+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatedPassword.slice(0, length);
	
	  return finalPassword;
}

function forLower () {
  return String.fromCharCode(Math.random(Math.floor) * 26 + 97);
}

 function forUpper () {
  return String.fromCharCode(Math.random(Math.floor) * 26 + 65);
}

 function forandNum () {
  return String.fromCharCode(Math.random(Math.floor) * 10 + 48);
}

 function forSymbol () {
  return String.fromCharCode(Math.random(Math.floor) * 15 + 33);
}


//variables to store user choices for password properties
var passwordLength = userLen
var lowerCase = confirm("Do you want lowercase characters?")
var upperCase = confirm("Do you want UPPERCASE characters?")
var numbers = confirm("Do you want numbers in your password?")
var symbols = confirm("Do you want special characters?")


// function generatePassword() {
//   var theWord = document.getElementById("password").innerHTML= 'Yes';
  
// }




  // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var passwor = generatePassword();
//   // var passwordText = document.querySelector("#password");

//   // passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

