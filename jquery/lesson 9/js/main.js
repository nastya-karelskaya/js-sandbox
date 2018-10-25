/* ====== События браузера и страницы ===== */

// $(function() {
// 	$('p').text('DOM элементы загружены') 	
// }); // Готовность DOM элементов 

// $(window).load(function() {
	
// }); // Полная загрузка страницы

// $(window).unload(function(){
// 	alert('Пользователь, пока!');
// }) // Выход со страницы 

// $(window).resize(function(event) {
// 	console.log('размеры окна изменены!')
// });	// Изменение размера (например, окна)

// $(window).scroll(function(event) {
// 	console.log('Страница прокручена')
// }); // Прокрутка элемента

/*  

В html документе есть Тег img, в который загружается картинка, в атрибуте alt должна быть запись "картинка не загружена". Необходимо проверить при помощи jQuery, загрузилась картинка до конца или нет и спустя 3 секунды изменить alt на "Картинка успешно загружена" 

Подсказка: тебе помогут функции Attr() Delay() и те функции, которые мы рассматривали в сегодняшнем уроке

*/


$(function() {
  var isImgReady = document.getElementById("img").complete;//$("img").complete; //$("img").attr('alt');
  console.log(isImgReady);

  if(isImgReady) {
    $("img").attr('alt', 'Picture is loaded');
  }
  else {
    $("img").attr('alt', 'Picture is loaded after delay').delay(180);
  }

});
