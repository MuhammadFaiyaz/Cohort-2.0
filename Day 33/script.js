/*
Level 1 -- pure  beginner practice

1. Print numbers from 1 to 10
Look from 1 to 10 and print each number */
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/*
2. Print only even number from 1 to 20
Use loop and condition to print only the even numbers
*/
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

/* 3. Print numbers from 10 to 1 in  riverse in loop with decrement */
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

/*4. Print the word 'yes' repeat 5 times in loop */
for (let i = 0; i < 5; i++) {
  console.log("yes");
}

/*5. Print whether numbers from 1 to 10 are even or odd. For each number check even --> 'even' else--> 'odd' */
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) console.log(i, "is even");
  else console.log(i, "is odd");
}

/*6. Ask user for a number and say if it's positive or negative use prompt and a conditional */
// let num = prompt("Enter a number");
// if (num === null || num.trim() === "" || isNaN(Number(num)))
//   console.log("Please enter a valid number");
// else if (Number(num) >= 0) console.log("it's a positive number");
// else console.log("it's a negative number");

/* 
Level 1 – Pure Beginner Practice

7. Ask user’s age and check if eligible to vote
If age >= 18 → “Eligible”, else → “Not eligible”*/
/* 
let age = prompt("Enter your age");
if(age === null) {
console.error("You pressed cancel");
} else if (age.trim() === '') {
console.log("Please enter a number");
} else {
    age = Number(age);
    if(isNaN(age)) console.log("Please enter a number")
    else if (age < 0) console.log("it's a negative number");
    else if (age < 18) console.log("Not eligible");
    else console.log("eligible for vote");
}
*/

/*
8. Print multiplication table of 5
Use loop to print 5 × 1 to 5 × 10. */
for (let i = 1; i < 11; i++) {
  console.log(`5 X ${i} = ${i * 5}`);
}

/*
9. Count how many numbers between 1 and 15 are greater than 8
Loop and count conditionally. */
let count = 0;
for (let i = 0; i < 16; i++) {
  if (i > 8) count++;
}
console.log(count);

/*
10. Ask user for password and print access status
Hardcoded correct password. Compare with user input. */
// let password = "faiyazkhan";
// let pass = prompt("Type Password");
// if (pass === null) console.log("Enter the password");
// else {
//   if (pass.trim() === password) console.log("Correct password");
//   else console.log("Incorrect password");
// }

/*
Level 2 – Slightly Tougher but Logical
11. Allow only 3 attempts to enter correct password
If user gets it right early, stop. If not → “Account locked” */
let attempt = 0;
let password = "faiyazkhan";
for (let i = 0; i < 3; i++) {
  let pass = prompt("Type Password");
  if (pass === null) console.log("Enter the password");
  else {
    if (pass.trim() === password) console.log("Correct password");
    else console.log("Incorrect password");
  }
  
}
/*
12. Ask user for words until they type “stop”. Count how many times they typed “yes”
Loop until "stop" is typed. Count "yes". */

/* 13. Print numbers divisible by 7 from 1 to 50
Use modulo % and loop. */

/* 
14. Sum of all odd numbers from 1 to 30
Add only odd numbers. Print final sum.
*/

/* 15. Keep asking number until user enters an even number
Use while loop. Stop only if input is even.
*/

/* 16. Print numbers between two user inputs
Input start and end using prompt() → print all between.
*/

/* 17. Print only first 3 odd numbers from 1 to 20
Use loop. Stop with break after 3 odd prints.
*/

/* 18. Ask user 5 numbers. Count how many are positive
Use loop + condition + counter.
*/

/* 19. ATM Simulator – Allow 3 withdrawals
Start with ₹1000 balance. Ask withdrawal amount 3 times.
If enough balance → deduct
Else → print “Insufficient balance” */
