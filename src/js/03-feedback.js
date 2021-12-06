import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');


const formInput = {};

form.addEventListener('input', throttle(formInfo, 500));

function formInfo(e) {

    const email = e.target;
    const message = e.target;

    formInput[`${email.name}`] = `${email.value}`;
    formInput[`${message.name}`] = `${message.value}`;
  
    localStorage.setItem('feedback-form-state', JSON.stringify(formInput));
}

const storageInfo = localStorage.getItem("feedback-form-state");
console.log(storageInfo);

const parseFormInput = JSON.parse(storageInfo);
console.log(parseFormInput);

function onInputText() {
    if (parseFormInput === null ) {
        return
    }
    email.textContent = parseFormInput.email;
    message.textContent = parseFormInput.message;
}

window.onload = onInputText;

    
form.addEventListener('submit', sendForm);

function sendForm(e) {
    e.preventDefault();

    console.log(parseFormInput);
    email.textContent = "";
    message.textContent = "";
    localStorage.clear();
    e.target.reset();
}
