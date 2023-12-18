var loggedIn = false;
var generatedCode = null;

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // Perform your authentication logic here
  
  if (username === "your_username" && password === "your_password") {
    loggedIn = true;
    document.getElementById("login-section").style.display = "none";
    document.getElementById("code-generator-section").style.display = "block";
    document.getElementById("link-generator-section").style.display = "block";
  } else {
    alert("Invalid username or password");
  }
}

function generateCode() {
  if (loggedIn) {
    generatedCode = generateRandomCode();
    document.getElementById("code").innerHTML = "Generated Code: " + generatedCode;
  } else {
    alert("Please log in first");
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

function logout() {
  loggedIn = false;
  generatedCode = null;
  document.getElementById("login-section").style.display = "block";
  document.getElementById("code-generator-section").style.display = "none";
  document.getElementById("link-generator-section").style.display = "none";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
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
