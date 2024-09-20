const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]; 

const letters = characters.slice(0,52)
const numbers = characters.slice(52,62)
const symbols = characters.slice(62, characters.length)

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")

let lettersIncluded = document.getElementById("letters")
let numbersIncluded = document.getElementById("numbers")
let symbolsIncluded = document.getElementById("symbols")

let availableCharacters = letters.concat(numbers, symbols)

function includeCharacters() {
    if (lettersIncluded.checked === true && numbersIncluded.checked === false && symbolsIncluded.checked === false) { // just letters
        availableCharacters = letters
    } else if (lettersIncluded.checked === false && numbersIncluded.checked === true && symbolsIncluded.checked === false) { // just numbers
        availableCharacters = numbers    
    } else if (lettersIncluded.checked === false && numbersIncluded.checked === false && symbolsIncluded.checked === true) { // just symbols
        availableCharacters = symbols
    }
    
    else if (lettersIncluded.checked === true && numbersIncluded.checked === true && symbolsIncluded.checked === false) { // letters + numbers
        availableCharacters = letters.concat(numbers)
    } else if (lettersIncluded.checked === true && numbersIncluded.checked === false && symbolsIncluded.checked === true) { // letters + symbols
        availableCharacters = letters.concat(symbols)
    } else if (lettersIncluded.checked === false && numbersIncluded.checked === true && symbolsIncluded.checked === true) { // numbers + symbols
        availableCharacters = numbers.concat(symbols)
    } else if (lettersIncluded.checked === false && numbersIncluded.checked === false && symbolsIncluded === false) { // none selected
        alert("Please select at least one checkbox")
    }
}

function generatePasswords() {
    let passwordOneArray = []
    let passwordTwoArray = []
    passwordOne.textContent = ""
    passwordTwo.textContent = ""
    
    console.log(availableCharacters.length)
    
    for (let i = 0; i < slider.value; i++) {
        let randomIndexOne = Math.floor(Math.random() * availableCharacters.length)
        passwordOneArray.push(availableCharacters[randomIndexOne])
        let randomIndexTwo = Math.floor(Math.random() * availableCharacters.length)
        passwordTwoArray.push(availableCharacters[randomIndexTwo])
    } 
    
    for (let i = 0; i < passwordOneArray.length; i++) {
        passwordOne.textContent += passwordOneArray[i]
        passwordTwo.textContent += passwordTwoArray[i]
    }
}

//slider
var slider = document.getElementById("character-range");
var output = document.getElementById("character-number");
output.textContent = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.textContent = this.value;
}

// toggle light mode
function lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode")
}

// copy password one text
passwordOne.addEventListener("click", (event) => {
    document.execCommand("copy");
    event.preventDefault(); // don't run default event stuff
    alert("Copied!")
} )

passwordOne.addEventListener("copy", (event) => {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", passwordOne.textContent);
  }
});

// copy password two text
passwordTwo.addEventListener("click", (event) => {
    document.execCommand("copy");
    event.preventDefault(); // don't run default event stuff
    alert("Copied!")
} )

passwordTwo.addEventListener("copy", (event) => {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", passwordTwo.textContent);
  }
});