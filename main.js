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

//If I click on one - make sure all other thre are false

//for checkForm function
//determine if something is checked and return name
//maybe iterate through and retunr
//query selector all - if check give me the id
// arry of side main dessert iterate through and pass them in and see if they are checked

//Add a recipe button
//QS and add functionality to do
//1. show bar below
//2. create form?
//3. each form input will return their value around
//4. display it on the screen
//5. push it into the array
//6. Form should only have three option and returns an error for anything else

//~~~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

function checkForm() {
  var side = isChecked("side");
  var main = isChecked("main");
  var dessert = isChecked("dessert");
  var entireMeal = isChecked("entire-meal");
  clickCookButton(side, main, dessert, entireMeal);
}

// create an object with properties and create default false and thre

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
  } else if (entireMeal) {
  } else {
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

function addRecipeHandler() {
  showFooter();
  // addNewFoodItem();
}

function showFooter() {
  var footer = document.querySelector(".footer");
  showElement(footer, true);
}

function addNewFoodItem() {
  var recipeType = document.querySelector("#recipe-type").value;
  var recipeName = document.querySelector("#recipe-name").value;
  if (recipeType === "Side") {
    sides.push(recipeName);
    displayFood()
  } else if (recipeType === "Main") {
    mains.push(recipeName);
    displayFood()
  } else if (recipeType === "Dessert") {
    desserts.push(recipeName);
    displayFood()
  } else {
    showErrorMessage();
    clearFood();
  }
  document.querySelector(".random-recipe").innerText = `${recipeName}!`;
}

function showErrorMessage() {
  var errorMessage = document.querySelector(".error-message")
  showElement(errorMessage, true);
}
