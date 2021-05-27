const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = document.querySelector("#ingredients");

makeIngrList(ingredients);

function makeIngrList(items) {
  const arr = [];

  items.forEach((item) => {
    const ingredient = document.createElement("li");
    ingredient.textContent = item;
    arr.push(ingredient);
  });

  ingredientsEl.append(...arr);
}
