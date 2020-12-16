//~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~//

window.addEventListener("click", checkForm);

//~~~~~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~~~~~//

//If I click on one - make sure all other thre are false

//~~~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


function checkForm() {
  //determine if something is checked and return name
  //maybe iterate through and retunr
  //query selector all - if check give me the id
  // arry of side main dessert iterate through and pass them in and see if they are checked

  var side = document.getElementById("side").checked
  var main = document.getElementById("main").checked
  var dessert = document.getElementById("dessert").checked
  var entireMeal = document.getElementById("entire-meal").checked
  clickReturn(side, main, dessert, entireMeal)
}

function clickReturn(side, main, dessert, entireMeal) {
  var buttonClick = event.target.className
  if (buttonClick === "lets-cook-button") {
    event.preventDefault(buttonClick);
    returnSpecificMeal(side, main, buttonClick);
  }
}

function returnSpecificMeal(side, main, buttonClick) {
  if (side && buttonClick === "lets-cook-button") {
    returnSide()
  } else if (main && buttonClick === "lets-cook-button") {
    console.log("return main")
  } else if (dessert && buttonClick === "lets-cook-button") {
    console.log("return dessert")
  } else if (entireMeal && buttonClick === "lets-cook-button") {
    console.log("return meal")
  }
}

function returnFoodItem(whichArrayYouWantToTarget) {
  //return random item from which array you want to target
}
