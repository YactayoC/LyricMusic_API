const messagePop = document.querySelector('.main__message');

function validation(value1, value2) {
    if ([value1, value2].includes('') || (value1.trim() === '' || value2.trim() === '')) {
        console.log('vacio');
        return;
    }
}

function validationEmail(value1, value2) {
    if ([value1, value2].includes('') || (value1.trim() === '' || value2.trim() === '')) {
        console.log('vacio');
        return;
    }
    messagePop.classList.remove('d-none');
}

export {validation, validationEmail};