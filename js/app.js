let app = {
    init() {
        func.jsRandomFunction();
    }
};

let func = {
    jsRandomFunction() {
      let random = document.getElementsByClassName('js-random');
      let stateOfProcess = document.getElementsByClassName('form__field-blank');
      let image = document.getElementsByClassName('form__field-image');

      random[0].onclick = () => {


        document.querySelectorAll('.form__field').forEach(function(wrapper) {
          let random_boolean = Math.random() >= 0.5;
          console.log(random_boolean);

          if (random_boolean >= 0.5) {

            stateOfProcess[0].classList.add('checked');
            stateOfProcess[0].classList.remove('canceled');
            stateOfProcess[0].innerHTML = "<span>Проверено</span> ";
            image[0].style.display = 'none';
            image[0].classList.add('form__field-ok');
            image[0].classList.remove('form__field-upload');


          } else {
            stateOfProcess[0].classList.add('canceled');
            stateOfProcess[0].classList.remove('checked');
            stateOfProcess[0].innerHTML = "<span>Отклонено</span> ";
            image[0].style.display = 'none';
            image[0].classList.add('form__field-upload');
            image[0].classList.remove('form__field-ok');

          }
        });

      }
    }
};

$(function () {
    app.init();
});
