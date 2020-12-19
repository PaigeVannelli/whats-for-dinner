// ~~~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~~~~~~~//

var letsCookButton = document.querySelector(".lets-cook-button");
var clearButton = document.querySelector(".clear-button");
var addRecipeButton = document.querySelector(".add-recipe-button");
var addNewButton = document.querySelector(".add-new-button");

//~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~//

letsCookButton.addEventListener("click", checkForm);
clearButton.addEventListener("click", clearFood);
addRecipeButton.addEventListener("click", showFooter);
addNewButton.addEventListener("click", addNewFoodItem);


//~~~~~~~~~~~~~~~~~~~~ To Do ~~~~~~~~~~~~~~~~~~~~~//

//Refactor css
//

//~~~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

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
  returnFoodItemHandler(side, main, dessert, entireMeal);
  document.querySelector("form").reset();
}

function returnFoodItemHandler(side, main, dessert, entireMeal) {
  if (side) {
    returnFoodItem(sides);
  } else if (main) {
    returnFoodItem(mains);
  } else if (dessert) {
    returnFoodItem(desserts);
  }
}

function displayFood() {
  var cookpot = document.querySelector(".cookpot");
  var recipeDisplay = document.querySelector(".recipe-display");
  var randomRecipeDisplay = document.querySelector(".random-recipe");
  var clearButton = document.querySelector(".clear-button");
  showElement(cookpot);
  showElement(recipeDisplay, true);
  showElement(randomRecipeDisplay, true);
  showElement(clearButton, true);
}

function returnFoodItem(array) {
  document.querySelector(".random-recipe").innerText = `${array[getRandomIndex(array)]}!`;
  displayFood();
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showElement(element, show) {
  if(show) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}

function clearFood(cookpot, recipeDisplay, randomRecipeDisplay, clearButton) {
  var cookpot = document.querySelector(".cookpot");
  var recipeDisplay = document.querySelector(".recipe-display");
  var randomRecipeDisplay = document.querySelector(".random-recipe");
  var clearButton = document.querySelector(".clear-button");
  showElement(cookpot, true);
  showElement(recipeDisplay);
  showElement(randomRecipeDisplay);
  showElement(clearButton);
}

function showFooter() {
  showElement(document.querySelector(".footer"), true);
}

function addNewFoodItem() {
  var recipeType = document.querySelector("#recipe-type").value;
  var recipeName = document.querySelector("#recipe-name").value;
  if (recipeType === "Side") {
    sides.push(recipeName);
    displayFood();
  } else if (recipeType === "Main") {
    mains.push(recipeName);
    displayFood();
  } else if (recipeType === "Dessert") {
    desserts.push(recipeName);
    displayFood();
  } else {
    showErrorMessage();
    clearFood();
  }
  document.querySelector(".random-recipe").innerText = `${recipeName}!`;
}

function showErrorMessage() {
  showElement(document.querySelector(".error-message"), true);
}
