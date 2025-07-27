const username=document.getElementById('username');
const usernameError = document.getElementById('username-error');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmPassword=document.getElementById('confirm-password');

//const usernameError = document.getElementById('username-error');



const submitBtn = document.getElementById('submit');


submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    //validateForm()
    //let name =username;

    //console.log(name);
    //console.log(name.parentElement)
    usernameValidate()

    //setError(nameV,'enter your name');
});

function usernameValidate(){
    let name = username.value.trim()
    if(name===''){
        setError(username, 'please enter your name!');
    }
    else if(name.length<4){
        setError(username, 'Username must be atleast 4 characters!');
    }
    else{
        username.classList.add('success');

    }

  let emailValue = email.value.trim();

    if(emailValue===''){
        setError(email, 'please enter your email!');
    }
    else if(emailValue.length<12){
        setError(email, 'Username must be atleast 12 characters!');
    }
    else{
        email.classList.add('success');
    }

  let passwordValue = password.value.trim();

    if(passwordValue===''){
        setError(password, 'please enter password!');
    }
    else{
        password.classList.add('success');
    }
  let passwordConfirmValue  = confirmPassword.value.trim();
   
    if(passwordValue && passwordConfirmValue===''){
        setError(confirmPassword, 'please confirm password!');
    }
    else if(passwordValue!=passwordConfirmValue){
        setError(confirmPassword, 'password does not match!');
    }
    else if(passwordConfirmValue===''){
        setError(confirmPassword, 'please confirm password!');
    }
    else{
       // confirmPassword.classList.add('success');
    }
}

function setError(element, message){ 
    const inputDiv = element.parentElement;
    const ErrorDisplay = inputDiv.querySelector('.error');
    ErrorDisplay.textContent=message;    
}




