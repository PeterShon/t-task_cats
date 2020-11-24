let boughtCats = cardbox.getElementsByClassName('card__btn'); //список кнопок карточек, узлов DOM
//определение стиля кнопки
for (let i = 0; i < boughtCats.length; i++) {
   if (boughtCats[i].dataset.btn == "Продан") {
      boughtCats[i].classList.add('card__btn--bought');
   } else {
      boughtCats[i].classList.add('card__btn--buy');
   }
}