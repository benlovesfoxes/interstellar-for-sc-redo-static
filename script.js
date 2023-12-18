var loggedInForCodeGenerator = false;
var generatedCodes = [];
var links = [
  // Your list of links here
];

function login() {
  var password = document.getElementById("password").value;
  if (password === "72309") {
    loggedInForCodeGenerator = true;
    document.getElementById("codeGeneratorSection").style.display = "block";
    document.getElementById("password").value = "";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

function generateCode() {
  if (loggedInForCodeGenerator) {
    var code = Math.random().toString(36).substring(2, 8).toUpperCase();
    generatedCodes.push(code);
    document.getElementById("generatedCode").innerHTML = "Generated Code: " + code;
  } else {
    alert("Please login to generate a code.");
  }
}

function generateLink() {
  var code = document.getElementById("codeInput").value;
  if (generatedCodes.includes(code)) {
    var randomIndex = Math.floor(Math.random() * links.length);
    var link = links[randomIndex];
    document.getElementById("generatedLink").innerHTML = "Generated Link: " + link;
  } else {
    alert("Invalid code. Please try again.");
  }
}

function logout() {
  loggedInForCodeGenerator = false;
  document.getElementById("codeGeneratorSection").style.display = "none";
}
