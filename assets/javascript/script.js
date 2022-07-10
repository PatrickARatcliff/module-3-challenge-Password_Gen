// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");

  passwordText.value = password;

var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var lowLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var capLetters = [];
///capital letters from lowwercase(capitalized)
lowLetters.forEach(element => {
  capLetters.push(element.toUpperCase());
});
//console.log(capLetters);
var spclCharacters = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^",",","_","`","{","|","}","~"];

var charPool = [];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  function generatePassword () {
    window.confirm ("Generate new password?"); {
      if (!generatePassword) {
        return;
      //length of password (8-128 characters)
      } else {
        var passLength = window.prompt("Length of password? (8-128 characters)"); {
          //validate password is 8-128 characters
          if (passLength < 8 || passLength > 128) {
            window.alert("Password length must be between 8 & 128 characters.");
            return;
            };
        };
        //character type (lowercase, uppercase, numeric, and/or special characters)
        var inclLow = window.confirm("Include lowercase letters?"); {
          if (!inclLow) {
            console.log("lowLetters removed", )
            //add lowercase letters to character pool
            } else {lowLetters.forEach(lowLetters => {
              charPool.push(lowLetters);
            })};   
        };
        var inclCap = window.confirm("Include upper-case letters?"); {
          if (!inclCap) {
            console.log("capLetters removed")
            //add upper-case letters to character pool
            } else {capLetters.forEach(capLetters => {
              charPool.push(capLetters);
            })}; 
        }; 
        var inclNum = window.confirm("Include numbers?"); {
          if (!inclNum) {
            console.log("numbers removed")
            //add numbers to character pool
            } else {numbers.forEach(numbers => {
              charPool.push(numbers);
            })}; 
        }; 
        var inclSpcl = window.confirm("Include special characters?"); {
          if (!inclNum) {
            console.log("special characters removed")
            //add special characters to character pool
            } else {spclCharacters.forEach(spclCharacters => {
              charPool.push(spclCharacters);
            })}; 
        }; 
        // validate at least on character type
        if (!inclLow && !inclCap && !inclNum && !inclSpcl) {
          window.alert("You must include at least one character type!");
          return;
        }
        console.log(charPool) 
      };  
    };              
  };
};
       
//password generated

//password diplayed (alert/written to page)