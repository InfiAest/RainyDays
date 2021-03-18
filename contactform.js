const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const validationMessage = document.querySelector(".validation-message");
const nameSection = document.querySelector(".name-section");
const emailSection = document.querySelector(".email-section");
const subjectSection = document.querySelector(".subject-section");
const messageSection = document.querySelector(".message-section");
const button = document.querySelector(".button");

function validateForm(event) {
    event.preventDefault();

    var formIsValid = true;

    if (checkLength(fullName.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
        formIsValid = false;
    }

    if (checkLength(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
        formIsValid = false;
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        formIsValid = false;
    }

    if (formIsValid === true) {
        nameSection.style.display = "none";
        emailSection.style.display = "none";
        subjectSection.style.display = "none";
        messageSection.style.display = "none";
        button.style.display = "none";
        validationMessage.style.display = "block";
    } 

}


form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}