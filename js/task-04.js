const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const count = document.querySelector('#value')


let valueCount = Number(count.textContent);

const decCounter = () => {
    valueCount -= 1;
    count.textContent = valueCount;
};

const incCounter = () => {
    valueCount += 1;
    count.textContent = valueCount;
};


incrementBtn.addEventListener('click', incCounter);
decrementBtn.addEventListener('click', decCounter);

