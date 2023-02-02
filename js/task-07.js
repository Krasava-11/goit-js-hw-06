const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

const onChangeSizeText = (event) => {
  refs.span.style.fontSize = event.currentTarget.value + "px";
};

refs.input.addEventListener("input", onChangeSizeText);
