const body = document.getElementsByTagName("body")[0];
const emailInput = document.getElementById('email-input');
const errorMessage = document.getElementById('error-message');
const successCard = document.getElementById('success-card');
const dismissButton = document.getElementById('dismiss-button');
const successBd = document.getElementById('success-backdrop');
const successEmail = document.getElementById('success-email');

function onSubmit(e) {
    e.preventDefault();
    const val = emailInput.value;
    const regex = '[a-zA-Z0-9]+.@[a-zA-Z0-9]+.com$'
    if (!val.match(regex)) {
        errorMessage.classList.remove('invisible');
        emailInput.classList.add('invalid');
    } else {
        errorMessage.classList.add('invisible');
        successCard.classList.remove('invisible');
        successBd.classList.remove('invisible');
        emailInput.classList.remove('invalid');
        body.classList.add('overlay');
        successEmail.innerHTML = val;
    }
}

function closeSuccess() {
    body.classList.remove('overlay');
    successCard.classList.add('invisible');
    successBd.classList.add('invisible');
}

