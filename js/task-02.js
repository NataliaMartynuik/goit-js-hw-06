const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul');

    const elements = ingredients.map((el) => {
      const liEl = document.createElement('li');
      liEl.classList.add('item');

      const pEl = document.createElement('p');
      pEl.textContent = el;
    
      liEl.append(pEl);

      return liEl;
     
  })
    
list.append(...elements);
  