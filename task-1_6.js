const inputRef = document.querySelector('#validation-input');
console.dir(inputRef);

inputRef.addEventListener('blur', event => {
  if (event.target.value.length == inputRef.dataset.length) {
    inputRef.setAttribute('class', 'valid');
  }
  inputRef.setAttribute('class', 'invalid');
});
