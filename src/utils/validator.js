export function validateEmail(email) {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailPattern.test(email) === false) {
        return false;

    } else {
        return true;
    }
}

export function validateText(text) {

    if (typeof text !== "string") {
        return false
    }
    return text.length > 3
}