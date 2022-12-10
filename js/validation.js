const form = document.querySelector('.form')
const nameInput = form['name']
const emailInput = form['email']

const nameErrorField = document.querySelector('.form__error-name')
const emailErrorField = document.querySelector('.form__error-email')

function validateEmail() {
    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

    if (emailInput.value.match(pattern)) {
        emailInput.classList.add('input__valid')
        emailInput.classList.remove('input__invalid')
        emailErrorField.textContent = ''
    } else {
        emailInput.classList.remove('input__valid')
        emailInput.classList.add('input__invalid')
         emailErrorField.textContent = 'Incorrect email type'
    }

    if (emailInput.value === '') {
        emailInput.classList.add('input__invalid')
         emailErrorField.textContent = 'Enter email'
    }
}

function validateName() {
    if (nameInput.value === '') {
        nameInput.classList.remove('input__valid')
        nameInput.classList.add('input__invalid')
        nameErrorField.textContent = 'Enter name'
    } else {
        nameInput.classList.add('input__valid')
        nameInput.classList.remove('input__invalid')
        nameErrorField.textContent = ''
    }
}

form.onsubmit = function (e) {
    e.preventDefault()

    validateName()
    validateEmail()
}