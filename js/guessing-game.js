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

//

// 1. create a random number between 1-100

function randomNumberGenerator(min, max){
        let randomValue = Math.floor(Math.random() * (100 - 1+ 1) + 1)
        return randomValue
      }
console.log(randomNumberGenerator(1,100))

// 2. if the input is higher than random value, answer needs to say lower. if the input is lower than randomvalue, answer needs to say higher.
// 3. if the is equal to the random value then answer needs to say you win!

function guess(inputValue) {
    if (inputValue === randomValue){
        return `YOU WIN!!, the random number is ${randomValue}` 
    }else if (inputValue > randomValue){
        return "Guess lower"
    }else if (inputValue < randomValue){
        return "Guess higher"
    }
}

// 4. after 5 guesses then the correct answer appears and the game is over

