const inputName = document.getElementById("name-input") 
const spanName = document.getElementById("name-output")

inputName.addEventListener('input', (event) => {
    const trimmedValue = event.currentTarget.value.trim();
    spanName.textContent = trimmedValue || 'Anonymous';
  });