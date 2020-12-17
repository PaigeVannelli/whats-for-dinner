//~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~//

window.addEventListener("click", checkForm);

//~~~~~~~~~~~~~~~~~~~~ To Do ~~~~~~~~~~~~~~~~~~~~~//

//If I click on one - make sure all other thre are false

//for checkForm function
//determine if something is checked and return name
//maybe iterate through and retunr
//query selector all - if check give me the id
// arry of side main dessert iterate through and pass them in and see if they are checked

//~~~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


function checkForm() {
  var side = getElement("side");
  var main = getElement("main");
  var dessert = getElement("dessert");
  var entireMeal = getElement("entire-meal");
  clickReturn(side, main, dessert, entireMeal);
}

function getElement(element) {
  return document.getElementById(element).checked;
}

function clickReturn(side, main, dessert, entireMeal) {
  var buttonClick = event.target.className;
  if (buttonClick === "lets-cook-button") {
    event.preventDefault(buttonClick);
    returnFoodItemHandler(side, main, dessert, entireMeal, buttonClick);
    displayFood();
    document.querySelector("form").reset();
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
  document.querySelector(".random-recipe").innerText = `${array[getRandomIndex(array)]}!`;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayFood() {
  var cookpot = document.querySelector(".cookpot");
  var recipeDisplay = document.querySelector(".recipe-display");
  var randomRecipeDisplay = document.querySelector(".random-recipe");
  var clearButton = document.querySelector(".clear-button");
  hidden(cookpot);
  hidden(recipeDisplay, true);
  hidden(randomRecipeDisplay, true);
  hidden(clearButton, true);
}

function hidden(element, show) {
  if(show) {
    element.classList.remove("hidden");
  } else {
    element.classList.add("hidden");
  }
}
