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