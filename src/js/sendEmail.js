import {validationEmail} from './validationForm.js'

const form = document.getElementById('form-email');
const email = document.getElementById('email');
const message = document.getElementById('message');

const messagePop = document.querySelector('.main__message');
messagePop.classList.add('d-none');
addEventListeners();

function addEventListeners() {
    form.addEventListener('submit', sendEmail);
}

function sendEmail(e) {
    e.preventDefault();
    validationEmail(email.value, message.value);
    
    form.reset();
}



