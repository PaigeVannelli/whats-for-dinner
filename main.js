//~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~//

window.addEventListener("click", checkForm);

//~~~~~~~~~~~~~~~~~~~~ To Dd ~~~~~~~~~~~~~~~~~~~~~//

//If I click on one - make sure all other thre are false

//for checkForm function
//determine if something is checked and return name
//maybe iterate through and retunr
//query selector all - if check give me the id
// arry of side main dessert iterate through and pass them in and see if they are checked

//Add hidden and remove hidden functions
//

//~~~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


function checkForm() {
  var side = document.getElementById("side").checked;
  var main = document.getElementById("main").checked;
  var dessert = document.getElementById("dessert").checked;
  var entireMeal = document.getElementById("entire-meal").checked;
  clickReturn(side, main, dessert, entireMeal);
}

function clickReturn(side, main, dessert, entireMeal) {
  var buttonClick = event.target.className;
  if (buttonClick === "lets-cook-button") {
    event.preventDefault(buttonClick);
    returnFoodItemHandler(side, main, dessert, entireMeal, buttonClick);
    displayFood();
  }
}

function returnFoodItemHandler(side, main, dessert, entireMeal, buttonClick) {
  if (side && buttonClick === "lets-cook-button") {
    returnFoodItem(sides);
  } else if (main && buttonClick === "lets-cook-button") {
    returnFoodItem(mains);
  } else if (dessert && buttonClick === "lets-cook-button") {
    returnFoodItem(desserts);
  } else if (entireMeal && buttonClick === "lets-cook-button") {
  }
}

function returnFoodItem(array) {
  document.querySelector(".random-recipe").innerText = array[getRandomIndex(array)];
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayFood() {
  hidePot();
  showRecipe();
}

function hidePot() {
  var cookpot = document.querySelector(".cookpot");
  cookpot.classList.add("hidden");
}

function showRecipe() {
  var recipeDisplay = document.querySelector(".recipe-display");
  var randomRecipeDisplay = document.querySelector(".random-recipe");
  recipeDisplay.classList.remove("hidden");
  randomRecipeDisplay.classList.remove("hidden");
}
