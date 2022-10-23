const from = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const password2 = document.querySelector("#password2")
//-----------------------------------------------------------//

from.addEventListener("submit", (e) => {
    e.preventDefault();


    checkInputs();
})


function checkInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === "") {
        setError(username, "Username can't be blank")
    } else {
        setSuccess(username)
    }

    if (emailValue === "") {
        setError(email, "Email can't be blank")
    } else if (!isEmail(emailValue)) {
        setError(email, "Email is not valid")
    } else {
        setSuccess(email)
    }

    if (passwordValue === "") {
        setError(password, "Password cann't be blank")
    } else {
        setSuccess(password)
    }


    if (password2Value === "") {
        setError(password2, "Password can't be blank")
    } else if (passwordValue !== password2Value) {
        setError(password2, "Password does not match")
    } else {
        setSuccess(password2)
    }
}

//USERNAME
function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    formControl.className = "form-control error"
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}




//EMAIL
function isEmail(email) {
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}
