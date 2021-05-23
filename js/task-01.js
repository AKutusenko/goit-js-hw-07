const items = document.querySelectorAll(".item");

const itemsCounter = (items) => {
  let counter = 0;
  items.forEach((item) => (counter += 1));
  console.log(`В списке ${counter} категории`);
};

const itemsChildrenCounter = (items) => {
  items.forEach((item) => {
    console.log(`Категория: ${item.firstElementChild.textContent}`);
    const childrenItems = item.querySelectorAll("li");
    let counter = 0;
    childrenItems.forEach((item) => (counter += 1));
    console.log(`Количество элементов: ${counter}`);
  });
};

itemsCounter(items);
itemsChildrenCounter(items);
