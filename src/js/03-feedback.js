import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
// const email = document.querySelector('[name="email"]');
// console.log(email);
// const message = document.querySelector('[name="message"]');

// const qwe = email.addEventListener("input", (event) => {
//     console.log(event.currentTarget.value);
//     return
// });

// message.addEventListener("input", (event) => {
//     console.log(event.currentTarget.value);
//     return
// });



// const feedback = {
//     email: email.addEventListener("input", (event) => {
//            event.currentTarget.value;
//     }),
    
//     password: message.addEventListener("input", (event) => {
//     event.currentTarget.value;
//     })
  
// }

// console.log(feedback);


// form.addEventListener('input', (event) => {
//     event.preventDefault();
    
//     const [email, message] = event.target.elements;
//     console.log(email);
//     console.log(message);

//     resp.email = email.value;
//     resp.password = password.value;   


    
// })

const formInput = {};

form.addEventListener('input', throttle(formInfo, 500));

function formInfo(e) {

    const email = e.target;
    const message = e.target;


    formInput[`${email.name}`] = `${email.value}`;
    formInput[`${message.name}`] = `${email.value}`;
  
    
    
    localStorage.setItem('feedback-form-state', formInput);
    console.log(formInput);
}

form.addEventListener('submit', sendForm);

function sendForm(e) {
    e.preventDefault();

    localStorage.clear();
    e.currentTarget.reset();
}
