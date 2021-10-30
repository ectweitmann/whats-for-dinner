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
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return radioButtons[i].value;
    }
  }
}

function getRecipeList(radioButtonValue) {
  var recipeList;
  switch (radioButtonValue) {
    case 'side':
      return recipeList = sides;
      break;
    case 'mainDish':
      return recipeList = mainDishes;
      break;
    case 'dessert':
      return recipeList = desserts;
      break;
    case 'entireMeal':
      return recipeList = 'entireMeal';
      break;
  }
}

function displayRecipe() {
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
