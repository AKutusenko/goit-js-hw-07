const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsEl = document.querySelector("#ingredients");

const makeIngedientsList = (items) => {
  return items.map((item) => {
    const ingredient = document.createElement("li");
    ingredient.textContent = item;

    return ingredient;
  });
};

const elements = makeIngedientsList(ingredients);
ingredientsEl.append(...elements);
