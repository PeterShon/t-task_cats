let salewidgetsArray = cardbox.getElementsByClassName('card__widg-sale'); //список скидочных виджетов, узлов DOM
//скрыть виджет, если дата-атрибут пуст
for (let i = 0; i < salewidgetsArray.length; i++) {
   if (salewidgetsArray[i].dataset.percent == "") {
      salewidgetsArray[i].classList.add('_transparent');
   }
}