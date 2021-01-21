const buttonMinusRef = document.querySelector(
  'button[data-action="decrement"]',
);
const buttonPlusRef = document.querySelector('button[data-action="increment"]');
const countSpanRef = document.querySelector('#value');

let counterValue = 0;

const decrement = () => {
  countSpanRef.textContent = counterValue -= 1;
};
const increment = () => {
  countSpanRef.textContent = counterValue += 1;
};
buttonPlusRef.addEventListener('click', increment);

buttonMinusRef.addEventListener('click', decrement);
