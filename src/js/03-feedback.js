import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputName = form.querySelector('input');
const inputMsg = form.querySelector('textarea');

const formData = JSON.parse(localStorage.getItem("feedback-form-state")) ?? {};

form.addEventListener('input', throttle(onInput, 500));

function onInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

if (localStorage.getItem("feedback-form-state")) {
    inputName.value = formData.email ?? '';
    inputMsg.value = formData.message ?? '';
};

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
    evt.preventDefault();

    if (inputName.value.trim() === '' || inputMsg.value.trim() === '') {
        return
    }
    localStorage.removeItem("feedback-form-state");
    evt.currentTarget.reset();
    console.log(formData);
}

