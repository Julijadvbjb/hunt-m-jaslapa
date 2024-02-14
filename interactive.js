const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//close mobile menu when clicking on menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector ('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('.is-active');
      menuLinks.classList.remove('active');   //removes
    }
}
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

//Modal items
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main__btn');
const closedBtn = document.querySelector('.close-btn');

//Click events
openBtn.addEventListener('click', () => {    //shows as block element when pressed
    modal.style.display = 'block';
});
closedBtn.addEventListener('click', () => {  //dissapears
    modal.style.display = 'none';
});
window.addEventListener('click',(e) => {  /// 
    if(e.target === modal) {
        modal.style.display = 'none';
    }
});
//form validation
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

//show error message
function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage = formValidation.querySelector('p'); 
    errorMessage.innerText = message;        //allows to type error message                  
}

function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}
//check required fields
function checkrRequired(inputArr) {
    inputArr.forEach(function(input) {    //calls a function for each element in array
        if(input.value.trim() === '') {    //compares input without spaces to input-none
            showError(input, `${getFieldName(input)} is required`); //  identifies function and adds error
        } else {
            showValid(input);
        }
    });
}
//get fieldname
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);  //Turns first letter to capital  and returns it
}

//check input
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);  
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else{
        showValid(input);
    }
}
//check if passwords match
function passwordMatch(input1, input2) {
    if(input1.value !== input2.value) {   //compare both password inputs
        showError(input2, 'Passwords do not match');
    }
}
//event listeners
form.addEventListener('submit', (e) => {
    checkrRequired([name, email, password, passwordConfirm]);  //all functions ->
    checkLength(name,4,30);
    checkLength(password, 8, 25);
    checkLength(passwordConfirm, 8, 25);
    passwordMatch(password, passwordConfirm);

    if(!isFormValid()) e.preventDefault();   //does not allow to submit if form is not valid
  
});

//if input fields are not valid, do not submit
function isFormValid() {
    const inputContainer = form.querySelectorAll('.form-validation');
    let result = true;
    inputContainer.forEach((container) => {   //checks each form field
        if(container.classList.contains('error')) {      //if error found, returns false
            result = false;
        }
    });
    return result;
}

//dispaly more text
const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e) => {
    text.classList.toggle('show-more'); 
    if(readMoreBtn.innerText === 'Read more'){
        readMoreBtn.innerText = 'Read less';
    }else {
        readMoreBtn.innerText = 'Read more';
    }
} );

//email data type validation
// if(isEmailValid(emailInput.value)) {
//     showValid(input);
// }else {
//     showError(input,'Invalid email');
// }

// function isEmailValid(email) {
//     const reg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;
//     return reg.test(email);
// }

//adding DOM element
   const para = document.createElement('p');
   para.innerHTML = "Hunt!";
   document.getElementById('paragraph').appendChild(para);


//DOM manipulations- change id
const spanShowD = document.getElementById('showD');
console.log(spanShowD.setAttribute("id", "showdown"));  //visible in console log


//jQuery 

$(document).ready(function(){  //jQuery selector that makes a function available when document is loaded
    $("#hidden").hover(function(){  // activates when hovered
      alert("BOOoo!! You found a secret message");
    },
    ); 
  });
