// array of the different states in the SPA that will change based on events that are activated by user
// anything commented out in the states is there just to show me that I did NOT need it
const states = [
    {
        main: "Let's Play a Game!",
        // instrct: undefined, 
        // btnNxt: visible,
        // btnRvl: false,
        // btnStrt: true,
        // btnRstrt: false,
        // btnBck: false
    },

    {
        main: "Pick a number from 01-99",
        instrct: "when you have your number click next",
        // btnNxtvis: true,
        // btnRvlvis: false,
        // btnStrtvis: false,
        // btnRstrtvis: true,
        // btnBckvis: true
    },

    {
        main: "Add both digits together to get a new number",
        instrct: "Ex. 14 is 1 + 4 = 5 <br>Click next to proceed",
        // btnNxtvis: true,
        // btnRvlvis: false,
        // btnStrtvis: false,
        // btnRstrtvis: true,
        // btnBckvis: true
    },

    {
        main: "Subtract your new number from the original number",
        instrct: "Ex. 14 - 5 = 9 <br>Click next to proceed",
        // btnNxtvis: true,
        // btnRvlvis: false,
        // btnStrtvis: false,
        // btnRstrtvis: true,
        // btnBckvis: true
    },

    {
        // null because main will be concatenated with a string and the output of a function in this state
        main: null,
        instrct: "Find your new number. <br>Note the symbol beside the number",
        // btnNxtvis: false,
        // btnRvlvis: true,
        // btnStrtvis: false,
        // btnRstrtvis: true,
        // btnBckvis: true
    },

    {
        // null because main and instrct will be concatenated with a string and the output of a function in this state
        main: null,
        instrct: null,
        // btnNxtvis: false,
        // btnRvlvis: false,
        // btnStrtvis: false,
        // btnRstrtvis: true,
        // btnBckvis: true
    }
];

// giving the index a variable so it can iterate later
let viewIndex = 0;
// initalizes the current view to be the first index in states
let currentView = states[viewIndex];
//updating the html document from js
let btnNxt = document.getElementById("btn-Nxt");
btnNxt.addEventListener("click", next);
//let btnRvl = document.getElementById("btn-Rvl");
//btnRvl.addEventListener("click", next);
//let btnStrt = document.getElementById("btn-Strt");
//btnStrt.addEventListener("click", next); 
//originally I had three buttons that all used one function but all I needed was the one function and then when I
    //rendered the view of the current state I could update the text of the button with conditionals

let btnBck = document.getElementById("btn-Bck");
btnBck.addEventListener("click", back);
//the back button changes the view backwards one state
let btnRstrt = document.getElementById("btn-Rstrt");
btnRstrt.addEventListener("click", restart);
//the restart button uses the render function to initalize the page to the first state
// the Restart button is rendering the initial state but the view is not changing
// an array of the different states

//turns the symbols into an array
let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@&^*!#$%".split("");
// picks a random index number from the array symbols
let magic9Index = Math.floor(Math.random() * symbols.length);
//variable that stores the actual magic9 symbol from the arry symbols
let magic9 = symbols[magic9Index];
// the rules of a function are once it returns something, it is finished
// the randomize function is called when the page initalizes because it is in the global scope. It is in the init
    // function to be called when the page initalizes and then it transfers to whenever the restart btn is clicked
    // to reassign the symbols
function randomize() {
    magic9Index = Math.floor(Math.random() * symbols.length);
    magic9 = symbols[magic9Index];
    // output is just an empty string to be concatenated with a combination of strings and the function randomize
    let output = "";
    for (let i = 0; i <= 99; i++) {
        output += i + " ... ";
        if (i % 9 === 0) {
            output += magic9;
        } else {
            output += symbols[Math.floor(Math.random() * symbols.length)];
        }
        // results in a new line each time the for loop runs with the <br> tag
        output += "<br>";
    }
    return output;
}

// the render function is establishing everything that will go on the page when the browser loads and is 
    // using conditionals to determine which state needs to currently be the view
function render() {
    // searching the document for the correct id and populating it with the main and instrct by state
    document.getElementById("main").innerHTML = currentView.main
    document.getElementById("instrct").innerHTML = currentView.instrct
    // adds and removes buttons based on which view is current BUT need to be careful because when making a change
        // going forward, NEED to check what will happen coming back!!!
    if (viewIndex === 0) {
        instrct.classList.add("d-none")
        btnNxt.innerHTML = "Start"
        btnNxt.classList.remove("d-none")
        btnBck.classList.add("d-none")
        btnRstrt.classList.add("d-none")
    }
    if (viewIndex === 1) {
        instrct.classList.remove("d-none")
        btnNxt.innerHTML = "Next"
        btnBck.classList.remove("d-none")
        btnRstrt.classList.remove("d-none")
    }
    if (viewIndex === 3) {
        btnNxt.innerHTML = "Next"
        //btnNxt.classList.remove("d-none")
    }
    if (viewIndex === 4) {
        btnNxt.innerHTML = "Reveal"
        btnNxt.classList.remove("d-none")
    }
    if (viewIndex === 5) {
        btnNxt.classList.add("d-none")
    }
    // checking the console in DevTools
    console.log("in the render menthod")
    //put the randomize function in this render function to randomize a new set of symbols every time the restart button
        //is clicked or the page initializes
}
// the next function is establishing how the page will load when the next button is clicked
// viewIndex is incrementing by one BUT I need the currentView = states[viewIndex] because it is the currentView that
    // the user needs to see change
// the render function needs to run again to load the new state of view
function next() {
    // checking the console in DevTools
    console.log("in the next function", currentView, viewIndex)
    viewIndex++
    currentView = states[viewIndex]
    render()
}
function back() {
    // checking the console in DevTools
    console.log("going back a state", currentView, viewIndex)
    viewIndex--
    currentView = states[viewIndex]
    render()
}
// the restart function calls the init function instead of calling the render function like the rest of the btns because
    // the symbols need to reset each time a user restarts the program
function restart() {
    // checking the console in DevTools
    console.log("did it restart to the default state", currentView, viewIndex)
    viewIndex = 0
    currentView = states[0]
    init()
}

// the init function is the initialized state of view
// this needs to load when the page is first initialized and when the restart button is clicked
function init() {
    states[4].main = randomize()
    states[5].main = magic9
    states[5].instrct = "Your number is: " + magic9  
    render()
}

//this makes sure the html body loads with the init function when the page is initalized
document.body.onload = init;

// these are all pieces of unnecessary code I had -- use as examples of what not to do
    // updating the html document from js
    // let btnNxt = document.getElementById("btn-Nxt");
    // btnNxt.addEventListener("click", next);
    // btn-Nxt.classList.toggle('visible' true);
    // let btnRvl = document.getElementById("btn-Rvl");
    // btnRvl.addEventListener("click", next);
    // let btnStrt = document.getElementById("btn-Strt");
    // btnStrt.addEventListener("click", next); 
    //the three buttons above all just use the next function because they are simply changing the view forward one state
    // let btnBck = document.getElementById("btn-Bck");
    // btnBck.addEventListener("click", back);
    //the back button changes the view backwards one state
    // let btnRstrt = document.getElementById("btn-Rstrt");
    // btnRstrt.addEventListener("click", restart);
    //the restart button uses the render function to initalize the page to the first state
    // the Restart button is rendering the initial state but the view is not changing

