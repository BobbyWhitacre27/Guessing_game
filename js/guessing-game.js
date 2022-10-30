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


let randomValue = Math.floor(Math.random() * (100 - 1 + 1) + 1)


function guessingGame(){

    var inputValue = document.getElementById("inputValue").value
    randomNumber.textContent = `(Random Number is ${randomValue})`

    let guessesArray = []

    for(let i=0; i<5; i++){

    if (inputValue == randomValue){
        return outputMessage.textContent = `YOU WIN!!, the random number is ${randomValue}` 
    }else if (i == 4){
        guessesArray.push(inputValue)
        g5.textContent = `${guessesArray[i]}`;
        outputMessage.textContent = `SORRY, YOU LOSE. The random number is ${randomValue}`
    }else if (inputValue > randomValue){
        outputMessage.textContent = "Guess lower"
    }else if (inputValue < randomValue){
        outputMessage.textContent = "Guess higher"
    }
 
    guessesArray.push(inputValue)
    if(i==0){
        g1.textContent = `${guessesArray[i]}`;
    }else if(i==1){
        g2.textContent = `${guessesArray[i]}`;
    }else if(i==2){
        g3.textContent = `${guessesArray[i]}`;
    }else if(i==3){
        g4.textContent = `${guessesArray[i]}`;
    }

    return i=+1

    // I need something to stop the loop and restart the loop with the next new value... this is where I am stuck

    }

}

function hint(){
    if(randomValue > 50){
        alert("The number is greater than 50")
    }
    else if(randomValue < 51){
        alert("The number is less than 51")
    }
}

function playAgain(){

}


submitGuessButton.addEventListener("click", guessingGame)

hintButton.addEventListener("click", hint)

playAgainButton.addEventListener("click", playAgain)



// 4. after 5 guesses then the correct answer appears and the game is over

