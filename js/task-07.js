const rangeInput = document.querySelector('#font-size-control');

const textInput = document.querySelector('#text');

const onInput = () => {
  textInput.style.fontSize = `${rangeInput.value}px`;
}


rangeInput.addEventListener("input", onInput);
