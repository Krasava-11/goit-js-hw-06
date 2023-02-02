const input = document.querySelector("#validation-input");
// console.log(input);

const onInputBlur = (event) => {
  if (Number(input.dataset.length) === event.currentTarget.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", onInputBlur);
