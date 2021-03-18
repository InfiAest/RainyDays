const form = document.querySelector("#checkout-form");
const completeButton = document.querySelector("#complete-order-button")
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const telephone = document.querySelector("#telephone");
const telephoneError = document.querySelector("#telephoneError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const streetName = document.querySelector("#streetName");
const streetNameError = document.querySelector("#streetNameError");
const streetNumber = document.querySelector("#streetNumber");
const streetNumberError = document.querySelector("#streetNumberError");
const cityName = document.querySelector("#cityName");
const cityNameError = document.querySelector("#cityNameError");
const country = document.querySelector("#select-country");
const countryError = document.querySelector("#selectCountryError");
const zipcode = document.querySelector("#zipcode");
const zipcodeError = document.querySelector("#zipcodeError");
const cardName = document.querySelector("#cardName");
const cardNameError = document.querySelector("#cardNameError");
const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");
const expMonth = document.querySelector("#month");
const expMonthError = document.querySelector("#expMonthError");
const expYear = document.querySelector("#year");
const expYearError = document.querySelector("#expYearError");

const cvcNumber = document.querySelector("#cvcNumber");
const cvcNumberError = document.querySelector("#cvcNumberError");
const newStreetName = document.querySelector("#newStreetName");
const newStreetNameError = document.querySelector("#newStreetNameError");
const newStreetNumber = document.querySelector("#newStreetNumber");
const newStreetNumberError = document.querySelector("#newStreetNumberError");
const newCityName = document.querySelector("#newCityName");
const newCityNameError = document.querySelector("#newCityNameError");
const newCountry = document.querySelector("#new-country");
const newCountryError = document.querySelector("#newCountryError");
const newZipcode = document.querySelector("#newZipcode");
const newZipcodeError = document.querySelector("#newZipcodeError");
const formValidation = document.querySelector(".form-validation");
const newAddressForm = document.querySelector(".new-address-form");
var validateNewAddress = true;

function validateForm(event) {
    event.preventDefault();

    var formIsValid = true;

    if (checkLength(firstName.value, 1) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
        formIsValid = false;
    }

    if (checkLength(lastName.value, 1) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
        formIsValid = false;
    }

    if (checkLength(telephone.value, 7) === true) {
        telephoneError.style.display = "none";
    } else {
        telephoneError.style.display = "block";
        formIsValid = false;
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        formIsValid = false;
    }

    if (checkLength(streetName.value, 6) === true) {
        streetNameError.style.display = "none";
    } else {
        streetNameError.style.display = "block";
        formIsValid = false;
    }

    if (checkLength(streetNumber.value, 0) === true) {
        streetNumberError.style.display = "none";
    } else {
        streetNumberError.style.display = "block";
        formIsValid = false;
    }

    if (checkLength(cityName.value, 3) === true) {
        cityNameError.style.display = "none";
    } else {
        cityNameError.style.display = "block";
        formIsValid = false;
    }

    if (((country).value === 'Norway') || ((country).value === 'United Kingdom') || ((country).value === 'USA')) {
        countryError.style.display = "none";
    } else {
        countryError.style.display = "block";
        formIsValid = false
    }

    if (checkLength(zipcode.value, 3) === true) {
        zipcodeError.style.display = "none";
    } else {
        zipcodeError.style.display = "block";
        formIsValid = false;
    }

    if (checkLength(cardName.value, 8) === true) {
        cardNameError.style.display = "none";
    } else {
        cardNameError.style.display = "block";
        formIsValid = false;
    }

    if (checkLength(cardNumber.value, 11) === true) {
        cardNumberError.style.display = "none";
    } else {
        cardNumberError.style.display = "block";
        formIsValid = false;
    }

    if (((expMonth).value === 'January') || ((expMonth).value === 'February') || ((expMonth).value === 'March') || ((expMonth).value === 'April') || ((expMonth).value === 'May') || ((expMonth).value === 'June') || ((expMonth).value === 'July') || ((expMonth).value === 'August') || ((expMonth).value === 'September') || ((expMonth).value === 'October') || ((expMonth).value === 'November') || ((expMonth).value === 'December')) {
        expMonthError.style.display = "none";
    } else {
        expMonthError.style.display = "block";
        formIsValid = false
    }

    if (((expYear).value === '2021') || ((expYear).value === '2022') || ((expYear).value === '2023') || ((expYear).value === '2024')) {
        expYearError.style.display = "none";
    } else {
        expYearError.style.display = "block";
        formIsValid = false
    }

    if (checkLength(cvcNumber.value, 2) === true) {
        cvcNumberError.style.display = "none";
    } else {
        cvcNumberError.style.display = "block";
        formIsValid = false;
    }

if (validateNewAddress === true) { 
    if (checkLength(newStreetName.value, 6) === true) {
        newStreetNameError.style.display = "none";
    } else {
        newStreetNameError.style.display = "block";
        formIsValid = false;
    }

    if (checkLength(newStreetNumber.value, 0) === true) {
        newStreetNumberError.style.display = "none";
    } else {
        newStreetNumberError.style.display = "block";
        formIsValid = false;
    }

    if (checkLength(newCityName.value, 3) === true) {
        newCityNameError.style.display = "none";
    } else {
        newCityNameError.style.display = "block";
        formIsValid = false;
    }

    if (((newCountry).value === 'Norway') || ((newCountry).value === 'United Kingdom') || ((newCountry).value === 'USA')) {
        newCountryError.style.display = "none";
    } else {
        newCountryError.style.display = "block";
        formIsValid = false
    }

    if (checkLength(newZipcode.value, 3) === true) {
        newZipcodeError.style.display = "none";
    } else {
        newZipcodeError.style.display = "block";
        formIsValid = false;
    }
}

    if (formIsValid === true) {
        formValidation.style.display = "block";
        completeButton.innerHTML = "Complete Order";
        completeButton.onclick = function() {
            location.href = "checkout-sucess.html";
        }
    }
}

function newAddress(){
    newAddressForm.style.display = "block";
    validateNewAddress = true;
}
function sameAddress(){
    newAddressForm.style.display = "none";
    validateNewAddress = false;
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