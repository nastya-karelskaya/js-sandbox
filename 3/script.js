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



/** С помощью цикла for вывести все простые числа в промежутке от 0 до 100  */


// nextPrime:
//   for (var i = 2; i <= 100; i++) {

//     for (var j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     console.log(i);
//   }



/**
 * С помощью цикла do…while написать функцию для вывода чисел от 0 до 10, чтобы результат выглядел так: <br>

    0 – это ноль 
    1 – нечетное число 
    2 – четное число 
    3 – нечетное число 
    … 
    10 – четное  
 * 
 * 
 * 
 */

// var i = 0;
//  do {

//   if(i == 0) {
//     console.log(i, " - it's zero");
//   }
//   else if( i % 2 == 0) {
//     console.log(i, " - it's even");
//   }
//   else {
//     console.log(i, " - it's odd");
//   }
    

//   i += 1;

//  } while (i <= 10);



/*****************
 * 
 * Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так: 
    for(…){// здесь пусто}
 * 
 * 
 * 
 */

 





 /*******
  * 
  * 
  * 
  * 
  * 
  * Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
            <br>
            x <br>
            xx <br>
            xxx <br>
            xxxx <br>
            xxxxx <br>
  */

  var xString = '';
  for(var i = 0; i < 20; i++) {
    //for(var j = 0; j < i; j++) {
      xString += 'x';
    //}
      console.log(xString);
  }