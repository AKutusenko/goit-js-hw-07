let counterValue = 0;
const increment = () => (counterValue += 1);
const decrement = () => (counterValue -= 1);

const counterEl = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener("click", () => {
  increment();
  counterEl.textContent = counterValue;
});

decrementBtn.addEventListener("click", () => {
  decrement();
  counterEl.textContent = counterValue;
});
