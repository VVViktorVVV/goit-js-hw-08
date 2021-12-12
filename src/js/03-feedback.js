import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');


const formInput = {
    email: '',
    message: '',
};


const storageInfo = localStorage.getItem("feedback-form-state");
const parseFormInput = JSON.parse(storageInfo);


(() => {
    if (storageInfo) {
        email.value = parseFormInput.email;
        message.value = parseFormInput.message;
    }

    if (JSON.parse(storageInfo)?.email) {
        formInput.email = JSON.parse(storageInfo).email;
    }
    if (JSON.parse(storageInfo)?.message) {
        formInput.message = JSON.parse(storageInfo).message;
    }
    
})();


form.addEventListener('input', throttle(formInfo, 500));

function formInfo(e) {

    const email = e.target;
    const message = e.target;

    formInput[`${email.name}`] = `${email.value}`;
    formInput[`${message.name}`] = `${message.value}`;

     localStorage.setItem('feedback-form-state', JSON.stringify(formInput));
}



form.addEventListener('submit', sendForm);

function sendForm(e) {
    e.preventDefault();

    if (email.value === '' || message.value === '') {
        alert('Все поля должны быть заполнены!');
        return
    }
       
    console.log(formInput);
    formInput.email = '',
    formInput.message = '',
    localStorage.clear();
    e.currentTarget.reset();
}
