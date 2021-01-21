const itenListRef = document.querySelectorAll('li.item');
console.log(`У списку ${itenListRef.length} категорії`);

const titleRef = document.querySelectorAll('h2');

itenListRef.forEach(el =>
  console.log(`
Категорія: ${el.querySelector('h2').textContent}
Кількість елементів: ${el.querySelectorAll('li').length} `),
);
