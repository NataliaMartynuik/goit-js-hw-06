function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtn = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');
const bodyColorRef = document.querySelector('.color');

function changeBodyColor() {
  let colorValue = getRandomHexColor();
  bodyRef.style.backgroundColor = colorValue;
  bodyColorRef.textContent = colorValue;
}

changeBtn.addEventListener('click', changeBodyColor);