/*

//Import library
const readline = require('readline')

//Create an instance of readline.Interface
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

//Prompt the user for their name
rl.question('What is your name? ', (name) => {
    //Display a greeting
    console.log(`Hello, ${name}!`)
})

//Close the readline interface
rl.close()

*/

//Include the readline module for command line input
const { read } = require('fs')
const readline = require('readline')

//Create an interfacefor the input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Functions to generate a random number between min and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min+1)) + min
}

//The secret number to guess between 1 and 100
const secretNumber = getRandomInt(1, 100)

//Counter for number of attempts
let attempts = 0

console.log('Guess the number! It\'s between 1 and 100. You have unlimited attempts!')

//Create a function to start the game 
function guessNumber() {
    rl.question('Enter your guess: ', (answer) => {
        attempts += 1 // Increment number of attempts
        const guess = parseInt(answer, 10) //Convert the input string to a number

        //Check if guess is correct, too high or too low
        if(guess == secretNumber) {
            console.log(`Correct! The number was ${secretNumber}. It took you ${attempts} attempts.`)
            rl.close()
        } else if(guess < secretNumber) {
                console.log('Too low!')
                guessNumber()
        } else if(guess > secretNumber) {
            console.log('Too high!')
            guessNumber()
        } else {
            console.log('Please enter a valid number')
        }
    })
}

guessNumber()