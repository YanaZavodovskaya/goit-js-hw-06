const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul#ingredients');

const elements = ingredients.map(ingredient =>
    {
  const ingredientEl = document.createElement('li');
  
    ingredientEl.classList.add('item');
    ingredientEl.innerHTML = ingredient;
  return (ingredientEl);
    }
)

ingredientsEl.append(...elements);