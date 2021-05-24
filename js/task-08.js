const refs = {
  number: document.querySelector("input"),
  render: document.querySelector('[data-action="render"]'),
  destroy: document.querySelector('[data-action="destroy"]'),
  container: document.querySelector("#boxes"),
};

refs.number.addEventListener("input", onInputChange);

refs.render.addEventListener("click", createBoxes);

refs.destroy.addEventListener("click", destroyBoxes);

let amount = 0;

function onInputChange(e) {
  amount = e.currentTarget.value;
}

function createBoxes() {
  for (let i = 0; i < amount; i += 1) {
    refs.container.style.padding = "25px";
    refs.container.style.display = "flex";
    refs.container.style.alignItems = "center";
    refs.container.style.flexWrap = "wrap";
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor =
      "#" + (Math.random().toString(16) + "000000").substring(2, 8);
    div.style.marginRight = "10px";
    div.style.marginBottom = "10px";
    refs.container.appendChild(div);
  }
}

function destroyBoxes() {
  refs.container.innerHTML = "";
}
