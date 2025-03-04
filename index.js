// // Part 1
// //  make a for loop 1 to 100
// for (let i = 1; i < 100; i ++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz")
//   } else if (i % 5 === 0) {
// console.log("Buzz")
//   } else {
// console.log(i)
//   }
     
    
//     }

// // Part 2

// for (let n = 5; n < 100; n ++) {
//   if ( n > 1 && n % 2 !== 0 && n % 3 !== 0 && n % n == 0) {
//     console.log(n)  
//     break;
//   } 
// } 


// part 3

const csvVariable = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
const rows = csvVariable.split('\n');
const cells = csvVariable.split(',');
console.log(rows);
