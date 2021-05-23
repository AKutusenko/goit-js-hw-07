const input = document.querySelector("#validation-input");
input.addEventListener("change", () => {
  if (input.value.length.toString() === input.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
