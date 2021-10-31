var loginPageView = document.querySelector('.login-view');
var mainPageView = document.querySelector('main');

var inputName = document.querySelector('.first-name');
var radioButtons = document.querySelectorAll(".radioBttns");
var buttonLetsCook = document.querySelector("#lets-cook");
var submitButton = document.querySelector('.submit');

var divRecipeContainer = document.querySelector(".select-recipe-container");
var showRecipeSection = document.querySelector(".show-recipe");
var cookPot = document.querySelector("img");
var welcomeMessage = document.querySelector(".welcome");

buttonLetsCook.addEventListener('click', displayRecipe);
inputName.addEventListener('change', validateLogin)
submitButton.addEventListener('click', changeToMainPage);

function validateLogin() {
  if (inputName.value) {
    submitButton.disabled = false;
  }
}

function generateWelcomeMessage() {
  welcomeMessage.innerText = `Let's get Cookin' ${inputName.value}!`;
}

function changeToMainPage() {
  loginPageView.classList.add('hidden');
  generateWelcomeMessage();
  mainPageView.classList.remove('hidden');
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
  welcomeMessage.classList.add('hidden');
  var recipeList = getRecipeList(getCheckedRadioButton());
  if (Array.isArray(recipeList)) {
    showRecipeSection.innerHTML = " ";
    showRecipeSection.innerHTML += `
      <p>You should make:</p>
      <h1>${recipeList[getRandomIndex(recipeList)]}!</h1>`
  } else {
    showRecipeSection.innerHTML = " ";
    showRecipeSection.innerHTML += `
      <p>You should make:</p>
      <h1>${mainDishes[getRandomIndex(mainDishes)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!</h1>`
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
