const inputRef = document.querySelector('#validation-input');
console.dir(inputRef);

inputRef.addEventListener('blur', event => {
  if (event.target.value.length == inputRef.dataset.length) {
    return inputRef.setAttribute('class', 'valid');
  }
  return inputRef.setAttribute('class', 'invalid');
});
