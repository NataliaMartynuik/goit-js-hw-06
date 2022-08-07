function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputRef = document.querySelector('input');
const boxesRef = document.querySelector("#boxes");


const createBoxes = () => {
  let amount = Number(inputRef.value);
    for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.background = getRandomHexColor();
    newBox.style.height = `${i * 10 + 30}px`;
    newBox.style.width = `${i * 10 + 30}px`;
    newBox.style.margin = '5px';
   
    boxesRef.append(newBox);
  }
}

const deleteBoxes = () => {
     boxesRef.innerHTML = '';
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', deleteBoxes);

