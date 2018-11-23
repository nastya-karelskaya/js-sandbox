"use strict";




/**
 Для игры, реализованной на уроке, добавить возможность вывода ходов на страницу
 * 
 * 
 */
// var htmlClass = document.querySelector(".game");
// //console.log("htmlClass", htmlClass);
// var game = {
//     // htmlClass: document.querySelector(".game"),
//     counter: 0,
//     movements: [],
//     gameIsRunning: true,
//     randomNumber: function(min, max) {
//       return Math.round(min + Math.random() * (max - min));
//     },
   
//     checkAnswer: function(random){
//       var answer = +prompt('Insert Number (or "-1" to quit). Also, you can check a number by counter (enter "-2")');
//       while(this.gameIsRunning) {
       

//         if(answer == -1) {
//           this.gameIsRunning = false;
//         }

//         else if(answer == -2) {

//           this.gameIsRunning = false;
//           var movementCounter = +prompt("Insert number of move and I'll show you it to you" );
//           //if(answer == 0 && isNaN(answer))
//           if(this.movements[movementCounter]) {
//             alert('Your move was ' + this.movements[movementCounter]);
            
//           }
//           else {
//             alert('Sorry, this move is more or less, than you played');
//           }
//         }
//         else if(answer == 0 && isNaN(answer)) {
//           alert('Enter number or leave');
//           this.gameIsRunning = false;
  
//         }
//         else if(answer == random) {
//           this.counter++;
//           var movement = document.createElement('p');
//           movement.innerText = 'Your move was: ' + answer + ' (counter: ' + this.counter + ')';
//           console.log('movement'+movement);
//           htmlClass.appendChild(movement);
//           alert("You've won!");
//           this.gameIsRunning = false;
  
//         }
//         else {
//           this.counter++;
//           this.movements[this.counter] = answer;

//           var movement = document.createElement('p');
//           movement.innerText = 'Your move was: ' + answer + ' (counter: ' + this.counter + ')';
//           console.log('movement'+movement);
//           htmlClass.appendChild(movement);

//           answer = +prompt('Sorry, wrong! You tried '+ this.counter +' times. Try again or leave (type "-1"). Also, you can check a number by counter (enter -2)');
  
//         }
//       }
//     }
  
//   }
  
  
//   game.checkAnswer(game.randomNumber(1, 3));



/*****************
 *  * 
 * 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые
    html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е.
    чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы
    – латинскими буквами A, B, C, D, E, F, G, H.

   2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К-
    король, Ф – ферзь и тп., причем все фигуры должны стоять на своих местах и быть
    соответственно черными и белыми.

   3. * Заменить буквы, обозначающие фигуры картинками.
 * 
 */

// var chessTable = document.createElement('table');

// chessTable.style.marginTop = "30px";
// chessTable.style.marginLeft = "30px";

// for(var i=0; i<8; i++) {
//   var thisRow = chessTable.insertRow(i);
//   for(var j=0; j<8; j++) {
    
//     var thisCell = thisRow.insertCell(j);
//     thisCell.style.width = "30px";
//     thisCell.style.height = "30px";
//     // if( (j%2 > 0) && (i%2 == 0 )) {
//     if(i%2 > 0) {
//       if(j%2 > 0) {
//         thisCell.style.backgroundColor = 'black';
//       }
//       // if( (j%2 > 0) && (i%2 > 0 )) { 
//       if(j%2 == 0) { 
//         thisCell.style.backgroundColor = 'yellow';
//       }
//     }

//     if(i%2 == 0) {
//       if(j%2 == 0) {
//         thisCell.style.backgroundColor = 'black';
//       }
//       // if( (j%2 > 0) && (i%2 > 0 )) { 
//       if(j%2 > 0) { 
//         thisCell.style.backgroundColor = 'yellow';
//       }
//     }
    
//   }

// }
  
var chessTableObject = {
  newTable: document.createElement('table'),


  createChessTable: function() {
    //var newTable = //document.createElement('table');

    for(var i=0; i<8; i++) {
      //var the =
      var thisRow = this.newTable.insertRow(i);

      for(var j=0; j<8; j++) {
        thisRow.insertCell(j);
        
      }
    }     
        
    // return  this.newTable;},
  },

  styleChessTable: function() {
    this.newTable.style.marginTop = "30px";
    this.newTable.style.marginLeft = "30px";

    var allRows = this.newTable.rows;

    for(var i=0; i<8; i++) {
      var theRow = allRows[i]; 
  
      for(var j=0; j<8; j++) {
        var allCells = theRow.cells;

        var theCell = allCells[j];
        theCell.style.width = "30px";
        theCell.style.height = "30px";

        if(i%2 > 0) {
          if(j%2 > 0) {
            theCell.style.backgroundColor = 'black';
          }
          // if( (j%2 > 0) && (i%2 > 0 )) { 
          if(j%2 == 0) { 
            theCell.style.backgroundColor = 'yellow';
          }
        }
    
        if(i%2 == 0) {
          if(j%2 == 0) {
            theCell.style.backgroundColor = 'black';
          }
          // if( (j%2 > 0) && (i%2 > 0 )) { 
          if(j%2 > 0) { 
            theCell.style.backgroundColor = 'yellow';
          }
        }

      }
    }

    return this.newTable;
  
  }
}
  


var chessBlock = document.querySelector('.chess');

chessTableObject.createChessTable();
var chessTable = chessTableObject.styleChessTable();

chessBlock.appendChild(chessTable);



