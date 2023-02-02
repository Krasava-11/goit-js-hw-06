const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const makePrivateElementIngredients = ingredients.map((ingredient) => {
  const componentHtml = document.createElement("li");
  componentHtml.textContent = ingredient;
  componentHtml.classList.add("item");

  return componentHtml;
});

listEl.append(...makePrivateElementIngredients);
