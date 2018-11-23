"use strict";


/*** classroom practice - game */

// var counter = 0;

// function generateNumber(min, max) {
//   var rand = min + Math.random() * (max + 1) - min;
//   rand = Math.floor(rand); // округление до целого
//   return rand;
// }


// var randomNumber = generateNumber(1, 3);
// console.log('randomNumber ' + randomNumber);
// var gameIsRunning = true;

// function checkNumber(random) {

//   var userNumber = +prompt('Insert number. If you want to quit, type "-1"'); // преобразование в число

//   console.log(userNumber + ' and ' + random);


//   while (gameIsRunning) {

//     if (userNumber == -1) {
//       gameIsRunning = false;
//     }
//     else if (userNumber == 0 && isNaN(userNumber)) {
//       alert("You didn't enter a number");
//       gameIsRunning = false;

//     }
//     else if (userNumber == random) {
//       alert('Congrats! You win!');
//       gameIsRunning = false;
//     }
//     else {
//       counter++;
//       alert('Sorry, wrong!\n You tried ' + counter + ' times.\n Ok, try again! Or type "-1 to quit"');
//       checkNumber(random);
//     }



//   }


// }

// checkNumber(randomNumber);
// console.log('counter ' + counter);



// var game = {
//   counter: 0,
//   gameIsRunning: true,
//   randomNumber: function(min, max) {
//     return Math.round(min + Math.random() * (max - min));
//   },
 
//   checkAnswer: function(random){
//     var answer = +prompt('Insert Number (or "-1" to quit)');
//     while(this.gameIsRunning) {
//       if(answer == -1) {
//         this.gameIsRunning = false;
//       }
//       else if(answer == 0 && isNaN(answer)) {
//         alert('Enter number or leave');
//         this.gameIsRunning = false;

//       }
//       else if(answer == random) {
//         alert('You win!');
//         this.gameIsRunning = false;

//       }
//       else {
//         this.counter++;
//         answer = +prompt('Sorry, wrong! You tried '+ this.counter +' times. Try again or leave (type "-1")');

//       }
//     }
//   }

// }


// game.checkAnswer(game.randomNumber(1, 3));


/** 
 * 
 * Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы
            должны получить на выходе объект, в котором в соответствующих свойствах описаны
            единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект:<br>
            {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. <br>
            Если число превышает 999, необходимо выдать
            соответствующее сообщение с помощью console.log и вернуть пустой объект.

 * 
  */


// function splitNumber(number) {
//   console.log(number);
//     //var digits = number.split('');
//     //console.log(number.split(''));
//     var numberString = number + '';
//     var digits = numberString.split('');
//     //console.log(digits);
//   return digits;

// }


// function createResult(digits) {
//   var resultObject = Object.create(null);

//   if(digits.length > 2) {
//     resultObject['единицы'] = digits[2];
//     resultObject['десятки'] = digits[1];
//     resultObject['сотни'] = digits[0];
    
//   }
    
//   else if(digits.length > 1) {
//     resultObject['единицы'] = digits[1];
//     resultObject['десятки'] = digits[0];

//   }

//   else
//     resultObject['единицы'] = digits[0];

//   return resultObject;
// }

// function checkNumber(number) {

//   if(number == -1) {
//     alert("Bye! :)");
//     return false;
//   }

//   else if(isNaN(number)) {
//     var newNumber = +prompt("You didn't enter a number! Try again or enter '-1' to quit");
//     checkNumber(newNumber);
//   }

//   else if(number < -1) {
    

//     var newNumber = +prompt("Please, enter positive number only and between 0 and 999! Try again or enter '-1' to quit");
//     checkNumber(newNumber);

//   }
//   else if(number > 999) {
//     var resultObject = Object.create(null);
//     console.log('You entered a number more than 999. The result is: ');
//     return resultObject;

//   }
//   else {
  
//     var digits = splitNumber(number);

//     return createResult(digits);
//   }
    
// } 


// var userNumber = +prompt('Enter number (from 0 to 999');

// var result = checkNumber(userNumber);

// if(result) {
//   console.log(result);
// }






/**
 Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер
            задается пользователем)
 * 
 * 
 */

var game = {
    counter: 0,
    movements: [],
    gameIsRunning: true,
    randomNumber: function(min, max) {
      return Math.round(min + Math.random() * (max - min));
    },
   
    checkAnswer: function(random){
      var answer = +prompt('Insert Number (or "-1" to quit). Also, you can check a number by counter (enter "-2")');
      while(this.gameIsRunning) {
        if(answer == -1) {
          this.gameIsRunning = false;
        }

        else if(answer == -2) {

          this.gameIsRunning = false;
          var movementCounter = +prompt("Insert number of move and I'll show you it to you" );
          //if(answer == 0 && isNaN(answer))
          if(this.movements[movementCounter])
            alert('Your move was ' + this.movements[movementCounter]);
          else {
            alert('Sorry, this move is more or less, than you played');
          }
        }
        else if(answer == 0 && isNaN(answer)) {
          alert('Enter number or leave');
          this.gameIsRunning = false;
  
        }
        else if(answer == random) {
          alert('You win!');
          this.gameIsRunning = false;
  
        }
        else {
          this.counter++;
          this.movements[this.counter] = answer;
          console.log('counter ', this.counter);
          console.log('movement ', this.movements[this.counter]);

          answer = +prompt('Sorry, wrong! You tried '+ this.counter +' times. Try again or leave (type "-1"). Also, you can check a number by counter (enter -2)');
  
        }
      }
    }
  
  }
  
  
  game.checkAnswer(game.randomNumber(1, 3));



/*****************
 *  * На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»
 *
 * 
 */

 





 /*******
  * 
  * 
 
            xxxxx <br>
  */

  