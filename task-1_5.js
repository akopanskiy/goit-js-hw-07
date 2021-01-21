const inputTextRef = document.querySelector('#name-input');
const spanTextRef = document.querySelector('#name-output');

const handlerInput = event => {
  spanTextRef.textContent = event.target.value || 'незнакомец';
};

const spanValue = inputTextRef.addEventListener('input', handlerInput);
