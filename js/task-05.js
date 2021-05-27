// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его
// текущее значение в span#name - output.Если инпут пустой,
//     в спане должна отображаться строка 'незнакомец'.

const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (e) => {
  if (e.currentTarget.value.trim().length === 0) {
    spanEl.textContent = "незнакомец";
  } else {
    spanEl.textContent = e.currentTarget.value;
  }
});
