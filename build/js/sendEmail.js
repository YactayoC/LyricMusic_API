import{validationEmail}from"./validationForm.js";const form=document.getElementById("form-email"),email=document.getElementById("email"),message=document.getElementById("message"),messagePop=document.querySelector(".main__message");function addEventListeners(){form.addEventListener("submit",sendEmail)}function sendEmail(e){e.preventDefault(),validationEmail(email.value,message.value),form.reset()}messagePop.classList.add("d-none"),addEventListeners();