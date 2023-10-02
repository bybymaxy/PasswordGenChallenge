
function generatePassword(){
  var length = window.prompt("length of password between 8 and 128")
    var addlower = window.confirm("add lowercase letters");
    var addupper = window.confirm("add uppcase letters")
    var addnumbers = window.confirm("add digits")
    var addSpecial = window.confirm("add special char") 
    
    var inputs = "";

    if (addlower) {
      inputs += "abcdefghijklmnopqrstuvwxyz"
    }

    if (addupper) {
      inputs += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if (addnumbers) {
      inputs += "1234567890"
    }

    if (addSpecial) {
      inputs += "~`!@#$%^&*()_+-={}|[]\:;'<>?,./'"
    }
    
    var passwordText = "";

    for(i = 0; i < length; i++) {
      passwordText += inputs.charAt(Math.floor(Math.random() * inputs.length));
      
  }
  return passwordText
}





var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var generateBtn = document.querySelector(".btn")
generateBtn.addEventListener("click", writePassword);
