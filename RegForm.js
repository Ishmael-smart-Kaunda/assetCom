
// get input elements

const form = document.getElementById('registration-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password= document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// get errors elements

const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');

function validateUsername(){
    const value =  username.value.trim();

    if(value === ''){
        showError(username, usernameError, 'usernam is required')
    }
    else if(value.lemgth<3){
        showError(username, usernameError, 'Username must be at least 3 characters');
    }
    else{
        showSuccess(username, usernameError);
        return true;
    }
    return false;
}

function validateEmail(){
    const value = email.value.trim();
    if(value===''){
        showError(email, emailError, 'Email is reuired')
    }
    else if(!isValidEmail(value)){
        showError(email, emailError,'Please enter a valid email!')
    }
    else{
        showSuccess(email, emailError);
        return true;
    }
    return false
}

function validatePassword(){
    const value = password.value.trim();
    if(value===''){
        showError(password, passwordError,'Password is required');
    }
    else if(value.length<6){
        showError(password, passwordError,'Password must be at least 6 characters');
    }
    else{
        showSuccess(passwordError, passwordError);
        return true;
    }
    return false;
}

function validateConfirmPassword(){
    const passwordValue = passwordError.value.trim();
    const confirmValue= confirmPassword.value.trim();

    if(confirmValue===''){
        showError(confirmPassword, confirmPasswordError, 'Please confirm your password');
    }
    else if(confirmValue!==passwordValue){
        showError(confirmPassword, confirmPasswordError, 'Password do not match');
    }
    else{
        showSuccess(confirmPassword, confirmPasswordError);
        return true;
    }
    return false;
}

// Helper functions

function showError(input, errorElement, message){
    input.classList.add('error');
    input.classList.remove('success');
    errorElement.textContent=message;
}


function showSuccess(input, error, errorElemet){
    input.classList.add('success');
    input.classList.remove('error');
    errorElement.textContent='';
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// event listeners for real time validation
username.addEventListener('input', validateUsername);
email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input',validateConfirmPassword);


// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
// If all validations pass, you can submit the form
alert('Form submitted successfully!');
// Here you would typically send the form data to a
server
}
});


    