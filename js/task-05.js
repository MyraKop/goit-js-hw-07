function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyElement = document.querySelector("body")
const spanElement = document.querySelector(".color")
const buttonElement = document.querySelector(".change-color")

const changeColor = (event) => {
  const randomColor = getRandomHexColor();

  bodyElement.style.backgroundColor = randomColor;
  spanElement.textContent = randomColor;
}

buttonElement.addEventListener("click", changeColor)