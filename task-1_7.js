const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', event => {
  const valueInput = event.target.value;
  spanRef.style.fontSize = `${valueInput}px`;
});
