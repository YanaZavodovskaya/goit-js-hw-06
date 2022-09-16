const listEl = document.querySelector('ul#categories');
console.log(`Number of categories: ${listEl.children.length}`);

const categoriesItems = document.querySelectorAll('.item'); 

categoriesItems.forEach(item => console.log(`Category: ${item.firstElementChild.textContent} 
Elements: ${item.querySelector('ul').children.length}`));