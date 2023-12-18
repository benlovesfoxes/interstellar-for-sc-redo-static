var loggedInForCodeGenerator = false;
var generatedCode = null;

function loginForCodeGenerator() {
  var password = prompt("Enter the password to access the code generator:");
  
  // Perform your authentication logic here
  
  if (password === "your_password") {
    loggedInForCodeGenerator = true;
    document.getElementById("code-generator-content").style.display = "block";
  } else {
    alert("Invalid password");
  }
}

function generateCode() {
  if (loggedInForCodeGenerator) {
    generatedCode = generateRandomCode();
    document.getElementById("code").innerHTML = "Generated Code: " + generatedCode;
  } else {
    alert("Please log in to generate a code");
  }
}

function generateLink() {
  var oneTimeCode = document.getElementById("one-time-code").value;
  
  if (oneTimeCode === generatedCode) {
    var links = ["https://example.com/link1", "https://example.com/link2", "https://example.com/link3"];
    var randomIndex = Math.floor(Math.random() * links.length);
    var generatedLink = links[randomIndex];
    document.getElementById("result").innerHTML = "Generated Link: <a href='" + generatedLink + "'>" + generatedLink + "</a>";
  } else {
    document.getElementById("result").innerHTML = "Invalid code.";
  }
}

function logoutFromCodeGenerator() {
  loggedInForCodeGenerator = false;
  generatedCode = null;
  document.getElementById("code-generator-content").style.display = "none";
}

function generateRandomCode() {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var codeLength = 6;
  var code = "";
  
  for (var i = 0; i < codeLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }
  
  return code;
}
