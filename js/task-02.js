const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulCreator = (items) => {
  items.forEach((item) => {
    const ingredient = document.createElement("li");
    ingredient.textContent = item;
    const ingredientsEl = document.querySelector("#ingredients");
    ingredientsEl.appendChild(ingredient);
  });
};

ulCreator(ingredients);
