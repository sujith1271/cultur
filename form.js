let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let messageEl = document.getElementById("message");
let messageErrEl = document.getElementById("messageErr");

let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let myFormEl = document.getElementById("myForm");
let formErrorMessageEl = document.getElementById("formErrorMessage");
let formSuccessMessageEl = document.getElementById("formSuccessMessage");

let formData = {
    name: "",
    email: "",
    gender: "Male",
    message: "",
};

function validateField(fieldEl, errorEl, errorMessage) {
    if (fieldEl.value === "") {
        errorEl.textContent = errorMessage;
        return false;
    } else {
        errorEl.textContent = "";
        return true;
    }
}

nameEl.addEventListener("input", function(event) {
    formData.name = event.target.value;
    validateField(nameEl, nameErrMsgEl, "Please Enter Your Name");
});

emailEl.addEventListener("input", function(event) {
    formData.email = event.target.value;
    validateField(emailEl, emailErrMsgEl, "Please Enter Your Email");
});

messageEl.addEventListener("input", function(event) {
    formData.message = event.target.value;
    validateField(messageEl, messageErrEl, "Please Enter The Message");
});


genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});


myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    formErrorMessageEl.textContent = "";
    formSuccessMessageEl.textContent = "";

    
    let isNameValid = validateField(nameEl, nameErrMsgEl, "Please Enter Your Name");
    let isEmailValid = validateField(emailEl, emailErrMsgEl, "Please Enter Your Email");
    let isMessageValid = validateField(messageEl, messageErrEl, "Please Enter The Message");

    if (isNameValid && isEmailValid && isMessageValid) {
        formSuccessMessageEl.textContent = "Form successfully submitted!";
        formErrorMessageEl.textContent = "";

        
        nameEl.value = "";
        emailEl.value = "";
        messageEl.value = "";
        formData.name = "";
        formData.email = "";
        formData.message = "";
        formData.gender = "Male";
    } else {
        formErrorMessageEl.textContent = "Please fill in all required fields.";
        formSuccessMessageEl.textContent = "";
    }
});