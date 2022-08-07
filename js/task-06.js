const textInput = document.querySelector('#validation-input');

const validLength = document.querySelector('input[data-length="6"]');

function onInputBlur(event) {
    console.log(event.currentTarget.value.length);

    if (event.currentTarget.value.length === Number(validLength.dataset.length)) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
       
    } else if (event.currentTarget.value.length === 0) {
        textInput.classList.remove('invalid');
        textInput.classList.remove('valid');
    } else
        textInput.classList.add('invalid'); 
    
}

textInput.addEventListener('blur', onInputBlur);


