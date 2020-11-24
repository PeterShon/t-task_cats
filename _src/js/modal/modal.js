let favorites = document.querySelectorAll('.card__widg-like-wrap');
//вызов функции присвоения функции к каждому элементу по событию 'click'
funcOfFavorite(favorites);

//функция вызова функции проверки лайка по событию 'click'
function funcOfFavorite(array_favorite) {
   for (let i = 0; i < array_favorite.length; i++) {
      array_favorite[i].addEventListener('click', checkFavorite);
   }
}

//Функция проверки лайка на элементе
function checkFavorite() {
   if (this.classList.contains('card__widg-like-wrap--active')) {
      this.classList.remove('card__widg-like-wrap--active');
      this.querySelector('.card__favorite').href = "#close";
   } else {
      this.classList.add('card__widg-like-wrap--active');
      this.querySelector('.card__favorite').href = "#openModal";
   }
}