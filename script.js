function login() {
  var password = prompt("Please enter the password:");
  if (password === "72309") {
    document.getElementById("codeGeneratorSection").style.display = "block";
  } else {
    alert("Invalid password. Please try again.");
  }
}

function generateCode() {
  var code = ""; // Add your code generation logic here
  document.getElementById("generatedCode").innerText = "Generated Code: " + code;
}

function generateLink() {
  var code = document.getElementById("codeInput").value;
  var link = "https://example.com/" + code; // Modify the link generation logic here
  document.getElementById("generatedLink").innerHTML = "Generated Link: <a href='" + link + "'>" + link + "</a>";
}

function logout() {
  document.getElementById("codeGeneratorSection").style.display = "none";
  document.getElementById("generatedCode").innerText = "";
  document.getElementById("generatedLink").innerText = "";
}
