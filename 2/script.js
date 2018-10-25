"use strict";


// var counter = 0;

// function generateNumber(min, max) {
//   var rand = min + Math.random() * (max + 1) - min;
//   rand = Math.floor(rand); // округление до целого
//   return rand;
// }

// //console.log(generateNumber(1, 5));

// var randomNumber = generateNumber(1, 3);
// console.log('randomNumber '+ randomNumber );

// function checkNumber(randomNumber) {

//   var userNumber = +prompt('Insert number'); // преобразование в число
//   console.log(userNumber + ' and ' + randomNumber);

//   if(userNumber === randomNumber) {
//     alert('Congrats! You win!');
//   }
//   else {
//     counter++;
//     alert('Sorry, wrong!\n You tried ' + counter + ' times.\n Ok, try again!');
//     checkNumber(randomNumber);
//   }
// }

// checkNumber(randomNumber);
// console.log('counter '+counter);

/*************** power function */


var digit = +prompt('Insert digit'); // преобразование в число
var pow = +prompt('Insert pow'); // преобразование в число
var val = 1;

function power(digit, pow, val) {
  if(pow > 0) {
    val *= digit;
    console.log('val: ' + val + 'pow: ' + pow);
    power(digit, pow-1, val);
  }
  else {
    alert('Result: ' + val);
  }

}

power(digit, pow, val);