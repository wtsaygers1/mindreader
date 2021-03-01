# JavaScript Pseudo Code draft 2

//look into the objects.value method to turn properties of objects into an array

The Objects

// the view object will consist of 6 properties but not all views have all properties
//consider the .splice method on arrays that removes an item by index position
let view = [0:, 1:, 2:, 3:, 4:, 5:];

let view = ["main", "instrct", start, next, back, restart];
//can create v1, v2, v3, v4, v5, v6
//main and instrct are strings and start, next, back, restart are buttons
//the main and instrct will be associated with a document.querySelector or document.getElementById
//the buttons will all be event listeners and have a function run when event occurs

//could you do a 
class view {
    constructor("main", "instrct", start, next, back, restart) {
        this."main" = ...;
        etc
    }
}


//randomly selecting something from an array
array[Math.floor(Math.random() * arrary.length)]
//this will get a random number 0 <= n < 1, then multiply that random number by the number of items in the //array, and round that number down which will then give a whole number and the index of the item in the ////array