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