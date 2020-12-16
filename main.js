//~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~//

window.addEventListener("click", chooseMeal)


//~~~~~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~~~~~//

// var formArray = document.querySelectorAll(".form-style")
var formArray = document.querySelectorAll(".form-style")
var side = formArray[0].innerText
var main = formArray[1].innerText
var dessert = formArray[2].innerText
var entireMeal = formArray[3].innerText

//~~~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// var test = document.getElementById("side").value

function chooseMeal(event) {
  if(event.target.className === "lets-cook-button" && formArray[0].children[0].value === "side") {
    returnSide(event)
  } else if (formArray[1].children[0].value === "main") {
    returnMain(event)
  }
}

function returnSide(event) {
  event.preventDefault();
  console.log("it worked")
}

function returnMain(event) {
  event.preventDefault();
  console.log("we got a main")
}
// event.target.className === "lets-cook-button" &&
// console.log(formArray[1].children[0].value)


//I want to make sure the button is being push AND we are getting the right value out of our form before it runs
//How am I targeting each element of my form - with the class name NOT ID
//So we want to use a query selector on the class name and look at the .value
// var formArray = document.querySelectorAll(".form-style")
// var side = formArray[0].innerText
// var main = formArray[1].innerText
// var dessert = formArray[2].innerText
// var entireMeal = formArray[3].innerText

// && formArray[0].innerText === " side"

 // for (var i = 0; i < formArray.length; i++) {
 //   var side = formArray[0].innerText
 //   console.log(side)
 // }
