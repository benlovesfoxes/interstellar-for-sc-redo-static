var loggedInForCodeGenerator = false;
var generatedCode = null;
var links = [
  "https://www.algebraxyz.info/",
  "https://www.algebraxyz.com/",
  "https://wisdom.educational.sciencevictory.org/",
  "https://www.algebraxyz.online/",
  "https://www.math-solver.info/",
  "https://www.recycleright.pro/",
  "https://175.135.128.34.bc.googleusercontent.com/room",
  "https://103.78.190.35.bc.googleusercontent.com/app",
  "https://100.87.111.34.bc.googleusercontent.com/room",
  "https://133.139.110.34.bc.googleusercontent.com/app",
  "https://77.165.128.34.bc.googleusercontent.com/app",
  "https://116.137.128.34.bc.googleusercontent.com/app",
  "https://205.196.110.34.bc.googleusercontent.com/app",
  "https://243.203.227.35.bc.googleusercontent.com/room",
  "https://100.87.111.34.bc.googleusercontent.com/app",
  "https://175.135.128.34.bc.googleusercontent.com/app",
  "https://55gms.us/",
  "https://55gms.pro/",
  "https://windows11-react.vercel.app/",
  "https://55gms.us/assets/exploits/games/yt",
  "https://movie-web-meta-refactor.vercel.app/#/search/movie",
  "https://shuttletv.net/",
  "https://win11ui.netlify.app/screen",
  "http://xn--tp9haa.glitch.me/",
  "https://www.myturtle.net/",
  "https://general-mathematics-beta.moaivr123.repl.co/",
  "https://incognito-static-version.pages.dev/",
  "https://elixir-6.hop.sh/",
  "https://primemath.lol/",
  "https://s-deblok.rare1k.dev/#/login",
  "https://palladium-1.maddoxhyttinen.repl.co/",
  "https://tsunami-1.28knowledgeherr.repl.co/",
  "https://math-education.fowlergo.org/",
  "https://oh-hell-nah.5inas.cf/",
  "https://communism.95792348709187287.repl.co/",
  "https://hypertabsstatic.brothistry.eu.org/",
  "https://hypertabs-ex-heroku-4.nobody111.repl.co/",
  "https://windows11.pages.dev/"
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
