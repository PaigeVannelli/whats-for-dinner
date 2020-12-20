// ~~~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~~~~~~~//

var letsCookButton = document.querySelector(".lets-cook-button");
var clearButton = document.querySelector(".clear-button");
var addRecipeButton = document.querySelector(".add-recipe-button");
var addNewButton = document.querySelector(".add-new-button");
var recipeDisplay = document.querySelector(".recipe-display");

//~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~~//

letsCookButton.addEventListener("click", checkForm);
clearButton.addEventListener("click", clearFood);
addRecipeButton.addEventListener("click", showFooter);
addNewButton.addEventListener("click", addNewFoodItem);

//~~~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

function checkForm() {
  var side = isChecked("side");
  var main = isChecked("main");
  var dessert = isChecked("dessert");
  var entireMeal = isChecked("entire-meal");
  clickCookButton(side, main, dessert, entireMeal);
}

function isChecked(element) {
  return document.getElementById(element).checked;
}

function clickCookButton(side, main, dessert, entireMeal) {
  event.preventDefault();
  checkFoodItem(side, main, dessert, entireMeal);
  document.querySelector("form").reset();
}

function checkFoodItem(side, main, dessert, entireMeal) {
  if (side) {
    returnFoodItem(sides);
  } else if (main) {
    returnFoodItem(mains);
  } else if (dessert) {
    returnFoodItem(desserts);
  } else if (entireMeal) {
    returnEntireMeal();
  } else {
    showErrorMessage(".lets-cook-error");
  }
}

function returnFoodItem(array) {
  recipeDisplay.innerText = `${array[getRandomIndex(array)]}!`;
  recipeDisplay.classList.remove("small-font-size");
  displayFood();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayFood() {
  var cookpot = document.querySelector(".cookpot");
  var recipePrompt = document.querySelector(".recipe-prompt");
  var clearButton = document.querySelector(".clear-button");
  showElement(cookpot);
  showElement(recipePrompt, true);
  showElement(recipeDisplay, true);
  showElement(clearButton, true);
  removeErrorMessage(".lets-cook-error");
}

function showElement(element, show) {
  if(show) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}

function returnEntireMeal() {
  recipeDisplay.innerText = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`;
  recipeDisplay.classList.add("small-font-size")
  displayFood();
}

function clearFood() {
  var cookpot = document.querySelector(".cookpot");
  var recipePrompt = document.querySelector(".recipe-prompt");
  var clearButton = document.querySelector(".clear-button");
  showElement(cookpot, true);
  showElement(recipePrompt);
  showElement(recipeDisplay);
  showElement(clearButton);
}

function showFooter() {
  showElement(document.querySelector(".footer"), true);
}

function addNewFoodItem() {
  var recipeType = document.querySelector("#recipe-type").value;
  var recipeName = document.querySelector("#recipe-name").value;
  if (recipeType === "Side" || recipeType === "Main Dish" || recipeType === "Dessert") {
    addFood(recipeType, recipeName);
    recipeDisplay.innerText = `${recipeName}!`;
    recipeDisplay.classList.remove("small-font-size");
    displayFood();
    removeErrorMessage(".error-message");
  } else {
    clearFood();
    showErrorMessage(".error-message");
  }
}

function addFood(recipeType, recipeName) {
  if (recipeType === "Side") {
    sides.push(recipeName);
  } else if (recipeType === "Main Dish") {
    mains.push(recipeName);
  } else if (recipeType === "Dessert") {
    desserts.push(recipeName);
  }
}

function removeErrorMessage(errorMessage) {
  showElement(document.querySelector(errorMessage));
}

function showErrorMessage(errorMessage) {
  showElement(document.querySelector(errorMessage), true);
}
