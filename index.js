// Part 1
//  make a for loop 1 to 100
for (let i = 1; i < 100; i ++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else if (i % 5 === 0) {
console.log("Buzz")
  } else {
console.log(i)
  }
     
    
    }

// Part 2
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, 
// starting at n and incrementing from there.
// As soon as you find the prime number, log 
// that number and exit the loop.

let n = 3; 

while (true) {
    n++; 
    let primeNum = true;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            primeNum = false;
            break; 
        }
    }

    if (primeNum) {
        console.log(n);
        break; 
    }
}

// // part 3

const csvVariable = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const rows = csvVariable.split("\n");
for(let i = 0; i < csvVariable.length; i ++);
csvVariable.split(",");

console.log(rows);
