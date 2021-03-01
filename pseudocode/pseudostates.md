let states = [view0, view1, view2, view3, view4, view5];

let defaultView = states[0];
//this is our initial state that is the first view and start of the game
//This is when the symbols need to be assigned and every time the user initiates this page the 
    //symbols need to update

    //changing the text in each view
    const firstHeader = getElementById("h1").innerHTML;
    getElementById("h1").innerHTML = "Let's Play a Game!";

    const secondHeader = getElementById("h2").innerHTML;
    getElementById("h2").innerHTML = "Pick a number from 01-99";
    const secondInstrct = getElementById("i2").innerHTML;
    getElementById("i2") = "when you have your number click next";

    const thirdHeader = get ElementById("h3").innerHTML;
    get ElementById("h3").innerHTML = "Add both digits together to get a new number";
    const thirdInstrct = getElementById("i3").innerHTML;
    getElementById("i3") = "Ex. 14 is 1 + 4 = 5 /n click next to proceed";

    const fourthHeader = get ElementById("h4").innerHTML;
    get ElementById("h4").innerHTML = "Subtract your new number from the original number";
    const fourthInstrct = getElementById("i4").innerHTML;
    getElementById("i4") = "Ex. 14 - 5 = 9 /n click next to proceed";

    const fifthHeader = get ElementById("h5").innerHTML;
    get ElementById("h5").innerHTML = scroll bar of variable randomize output;
    const fifthInstrct = getElementById("i5").innerHTML;
    getElementById("i5") = "Find your new number. /n Note the symbol beside the number";

    const sixthHeader = get ElementById("h6").innerHTML;
    get ElementById("h6").innerHTML = variable magic9;
    const sixthInstrct = getElementById("i6").innerHTML;
    getElementById("i6") = "Your symbol is: " + variable magic9;
    

    //buttons are in the global space so whenever I call btnStrt, nxtBtn, or any of the buttons, the program knows how to run it
    const btnStrt = document.getElementById("btn-Strt");
    btnStrt.AddEventListener("click", event => {
            return states[1];
        });
    const btnNxt = document.getElementById("btn-Nxt");
    btnNxt.AddEventListener("click", event => {
            return states[i] + 1;
        });
    const btnRvl = document.getElementById("btn-Rvl");
    btnRvl.AddEventListener("click", event => {
            return states[states.length-1];
    });
    const btnRstrt = document.getElementById("btn-Rstrt");
    btnRstrt.AddEventListener("click", event => {
            return states[0];
        });
    const btnBck = document.getElementById("btn-Bck");
    btnBck.AddEventListener("click", event => {
            return states[i] - 1;
        });

    
    //I may not need this but just a states[i] and render what I need based on the view??
    states[0] = function render0() {
        firstHeader;
        btnStrt;
    }

    states[1] = function render1() {
        secondHeader;
        btnNxt;
        secondInstrct;
        btnBck;
        btnRstrt;
    }

    states[2] = function render2() {
        thirdHeader;
        btnNxt;
        thirdInstrct;
        btnBck;
        btnRstrt;
    }

    states[3] = function render3() {
        fourthHeader;
        btnNxt;
        fourthInstrct;
        btnBck;
        btnRstrt;
    }

    states[4] = function render4() {
        fifthHeader;
        btnRvl;
        fifthInstrct;
        btnBck;
        btnRstrt;            
    }

    states[5] = function render5() {
        sixthHeader;
        sixthInstrct;
        btnRstrt;
    }

    
