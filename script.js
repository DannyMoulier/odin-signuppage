function validatePassword() {
    let pass1 = document.querySelector('#password1')
    let pass2 = document.querySelector('#password2')
    let errorMessage = document.querySelector('.error')

    if (pass1 !== pass2){
        errorMessage.innerText = 'passwords not match'
    } else if (pass1 === pass2) {
        errorMessage.innerText = ''
    }
}

// validatePassword()