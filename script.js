var loggedInForCodeGenerator = false;
var generatedCodes = [];
var links = [
  "https://www.algebraxyz.info/",
  "https://www.algebraxyz.com/",
  "https://wisdom.educational.sciencevictory.org/",
  // Add your links here
];

// Load generated codes from local storage
function loadGeneratedCodes() {
  var storedCodes = localStorage.getItem("generatedCodes");
  if (storedCodes) {
    generatedCodes = JSON.parse(storedCodes);
  }
}

// Save generated codes to local storage
function saveGeneratedCodes() {
  localStorage.setItem("generatedCodes", JSON.stringify(generatedCodes));
}

// Initialize the code generator section
function initializeCodeGenerator() {
  loadGeneratedCodes();
  var isLoggedIn = localStorage.getItem("loggedInForCodeGenerator");
  if (isLoggedIn === "true") {
    loggedInForCodeGenerator = true;
    document.querySelector(".code-section").style.display = "block";
    document.querySelector(".login-button").style.display = "none";
    document.querySelector(".logout-button").style.display = "inline-block";
  }
}

// Login function
function login() {
  var password = document.getElementById("password").value;
  if (password === "72309") {
    loggedInForCodeGenerator = true;
    document.querySelector(".code-section").style.display = "block";
    document.querySelector(".login-button").style.display = "none";
    document.querySelector(".logout-button").style.display = "inline-block";
    localStorage.setItem("loggedInForCodeGenerator", "true");
    document.getElementById("password").value = "";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

// Generate code function
function generateCode() {
  if (loggedInForCodeGenerator) {
    var code = Math.random().toString(36).substring(2, 8).toUpperCase();
    generatedCodes.push({ code: code, used: false });
    saveGeneratedCodes();
    document.getElementById("generatedCode").innerHTML = "Generated Code: " + code;
  } else {
    alert("Please login to generate a code.");
  }
}

// Generate link function
function generateLink() {
  var code = document.querySelector(".link-input").value;
  var codeObject = generatedCodes.find(function (obj) {
    return obj.code === code && !obj.used;
  });

  if (codeObject) {
    var randomIndex = Math.floor(Math.random() * links.length);
    var link = links[randomIndex] + "?code=" + code;
    var generatedLinkElement = document.getElementById("generatedLink");
    generatedLinkElement.innerHTML = "Generated Link: ";
    var linkElement = document.createElement("a");
    linkElement.href = link;
    linkElement.textContent = link;
    generatedLinkElement.appendChild(linkElement);
    codeObject.used = true;
    saveGeneratedCodes();
  } else {
    alert("Invalid code. Please try again.");
  }
}

// Logout function
function logout() {
  loggedInForCodeGenerator = false;
  document.querySelector(".code-section").style.display = "none";
  document.querySelector(".login-button").style.display = "inline-block";
  document.querySelector(".logout-button").style.display = "none";
  localStorage.removeItem("loggedInForCodeGenerator");
}

// Initialize the code generator section
initializeCodeGenerator();
