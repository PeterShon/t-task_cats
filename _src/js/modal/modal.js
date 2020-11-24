let favorites = document.querySelectorAll('.card__widg-like-wrap');

funcOfFavorite(favorites);

function funcOfFavorite(array_favorite) {
   for (let i = 0; i < array_favorite.length; i++) {
      array_favorite[i].addEventListener('click', checkFavorite);
   }
}

function checkFavorite() {
   //console.log(this.querySelector(''));
   if (this.classList.contains('card__widg-like-wrap--active')) {
      this.classList.remove('card__widg-like-wrap--active');
      this.querySelector('.card__favorite').href = "#close";
   } else {
      this.classList.add('card__widg-like-wrap--active');
      this.querySelector('.card__favorite').href = "#openModal";
   }
}