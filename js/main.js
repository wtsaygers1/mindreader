// a variable to hold the different views and switch between states
// the different views and their properties

const states = [ 
        view1 = {
        main: "Let's Play a Game!",
        instrct: invisible,
        btnNxt: invisible,
        btnRvl: invisible,
        btnStrt: visible,
        btnRstrt: invisible,
        btnBck: invisible
    },
    
        view2 = {
        main: "Pick a number from 01-99",
        instrct: "when you have your number click next",
        btnNxt: visible,
        btnRvl: invisible,
        btnStrt: invisible,
        btnRstrt: visible,
        btnBck: visible
    },
    
        view3 = {
        main: "Add both digits together to get a new number",
        instrct: "Ex. 14 is 1 + 4 = 5 /n click next to proceed",
        btnNxt: visible,
        btnRvl: invisible,
        btnStrt: invisible,
        btnRstrt: visible,
        btnBck: visible
    },
    
        view4 = {
        main: "Subtract your new number from the original number",
        instrct: "Ex. 14 - 5 = 9 /n click next to proceed",
        btnNxt: visible,
        btnRvl: invisible,
        btnStrt: invisible,
        btnRstrt: visible,
        btnBck: visible
    },
    
        view5 = {
        main: randomize,
        instrct: "Find your new number. /n Note the symbol beside the number",
        btnNxt: invisible,
        btnRvl: visible,
        btnStrt: invisible,
        btnRstrt: visible,
        btnBck: visible
    },
    
        view6 = {
        main: magic9,
        instrct: "Your symbol is: " + magic9,
        btnNxt: invisible,
        btnRvl: invisible,
        btnStrt: invisible,
        btnRstrt: visible,
        btnBck: visible
    }
];

// the default state is view1 or the first index position in states
let currentView = states[0];
// functions that execute as states change
    // these two functions will update the HTML of the main and instruction texts in the views as the state changes
function mTxt() {
    document.getElementById("main").innerHTML = view[i].main;
}
function iTxt() {
    document.getElementById("instrct").innerHTML = view[i].instrct;
}
    // these functions will update the views as the buttons are activated
const btnNxt = document.getElementById("btn-Nxt");
btnNxt.addEventListener("click", function render() {
        currentView++;
});
const btnBck = document.getElementById("btn-Bck");
btnBck.addEventListener("click", function render() {
        currentView--;
});
const btnRstrt = document.getElementById("btn-Rstrt");
btnRstrt.addEventListener("click", function render() {
        currentView;
});
//these variables will be in the global space
    //turns the symbols into an array
let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@&^*!#$%".split("");
    // picks a random index number from the array symbols
let magic9Index = Math.floor(Math.random() * symbols.length);
    //variable that stores the actual magic9 symbol from the arry symbols
let magic9 = symbols[magic9Index];
    //removes the index of the magic9 symbol and creates a new array w/o that symbol    
let magic9symbol = symbols.splice(magic9Index, 1);
// assigns the symbols to the numbers
let randomize = function newSymbols() {
    for (let i = 0; i <= 99; i++) {
        if (i % 9 === 0) {
            return magic9;
        } else {
            return symbols[Math.floor(Math.random() * symbols.length)];
        }
    }
}
