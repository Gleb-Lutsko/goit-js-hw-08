import throttle from "lodash.throttle";
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const LOCAL_FORM_KEY = "feedback-form-state";
feedbackForm.addEventListener('input', throttle(formInput, 500))
feedbackForm.addEventListener('submit', formSubmit)
function formInput(evt) {
    const localFormData = {
        email: emailInput.value,
        message: messageInput.value
    }
    localStorage.setItem(LOCAL_FORM_KEY, JSON.stringify(localFormData))
}
if (localStorage.getItem(LOCAL_FORM_KEY)) {
    emailInput.value = JSON.parse(localStorage.getItem(LOCAL_FORM_KEY)).email;
    messageInput.value = JSON.parse(localStorage.getItem(LOCAL_FORM_KEY)).message;
}
function formSubmit(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCAL_FORM_KEY)))
    localStorage.removeItem(LOCAL_FORM_KEY);
    emailInput.value = '';
    messageInput.value = '';
}