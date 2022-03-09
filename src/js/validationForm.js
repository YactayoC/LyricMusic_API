import callNotification from "./notificationMessage.js";

function validationSearch(value1, value2) {
    if ([value1, value2].includes('') || (value1.trim() === '' || value2.trim() === '')) {
        return;
    }
}

function validationEmail(value1, value2) {

    if ([value1, value2].includes('') || (value1.trim() === '' || value2.trim() === '')) {
        return;
    }
    callNotification();
}

export {validationSearch, validationEmail};