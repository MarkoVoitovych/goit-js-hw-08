import throttle from 'lodash.throttle';

const refs = {
    FEEDBACK_FORM_STATE: 'feedback-form-state',
    feedbackForm: document.querySelector('.feedback-form'),
    feedbackFormObj: {},
};

if (localStorage.getItem(refs.FEEDBACK_FORM_STATE)) {
    const { email, message } = refs.feedbackForm.elements;
    const { email: currentEmail, message: currentMessage } = JSON.parse(localStorage.getItem(refs.FEEDBACK_FORM_STATE));
    email.value = currentEmail || "";
    message.value = currentMessage || "";
}

refs.feedbackForm.addEventListener('submit', onFormSubmit);
refs.feedbackForm.addEventListener('input', throttle(onFormInput, 500));

function onFormInput({ target: { name, value } }) {
    refs.feedbackFormObj = JSON.parse(localStorage.getItem(refs.FEEDBACK_FORM_STATE)) || {};
    refs.feedbackFormObj[name] = value;
    localStorage.setItem(refs.FEEDBACK_FORM_STATE, JSON.stringify(refs.feedbackFormObj));
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log(refs.feedbackFormObj);
    refs.feedbackFormObj = {};
    localStorage.removeItem(refs.FEEDBACK_FORM_STATE);
    e.currentTarget.reset();
}