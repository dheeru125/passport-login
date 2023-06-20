// 1. Find duplicate and same value in arraya
//var fullWordList = ['1','2','3','4','5'];
//var wordsToRemove = ['1','2','3'];
//  solution 

const fullWordList = ['1', '2', '3', '4', '5'];
const wordsToRemove = ['1', '2', '3'];

// check if the index of value of current index is same or not if not then duplicate
const duplicates = fullWordList.filter((word, index) => fullWordList.indexOf(word) !== index);
console.log("Duplicates:", duplicates);

// Find same values in both arrays
// check if  wordsToRemove contains same value as fullWordList using filter method 
const sameValues = fullWordList.filter((word) => wordsToRemove.includes(word));
console.log("Same Values:", sameValues);

//output Same Values: [ '1', '2', '3' ] , duplicattes: [] , no duplicates


// 2. longest-chain-of-letters-in-word-javascript

const word = '00000111110101001111100001001';

let currentChainLength = 0;
let longestChainLength = 0;

for (let i = 0; i < word.length; i++) {
  // Check if the current character is a letter (1)
  if (word[i] === '1') {
    // Increase the current chain length
    currentChainLength++;

    // Update the longest chain length if necessary
    if (currentChainLength > longestChainLength) {
      longestChainLength = currentChainLength;
    }
  } else {
    // Reset the current chain length if the character is not a letter
    currentChainLength = 0;
  }
}

console.log("Longest chain length:", longestChainLength); // output: 5


// 3 
let obj1 = { "greeting": "hello" };
let obj2 = obj1 ;
obj1["greeting"] = "Bye";
console.log(obj1); // { greeting: "Bye" }
console.log(obj2); // { greeting: "hello" }

// 4
console.log("7" > 7)  // false 
console.log("2">"21") // true
console.log("KL">"S") // false

//5 function to calculate average of two numbers
function average(a, b) {
    return a + b / 2;
}
console.log(average(2, 1));  //output 1.5
