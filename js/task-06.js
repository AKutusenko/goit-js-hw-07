const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
  if (input.value.length.toString() === input.dataset.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else if (input.value.length === 0) {
    input.classList.remove("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
