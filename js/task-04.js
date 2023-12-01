const formElement = document.querySelector(".login-form")

const submitHandler = (event) => {
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;


    if (email.value === "" || password.value === "") {
     alert("All form fields must be filled in!");
    } else {
        const data = {
            email: email.valid,
            password: password.value
        }
        console.log(data);
    }

  formElement.reset();
}

formElement.addEventListener("submit", submitHandler)
