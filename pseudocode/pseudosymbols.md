//this will randomly pick an index from an array
arr[Math.floor(Math.random() * arr.length)]

//the split method will turn a string into an array
let vowels = "aeiou".split("")
console.log(vowels)

//hacky way of assigning symbols
    //get a random symbol from the array and assign it to multiples of 9
    //assign a symbol to all other numbers from same array without removing special symbol for multiples of 9

//what could be a legit way to assign symbols
    //get a random symbol from the array and assign it to multiples of 9
    //use the splice method to remove whatever symbol was assigned to the multiples of 9
        //array.splice(multiples of 9, 1) - this is saying splice the array of symbols at the multiples of 9 symbol and only remove that symbol

//setting up the actual code

//these variables will be in the global space
let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@&^*!#$%".split("");
//turns the symbols into an array
let magic9Index = Math.floor(Math.random() * symbols.length);
let magic9 = symbols[magic9Index];
//randomly selects an index from symbols array
let magic9symbol = symbols.splice(magic9Index, 1);
//removes the index of the magic9 symbol and creates a new array w/o that symbol

let randomize = function newSymbols() {
    for (let i = 0; i <= 99; i++) {
        if (i % 9 === 0) {
            return magic9;
        } else {
            return symbols[Math.floor(Math.random() * symbols.length)];
        }
    }
}