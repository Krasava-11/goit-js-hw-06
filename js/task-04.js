const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  span: document.querySelector("#value"),
};
console.log(refs);

let counterValue = 0;

const decrementClick = () => {
  counterValue -= 1;
  refs.span.textContent = counterValue;
};

const incrementClick = () => {
  counterValue += 1;
  refs.span.textContent = counterValue;
};

refs.decrementBtn.addEventListener("click", decrementClick);
refs.incrementBtn.addEventListener("click", incrementClick);
