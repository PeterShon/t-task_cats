
let nav = document.querySelector('.header__nav');
let bodyofpage = document.querySelector('body');
let burgerItem = document.querySelector('.__burger');
burgerItem.addEventListener('click', burgerStateShow);

function burgerStateShow() {
   if (window.matchMedia("(max-width: 800px)").matches) {
      if (!nav.classList.contains('__active')) {
         nav.classList.add('__active');
         document.body.style.overflow = 'hidden';
      } else {
         nav.classList.remove('__active');
         document.body.style.overflow = 'visible';
      }
   }
}