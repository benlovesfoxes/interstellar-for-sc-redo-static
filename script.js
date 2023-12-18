var loggedInForCodeGenerator = false;
var generatedCode = null;
var links = [
  "https://www.algebraxyz.info/",
  "https://www.algebraxyz.com/",
  // ... other links ...
];

function loginForCodeGenerator() {
  var password = prompt("Enter the password to access the code generator:");
  
  if (password === "72309") {
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
    document.getElementById("generate-link-btn").disabled = false; // Enable the Generate Link button
  } else {
    alert("Please log in to generate a code");
  }
}

function generateLink() {
  var oneTimeCode = document.getElementById("one-time-code").value;
  
  if (oneTimeCode === generatedCode) {
    var randomIndex = Math.floor(Math.random() * links.length);
    var generatedLink = links[randomIndex];
    document.getElementById("result").innerHTML = "Generated Link: <a href='" + generatedLink + "'>" + generatedLink + "</a>";
    document.getElementById("generate-link-btn").disabled = true; // Disable the Generate Link button
  } else {
    document.getElementById("result").innerHTML = "Invalid code.";
  }
}

function logoutFromCodeGenerator() {
  loggedInForCodeGenerator = false;
  generatedCode = null;
  document.getElementById("code-generator-content").style.display = "none";
  document.getElementById("generate-link-btn").disabled = true; // Disable the Generate Link button
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
