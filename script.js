document.getElementById("codeForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var codeInput = document.getElementById("codeInput").value;
  var links = [
    "https://example.com/link1",
    "https://example.com/link2",
    "https://example.com/link3"
  ];
  
  // Validate the code
  if (codeInput === "your-onetime-code") {
    var randomIndex = Math.floor(Math.random() * links.length);
    var generatedLink = links[randomIndex];
    document.getElementById("result").innerHTML = "Generated Link: <a href='" + generatedLink + "'>" + generatedLink + "</a>";
  } else {
    document.getElementById("result").innerHTML = "Invalid code.";
  }
});
