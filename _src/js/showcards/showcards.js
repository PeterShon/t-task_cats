let showButton = document.querySelector('.cards__show-block');
let cardBoxs = document.querySelectorAll('.cards__card-box');

showButton.addEventListener('click', function () {
   this.classList.add('_hide');
   cardBoxs[1].classList.remove('cards__card-box--hide');
   cardBoxs[1].classList.add('cards__card-box--visible');
})