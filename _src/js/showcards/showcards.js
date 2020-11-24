let showButton = document.querySelector('.cards__show-block'); //кнопка
let cardbox = document.querySelector('.cards__card-box'); //бокс с карточками
let hidecards = cardbox.getElementsByClassName('card--hide'); //список курточек, узлов DOM
const firstshow = 6; //сколько карточек показать вначале
const countToShow = showButton.dataset.n; //карточек к показу

//показать начальное количество карточек
if (hidecards.length < 6) {
   for (let i = 0; i < hidecards.length; i++) {
      hidecards[0].classList.add('card--active');
      hidecards[0].classList.remove('card--hide');
   }
} else {
   for (let i = 0; i < firstshow; i++) {
      hidecards[0].classList.add('card--active');
      hidecards[0].classList.remove('card--hide');
   }
}

//передача событию 'click' для кнопки анонимную функцию вызывающую фунцию показа карточек
showButton.addEventListener('click', function () {
   showcards(hidecards);
   if (document.querySelector('.sort__item--active') == null) {
      return
   } else if (document.querySelector('.sort__item--active').classList.contains('sort__age')) {
      sortByAge(cardBox, cards, visiblecards);
   } else if (document.querySelector('.sort__item--active').classList.contains('sort__price')) {
      sortByPrice(cardBox, cards, visiblecards);
   }
})

//функция показа карточек
function showcards(arrayOfCards) {
   if (arrayOfCards.length < countToShow) {
      for (let i = 0; i < arrayOfCards.length; i++) {
         arrayOfCards[0].classList.add('card--active');
         arrayOfCards[0].classList.remove('card--hide');
      }
      if (arrayOfCards.length == 0) {
         showButton.classList.add('_hide');
      }
   } else {
      for (let i = 0; i < countToShow; i++) {
         arrayOfCards[0].classList.add('card--active');
         arrayOfCards[0].classList.remove('card--hide');
      }
      if (arrayOfCards.length == 0) {
         showButton.classList.add('_hide');
      }
   }
}