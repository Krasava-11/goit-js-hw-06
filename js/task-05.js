const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};
console.log(refs);

const onInputChange = (event) => {
  // console.log(event.currentTarget.value);
  if (refs.input === "") {
    refs.span = "Anonymous";
  } else {
    refs.span.innerHTML = event.currentTarget.value;
  }
};

refs.input.addEventListener("input", onInputChange);
