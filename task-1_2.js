const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingredientsListRef = document.querySelector('#ingredients');
ingredients.map(ingredient => {
  const listElement = document.createElement('li');
  listElement.textContent = ingredient;
  ingredientsList.appendChild(listElement);
});
