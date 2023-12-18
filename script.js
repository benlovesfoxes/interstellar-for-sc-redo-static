var loggedInForCodeGenerator = false;
var generatedCodes = [];
var links = [
  "https://www.algebraxyz.info/",
  "https://www.algebraxyz.com/",
  "https://wisdom.educational.sciencevictory.org/",
  // Add your links here
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
    generatedCodes.push({ code: code, used: false });
    document.getElementById("generatedCode").innerHTML = "Generated Code: " + code;
  } else {
    alert("Please login to generate a code.");
  }
}

function generateLink() {
  var code = document.getElementById("codeInput").value;
  var codeObject = generatedCodes.find(function (obj) {
    return obj.code === code && !obj.used;
  });

  if (codeObject) {
    var randomIndex = Math.floor(Math.random() * links.length);
    var link = links[randomIndex] + "?code=" + code;
    document.getElementById("generatedLink").innerHTML = "Generated Link: " + link;
    codeObject.used = true;
  } else {
    alert("Invalid code. Please try again.");
  }
}

function logout() {
  loggedInForCodeGenerator = false;
  document.getElementById("codeGeneratorSection").style.display = "none";
}
