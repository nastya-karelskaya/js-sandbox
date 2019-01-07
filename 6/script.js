"use strict";





function init() {
  //var images = document.querySelectorAll('.slider__img');
  //for(var i=0; i< images.length; i++) {
    //images[i].onclick = changePicture;
    //images[i].addEventListener('click', changePicture);
  //}
  var slider = document.querySelector('.slider');
  slider.addEventListener('click', changePicture);
}

var fullImg = document.createElement('img');

function changePicture(event) {

  var appDiv = document.querySelector('.show-full-img');
  var isFullImgExists = document.querySelector('.show-full-img');
  
  //appDiv.innerHTML = ""; 

  // var image = document.querySelector('.slider__img');
  var imgFullSrc = event.target.src;
  var srcArr = imgFullSrc.split('/');
  var imgSrc = 'img/' + srcArr[srcArr.length - 1]; 

  
 //fullImg.src = imgSrc;


    fullImg.src = imgSrc;

    appDiv.appendChild(fullImg);
}

window.onload = init;


//addEventListener(event, handler);




