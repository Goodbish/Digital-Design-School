'use strict'

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {

            let response = await fetch('https://digital-spectr.com/ac/academy.php', {
                mode: 'no-cors',
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                form.reset();

            } else {
                alert('Что-то пошло не так')
            }
            console.log(response);
        } else {
            alert('Заполните обязательные поля')
        }
    }

    const tel = document.querySelector('.form__tel');
    let phoneMask = IMask(
        tel, {
          mask: '+{7}(000)000-00-00'
    });

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('.form__input_req');

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if(input.classList.contains('form__full-name')) {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            };
            if (input.getAttribute('type') === 'tel') {
                if (input.value.length != 16) {
                    formAddError(input);
                    error++;
                }
            }
            // if (input.getAttribute('type') === 'email') {
            //     if (ValidateEmail(input)) {
            //         formAddError(input);
            //         error++;
            //     }
            // }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('form__input_error');
        input.classList.add('form__input_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('form__input_error');
        input.classList.remove('form__input_error');
    }

    // function ValidateEmail(input) {
    //     return !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value)
    // }

});