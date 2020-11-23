//плавный скролл полифилл by https://nicegist.github.io/d210786daa23fd57db59634dd231f341
var nativeSmoothScrollTo = function (a) { window.scroll({ behavior: "smooth", left: 0, top: a.getBoundingClientRect().top + window.pageYOffset }) }, smoothScrollTo = function (a, f) { var c = document.scrollingElement || document.documentElement, d = c.scrollTop, g = a - d, k = +new Date, h = function (e) { e = +new Date - k; var l = parseInt; var b = e / (f / 2); 1 > b ? b = g / 2 * b * b + d : (b--, b = -g / 2 * (b * (b - 2) - 1) + d); c.scrollTop = l(b); e < f ? requestAnimationFrame(h) : c.scrollTop = a }; h() }, supportsNativeSmoothScroll = "scrollBehavior" in document.documentElement.style,
   scrollToElem = function (a) { a && (a = document.querySelector(a)) && (supportsNativeSmoothScroll ? nativeSmoothScrollTo(a) : smoothScrollTo(a.offsetTop, 600)) };;

document.addEventListener('DOMContentLoaded', function () {
   ////валидация формы и отображение чекбоксов
   //объявление переменных/констант
const feedbackSub = document.querySelector('.feedback__btn');
const form = document.getElementById('form');

//добавление функции валидации событию "клик" для кнопки
feedbackSub.addEventListener('click', validateUp);

//вызов функции обработки checkbox по клику
chbLb();

//объявление функции валидации формы
function formValidate() {
   let error = 0;
   let formReq = document.querySelectorAll('.__req') //require - обязательное поле //создаёт объект со всеми элементами с классом обязательности
   //присвоение каждому обязательному объекту определённого результата
   for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input); //в начале проверки объектов убрать у всех объектов класс '__error'
      //проверка на присутствие класса '__email' у объекта
      if (input.classList.contains('__email')) {
         //если объект имеет ошибку в тексте email, то ему добавляется класс '__error'
         if (emailTest(input)) {
            formAddError(input);
            error++;
         }
      } else {
         //проверка заполненности оставшегося поля
         if (input.checked == false) {
            formAddError(input);
            error++;
         }
      }
   }
   return error;
};

//функции добавляют/убирают класс '__error' себе и родительскому объету
function formAddError(input) {
   //input.parentElement.classList.add('__error');
   input.classList.add('__error');
};
function formRemoveError(input) {
   //input.parentElement.classList.remove('__error');
   input.classList.remove('__error');
};
//Функция теста email
function emailTest(input) {
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

//Функция запуска валидации
function validateUp(form) {
   if (formValidate(form)) {
      alert('Пожалуйста заполните поле Email и укажите согласие на подписку');
      return console.log('Отправка формы остановлена'); //не обновлять страницу, если есть ошибки
   } else {
      alert('Спасибо. Ваша подписка оформлена')
   }
}

//Функция применения события click для всех checkbox внутри формы 
function chbLb() {
   let formReq = document.querySelectorAll('.feedback__chb');
   for (let i = 0; i < formReq.length; i++) {
      formReq[i].addEventListener('click', function () {
         this.classList.toggle('feedback__chb--active');
      });
   }
}
   ////scrollUp
   //результат проверки нативной поддержки плавного скролла (ie11)
const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
//получение объектов
var moveUpItem = document.querySelector('.main__arrowtop');
//вызов функции, добавляющей функции в объект
setFunc(moveUpItem);
//вызов функции оценки положения окна при загрузке старицы, для отображения/скрытия скролл-кнопки
lvlScroll();
//обработка события onScroll
window.addEventListener('scroll', lvlScroll)
//обработка события onClick
moveUpItem.addEventListener('click', function () {
   if (supportsNativeSmoothScroll) {
      //обработка кода по условию "если есть скролл"
      if (window.pageYOffset) {
         window.scrollTo({ top: 0, behavior: 'smooth' })
      }
   } else {
      if (window.pageYOffset) {
         scrollToElem('#header');
      }
   }
})

//изменение статуса объекта
function fz_hider() {
   this.classList.add('_transparent');
}
function fz_shower() {
   this.classList.remove('_transparent');
}
//запись функций в каждый анимируемый объект
function setFunc(moveUpItem) {
   moveUpItem.hider = fz_hider;
   moveUpItem.shower = fz_shower;
}

//функция, определяющая статус объектов по высоте скролла
function lvlScroll() {
   /*console.log('Документ: ');
   console.log(document);
   console.log('Окно: ');
   console.log(window);
   console.log('Ширина окна: ' + document.documentElement.clientWidth);
   console.log('Текущий скролл: ' + window.pageYOffset);*/
   if (document.documentElement.clientWidth * 0.105 > window.pageYOffset) {
      moveUpItem.hider();
   } else {
      moveUpItem.shower();
   }
}
   ////burger
   
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
});