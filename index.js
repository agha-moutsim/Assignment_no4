

//  var a = "Karachi ";
//  var b = a.replace(/Karachi/,"Mexico");
//  console.log(b);


// var str = 472;
// var num = Number(str);
// console.log(num);
// console.log(typeof num); 

// var a = prompt("Enter your Password");
// if(a=="ahmad123"){
//     console.log("Correct Password");
// }
// else {
//     console.log("Password incorrect");
//

// var number = parseInt(prompt("Enter a number"));

// console.log("Round off value " + Math.round(number));
// console.log("Floor Value " + Math.floor(number));
// console.log("Ceil Value " + Math.ceil(number));

// var a = ("The quick brown fox jumps over the lazy dog");
// console.log("Length "+a.length);
// var b = a.indexOf("T");
// console.log(b);


// var randomNumber = parseInt(Math.random() * 6) + 1;
// console.log(randomNumber);

// function numberToWords(num) {
//     const ones = [
//       "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
//       "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
//       "Eighteen", "Nineteen"
//     ];
  
//     const tens = [
//       "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
//     ];
  
//     if (num === 0) {
//       return "Zero";
//     }
  
//     let words = "";
  
//     if (num < 0) {
//       words += "Minus ";
//       num = -num;
//     }
  
//     if (num < 20) {
//       words += ones[num];
//     } else if (num < 100) {
//       words += tens[Math.floor(num / 10)];
//       if (num % 10 !== 0) {
//         words += " " + ones[num % 10];
//       }
//     } else if (num < 1000) {
//       words += ones[Math.floor(num / 100)] + " Hundred";
//       if (num % 100 !== 0) {
//         words += " and " + numberToWords(num % 100);
//       }
//     } else if (num < 1000000) {
//       words += numberToWords(Math.floor(num / 1000)) + " Thousand";
//       if (num % 1000 !== 0) {
//         words += " " + numberToWords(num % 1000);
//       }
//     } else {
//       words += numberToWords(Math.floor(num / 1000000)) + " Million";
//       if (num % 1000000 !== 0) {
//         words += " " + numberToWords(num % 1000000);
//       }
//     }
  
//     return words.trim();
//   }
  
//   console.log(numberToWords(23));
//   console.log(numberToWords(123)); 
  
//   var a ="In this point";
//   console.log(a);



// num = 4.68753;
// decimalPlaces = 2;
// roundedNum = Number(num.toFixed(decimalPlaces));
// console.log(roundedNum);

// num = 3.634982;
// decimalPlaces = 5;
// roundedNum = Number(num.toFixed(decimalPlaces));
// console.log(roundedNum);

// var date = new Date;
// var current = today.getdate();
// if(current <= 15){
//     console.log("First Fifteen days of a month");
// }
// else {
//     console.log("Last days of the month");
// }

// Get the current time as a Date object
var now = new Date();

// Create a Date object for Jan 1, 1970 at midnight
var epoch = new Date(0);

// Calculate the difference between the current time and the Unix epoch in milliseconds
var delta = now.getTime() - epoch.getTime();

// Convert the difference to minutes
var minutesSinceEpoch = Math.floor(delta / 1000 / 60);

// Assign the result to a variable
var result = minutesSinceEpoch;
 
console.log(result);