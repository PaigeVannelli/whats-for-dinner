// ~~~~~~~~~~~~~~~~~~~ QUERY SELECTORS ~~~~~~~~~~~~~~~~~~~~~~~//

var letsCookButton = document.querySelector(".lets-cook-button");
var clearButton = document.querySelector(".clear-button")

//~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~//

letsCookButton.addEventListener("click", checkForm);
clearButton.addEventListener("click", clearFood);

//~~~~~~~~~~~~~~~~~~~~ To Do ~~~~~~~~~~~~~~~~~~~~~//

//If I click on one - make sure all other thre are false

//for checkForm function
//determine if something is checked and return name
//maybe iterate through and retunr
//query selector all - if check give me the id
// arry of side main dessert iterate through and pass them in and see if they are checked


//take out the global event listener

//Click clear button
//Create a global event listener and qs for the clear button
//We need to create the function target the clear button and have the action be
//1. only be able to clear if food is present? This might be the trick
//I will then use my hide function to show the right stuff

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
  displayFood();
  document.querySelector("form").reset();
}

function returnFoodItemHandler(side, main, dessert, entireMeal) {
  if (side) {
    returnFoodItem(sides);
  } else if (main) {
    returnFoodItem(mains);
  } else if (dessert) {
    returnFoodItem(desserts);
  } else if (entireMeal) {
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
