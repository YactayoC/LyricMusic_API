const notificationMail = document.querySelector('.main__message');

function callNotification() {
    if (notificationMail.classList.contains('d-none')) {
        notificationMail.classList.remove('d-none');
        notificationMail.innerHTML = 'Success! <span>Mail sent</span> '
    }
}


export default callNotification;