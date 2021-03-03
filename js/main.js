//turns the symbols into an array
let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@&^*!#$%".split("");
// picks a random index number from the array symbols
let magic9Index = Math.floor(Math.random() * symbols.length);
//variable that stores the actual magic9 symbol from the arry symbols
let magic9 = symbols[magic9Index];
// the rules of for loop are once it returns, it is finished
function randomize() {


    
    //removes the index of the magic9 symbol and creates a new array w/o that symbol    
    // let magic9symbol = symbols.splice(magic9Index, 1);

    let output = "";
    for (let i = 0; i <= 99; i++) {
        output += i + " ... ";
        if (i % 9 === 0) {
            output += magic9;
        } else {
            output += symbols[Math.floor(Math.random() * symbols.length)];
        }
        output += "<br>";
    }
    return output;
}

let btnNxt = document.getElementById("btn-Nxt");
btnNxt.addEventListener("click", next);
//btnNxt.classList.toggle("visible");
//btnNxt.classList.toggle("invisible");
let btnRvl = document.getElementById("btn-Rvl");
btnRvl.addEventListener("click", next);
let btnStrt = document.getElementById("btn-Strt");
btnStrt.addEventListener("click", next); 
//the three buttons above all just use the next function because they are simply changing the view forward one state
let btnBck = document.getElementById("btn-Bck");
btnBck.addEventListener("click", back);
//the back button changes the view backwards one state
let btnRstrt = document.getElementById("btn-Rstrt");
btnRstrt.addEventListener("click", restart);
//the restart button uses the render function to initalize the page to the first state
// the Restart button is rendering the initial state but the view is not changing
// an array of the different states

const states = [
    {
        main: "Let's Play a Game!",
        //instrct: undefined, 
        //btnNxt: invisible,
        btnRvl: false,
        btnStrt: true,
        btnRstrt: false,
        btnBck: false
    },

    {
        main: "Pick a number from 01-99",
        instrct: "when you have your number click next",
        btnNxtvis: true,
        btnRvlvis: false,
        btnStrtvis: false,
        btnRstrtvis: true,
        btnBckvis: true
    },

    {
        main: "Add both digits together to get a new number",
        instrct: "Ex. 14 is 1 + 4 = 5 /n click next to proceed",
        btnNxtvis: true,
        btnRvlvis: false,
        btnStrtvis: false,
        btnRstrtvis: true,
        btnBckvis: true
    },

    {
        main: "Subtract your new number from the original number",
        instrct: "Ex. 14 - 5 = 9 /n click next to proceed",
        btnNxtvis: true,
        btnRvlvis: false,
        btnStrtvis: false,
        btnRstrtvis: true,
        btnBckvis: true
    },

    {
        // main: other99(),
        main: randomize(),
        instrct: "Find your new number. Note the symbol beside the number",
        btnNxtvis: false,
        btnRvlvis: true,
        btnStrtvis: false,
        btnRstrtvis: true,
        btnBckvis: true
    },

    {
        main: magic9,
        instrct: "Your symbol is: " + magic9,
        btnNxtvis: false,
        btnRvlvis: false,
        btnStrtvis: false,
        btnRstrtvis: true,
        btnBckvis: true
    }
];

// giving the index a variable so it can iterate later
let viewIndex = 0;
// initalizes the current view to be the first index in states
let currentView = states[viewIndex];
//updating the html document from js

// condition is based on what state is currently being viewed
//btnNxt.classList.toggle("visible", currentView);


// the render function is establishing everything that will go on the page when the browser loads
function render() {
    document.getElementById("main").innerHTML = currentView.main
    document.getElementById("instrct").innerHTML = currentView.instrct
    //set a class to something here
    //btnNxt.classList.toggle("visible", currentView)
    console.log("in the render menthod")
}
// the next function is establishing how the page will load when the next button is clicked
// viewIndex is incrementing by one BUT I need the currentView = states[viewIndex] because it is the currentView that
// the user needs to see change
// the render function needs to run again to load the new state of view
function next() {
    console.log("in the next function", currentView, viewIndex)
    viewIndex++
    currentView = states[viewIndex]
    render()
}
function back() {
    console.log("going back a state", currentView, viewIndex)
    viewIndex--
    currentView = states[viewIndex]
    render()
}
function restart() {
    console.log("did it restart to the default state", currentView, viewIndex)
    currentView = states[0]
    render()
}
// the init function is the initialized state of view
// this needs to load when the page is first initialized and when the restart button is clicked
function init() {
    render()
}

// //updating the html document from js
// let btnNxt = document.getElementById("btn-Nxt");
// btnNxt.addEventListener("click", next);
// //btn-Nxt.classList.toggle('visible' true);
// let btnRvl = document.getElementById("btn-Rvl");
// btnRvl.addEventListener("click", next);
// let btnStrt = document.getElementById("btn-Strt");
// btnStrt.addEventListener("click", next); 
// //the three buttons above all just use the next function because they are simply changing the view forward one state
// let btnBck = document.getElementById("btn-Bck");
// btnBck.addEventListener("click", back);
// //the back button changes the view backwards one state
// let btnRstrt = document.getElementById("btn-Rstrt");
// btnRstrt.addEventListener("click", restart);
// //the restart button uses the render function to initalize the page to the first state
// // the Restart button is rendering the initial state but the view is not changing

//this makes sure the html body loads when initialized
document.body.onload = init;