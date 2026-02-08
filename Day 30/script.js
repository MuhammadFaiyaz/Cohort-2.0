/* Assignment - 29 Oct 
1. Basic Operators (Arithmetic, Assignment, Increment, Decrement, 
Comparison, Logical, Bitwise) 
a. Create two numbers a = 10 and b = 3. 
Perform and log: a + b, a - b, a * b, a / b, a % b. 
*/
let a = 20;
let b = 3;
console.log(
  "a + b =",
  a + b,
  ", a - b =",
  a - b,
  ", a * b =",
  a * b,
  ", a / b =",
  a / b,
  ", a % b =",
  a % b,
);

/*
b. Write: let x = 5; x = x + 3; 
Now rewrite the same using +=. 
Do the same for -=, *=, /=. */
let x = 5;
// x = x + 3;
x += 3;
x -= 3;
x *= 3;
x /= 3;
console.log(x);

/*
c. let count = 5; 
Use count++ and log value before and after. 
Repeat for count--,*/
let count = 5;
console.log(count);
count++;
console.log("count++ is", count);
count--;
console.log("count-- is", count);

/*
d. Compare two values: 5 == “5” and 5 === “5”. 
Observe difference. 
*/
console.log(5 == "5");
console.log(5 === "5");

/*
e. Check if 10 is greater than 5, less than 20, and equal to 10. 
*/
console.log(10 > 5, 10 < 20, 10 === 10);

/*
f. Try logical AND and OR: 
true && false 
true || false 
!(true) */
console.log(true && false, true || false, !true);

/*
g. Predict the result of: 
(5 > 3 && 10 > 8), 
(5 > 3 || 10 < 8) */

// the result will be true each time

/*
h. Bitwise (light intro): 
Evaluate 5 & 1 and 5 | 1. 
Write result and your observation (no deep explanation needed now). */

//th e result is: 5 & 1 = 1 and 5 | 1 = 5.
// I leart that '&' this sign is used for filtering as is there common bit 1 and keeps only the common part of bit and '|' thid sign is used for merging.

/*
2. Variable Hoisting in JavaScript 
a. Predict output of: 
console.log(a);
var a = 10  */

// undefined will be the answer.

/*
b. Predict output of: 
console.log(b); 
let b = 10 */

//  ReferenceError as b is not defined but consoled in TDZ.

/*
c. Predict output of: 
test() 
function test() { console.log(“Hello”) } */

// It will be printed well.

/*
d. Try writing a function expression before initialization and call it: 
hello() 
var hello = function() { console.log(“Hi”) } 
Write what happened and why. */

// it will give me TypeError as we used var kw and because of it, the declaration part will be hoisted and the value will be given as undefined. in that time, if we try to console the value in the window it will give me error as the value is not till initialized.

/*
e. Write one sentence: 
What gets hoisted? 
What does not get hoisted fully? */

// var gets hoisted but let and const do not for TDZ, but htey also hoisted internally but fully.

/*
3. Conditional Operators (if, else, else-if, ternary, switch) 
a. Take input using prompt for age. 
If age > 18 → log “Adult”. 
Else → log “Minor”. */
let age = prompt("What is your age?");
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

/*
b. Write a program: 
If marks >= 90 → “A grade” 
Else if marks >= 75 → “B grade” 
Else if marks >= 50 → “C grade” 
Else → “Fail” */

let marks = prompt("What is your marks?");
if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 75) {
  console.log("B grade");
} else if (marks >= 50) {
  console.log("C grade");
} else {
  console.log("Fail");
}

/*
c. Create a variable city = “Bhopal”. 
If city is “Bhopal” → log “MP” 
Else if city is “Delhi” → log “Capital” 
Else → log “Unknown City”*/
const city = "Bhopal";
if (city === "Bhopal") {
  console.log("MP");
} else if (city === "Delhi") {
  console.log("Capital");
} else {
  console.log("Unknown city");
}

/*
d. Use ternary operator: 
Let score = 40. 
If score > 35 → “Pass” else “Fail” using a ternary.*/
let score = 40;
score > 35 ? console.log("Pass") : console.log("Fail");

/*
e. Convert this if-else into a ternary: 
if (temperature > 30) { “Hot” } else { “Pleasant” } */
let temperature = 45;
temperature > 30 ? console.log("Hot") : console.log("Pleasent");
/*
f. Write a switch case: 
Take day number (1 to 7). 
Print the day name. 
Default case: “Invalid Day”. */

let day = Number(prompt("Enter the day no"));
switch (day) {
  case 1:
    console.log("Saturday");
    break;
  case 2:
    console.log("Sunday");
    break;
  case 3:
    console.log("Monday");
    break;
  case 4:
    console.log("Tuesday");
    break;
  case 5:
    console.log("Wednessday");
    break;
  case 6:
    console.log("Thursday");
    break;
  case 7:
    console.log("Friday");
    break;

  default:
    console.log("Invalid day");
}

/*
g. Using logical operators in condition: 
If age > 18 and country == “India” → log “Eligible for Vote” 
Else → “Not Eligible” 
*/
let country = "Bangladesh";
let Age = 22;
if (Age > 18 && country == "India") {
  console.log("Eligible for Vote");
} else {
  console.log("not eligible");
}
