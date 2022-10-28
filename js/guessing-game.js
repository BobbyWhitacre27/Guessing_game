/* 

// Psuedo code steps:

// 1. create a random number between 1-100

// 2. if the input is higher than random value, answer needs to say lower. if the input is lower than randomvalue, answer needs to say higher.

// 3. if the is equal to the random value then answer needs to say you win!

// 4. after 5 guesses then the correct answer appears and the game is over

// 5. reset button clears the page back to the beginning

Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "npm test".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.

*/


function guessingGame(inputValue) {
    let randomValue = Math.floor(Math.random() * (100 - 1 + 1) + 1)
    //console.log(randomValue)
    if (inputValue === randomValue){
        return `YOU WIN!!, the random number is ${randomValue}` 
    }else if (inputValue > randomValue){
        return "Guess lower"
    }else if (inputValue < randomValue){
        return "Guess higher"
    }
}

var submitGuessButton = document.getElementById("guessButton")
var inputValue = document.getElementById("inputValue").value
var outputMessage = document.getElementById("outputMessage")
var playAgainButton = document.getElementById("playAgainButton")
var hintButton = document.getElementById("hintButton")
var randomNumber = document.getElementById("randomNumber")

var g1 = document.getElementById("g1")
var g2 = document.getElementById("g2")
var g3 = document.getElementById("g3")
var g4 = document.getElementById("g4")
var g5 = document.getElementById("g5")


function changeg1(){
    var inputValue = document.getElementById("inputValue").value;
    g1.textContent = `Guess #1: ${inputValue}`;
}

submitGuessButton.addEventListener("click",function changeg1(){
    var inputValue = document.getElementById("inputValue").value;
    g1.textContent = `Guess #1: ${inputValue}`;
})

submitGuessButton.addEventListener("click",function guessingGame() {
    var inputValue = document.getElementById("inputValue").value
    let randomValue = Math.floor(Math.random() * (100 - 1 + 1) + 1)
    randomNumber.textContent = `(Random Number is ${randomValue})`
    //console.log(randomValue)
    if (inputValue === randomValue){
        return outputMessage.textContent = `YOU WIN!!, the random number is ${randomValue}` 
    }else if (inputValue > randomValue){
        return outputMessage.textContent = "Guess lower"
    }else if (inputValue < randomValue){
        return outputMessage.textContent = "Guess higher"
    }
})


// 4. after 5 guesses then the correct answer appears and the game is over

