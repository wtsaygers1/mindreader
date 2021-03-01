# JavaScript Pseudo Code

//Assigning symbols to values

const symbols = [A-Z, a-z, @, $, &, ~, ?]

const magicNumbers = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99] possibly [9n]

//Not sure if this will work by trying to get a random symbol from the symbols array and assign it to all the values in the magicNumbers array
Math.random(symbols[]) = magicNumbers

//Possibly a conditional to assign symbols
if (9n % 9 === 0) {
    unique symbol
} else {
    any other symbol than unique
}

//Possibly a for loop
for (let i = 1; i <= 99; i++) {
    use the conditional above here
}

//Once the multiples of 9 have a unique symbol, how do I remove that symbol for being assigned to 
    //other numbers or maybe that isn't an issue

//Assign all other numerical values a symbol (not necessarily unique)


//Creating the Views
//properties are main text, start button, next button, instruction text, back button, restart button

create Object = view

initial state = view0 {
    mainText: "Let's play a game"
    startButton: true
    nextButton: false
    instructionText: "..."
    backButton: false
    restartButton: false
}

view1 {
    mainText: "Pick a number from 01-99"
    startButton: false
    nextButton: true
    instructionText: "click next when you have a number"
    backButton: false
    restartButton: true
}

view2 {
    mainText: "Add both digits together to get a new number"
    startButton: false
    nextButton: true
    instructionText: "Ex 14 is 1 + 4 = 5 /n click next to continue"
    backButton: true
    restartButton: true
}

view3 {
    mainText: "Subtract your new number from the original number"
    startButton: false
    nextButton: true
    instructionText: "Ex 14 - 5 = 9 /n click next to continue"
    backButton: true
    restartButton: true
}

view4 {   
        //just need to make a scroller class in this div
    mainText: Scroll of symbols and 01-99 (most likely a for loop here that returns 01-99)
    startButton: false
    nextButton: true (this next button will say Reveal)
    instructionText: "Find your new number /n note the symbol beside the number"
    backButton: true
    restartButton: true
}

view5 {
    mainText: Unique multiples of 9 symbol
    startButton: false
    nextButton: false
    instructionText: "Your symbol is: unique multiple of 9 symbol"
    backButton: true
    restartButton: true
}

//Event Listeners

startButton: when clicked, render viewTwo
nextButton: when clicked, render view++
backButton: when clicked, render view--
restartButton: when clicked, render inital state