//плавный скролл полифилл by https://nicegist.github.io/d210786daa23fd57db59634dd231f341
@@include('./smoothscroll-master/smoothscroll.min.js');

document.addEventListener('DOMContentLoaded', function () {
   ////валидация формы и отображение чекбоксов
   @@include('./feedback/feedback.js')
   ////scrollUp
   @@include('./moveUp/moveUp.js')
   ////burger
   @@include('./burger/burger.js')
});