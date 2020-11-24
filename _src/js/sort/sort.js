let visiblecards = document.getElementsByClassName('card--active'); //список активных карточек, узлов DOM
let cardBox = document.getElementById('cards__card-box'); //родитель карточек
let cards = document.getElementById('cards__card-box').children; //карточки
const sortButtonPrice = document.querySelector('.sort__price');
const sortButtonAge = document.querySelector('.sort__age');
//определение атрибутов цены и возраста для видимых карточек
setPrice(visiblecards);
setAge(visiblecards);

sortButtonPrice.addEventListener('click', function () {
   sortByPrice(cardBox, cards, visiblecards);
   this.classList.add('sort__item--active');
   sortButtonAge.classList.remove('sort__item--active');
});
sortButtonAge.addEventListener('click', function () {
   sortByAge(cardBox, cards, visiblecards);
   this.classList.add('sort__item--active');
   sortButtonPrice.classList.remove('sort__item--active');
});

function setPrice(cards) {
   for (let i = 0; i < cards.length; i++) {
      cards[i].cPrice = cards[i].querySelector('.card__price').dataset.price.replace(' ', '') * 1;
   }
}

function setAge(cards) {
   for (let i = 0; i < cards.length; i++) {
      cards[i].cAge = cards[i].querySelector('.card__age').dataset.itemD * 1;
   }
}

function sortByPrice(cardsNod, cardsArr, visCards) {
   setPrice(visCards);
   [].slice.call(cardsArr).sort(function (a, b) {
      if (a.cPrice < b.cPrice) {
         return -1;
      } else if (a.cPrice > b.cPrice) {
         return 1;
      } else {
         return 0;
      }
   }).forEach(function (val, index) {
      cardsNod.appendChild(val);
   });
}

function sortByAge(cardsNod, cardsArr, visCards) {
   setAge(visCards);
   [].slice.call(cardsArr).sort(function (a, b) {
      if (a.cAge < b.cAge) {
         return -1;
      } else if (a.cAge > b.cAge) {
         return 1;
      } else {
         return 0;
      }
   }).forEach(function (val, index) {
      cardsNod.appendChild(val);
   });
}