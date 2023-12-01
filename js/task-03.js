const inputName = document.getElementById("name-input") 
const spanName = document.getElementById("name-output")

inputName.addEventListener("input", (event) => {
    spanName.textContent = event.currentTarget.value
    if (inputName.value === "") {
       spanName.textContent = "Anonymous" 
    }
   })