var divRecipeOptions = document.querySelector(".recipe-options-container");
var radioButtons = document.querySelectorAll("input");
var buttonLetsCook = document.querySelector("#lets-cook");

var showRecipeSection = document.querySelector(".show-recipe");
var cookPot = document.querySelector("img");

buttonLetsCook.addEventListener('click', displayRecipe);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getCheckedRadioButton() {
  if (radioButtons[0].checked) {
    return radioButtons[0].value;
  } else if (radioButtons[1].checked) {
    return radioButtons[1].value;
  } else if (radioButtons[2].checked) {
    return radioButtons[2].value;
  } else if (radioButtons[3].checked) {
    return radioButtons[3].value;
  }
}

function getRecipeList(radioButtonValue) {
  var recipeList;
  if (radioButtonValue === "side") {
    return recipeList = sides;
  } else if (radioButtonValue === "mainDish") {
    return recipeList = mainDishes;
  } else if (radioButtonValue === "dessert") {
    return recipeList = desserts;
  } else {
    return recipeList = "entireMeal";
  }
}

function displayRecipe(event) {
  cookPot.classList.add('hidden');
  var recipeList = getRecipeList(getCheckedRadioButton());
  if (Array.isArray(recipeList)) {
    showRecipeSection.innerHTML = " ";
    showRecipeSection.innerHTML += `
      <p><i>You should make:</i></p>
      <h1>${recipeList[getRandomIndex(recipeList)]}!</h1>`
  } else {
    showRecipeSection.innerHTML = " ";
    showRecipeSection.innerHTML += `
      <p><i>You should make:</i></p>
      <h1>${mainDishes[getRandomIndex(mainDishes)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!</h1>`
  }
}
