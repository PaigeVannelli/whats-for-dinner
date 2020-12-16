//~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~//

window.addEventListener("click", checkForm);

//I need to keep track of the first event and then do soemthing on the second EVENT
//I could potentially store the target.id in an object and return keys - use square bracket notation

//~~~~~~~~~~~~~~~~~~~~ GLOBAL VARIABLES ~~~~~~~~~~~~~~~~~~~~~//

// var formArray = document.querySelectorAll(".form-style")
// var formArray = document.querySelectorAll(".form-style")
// var side = formArray[0].innerText
// var main = formArray[1].innerText
// var dessert = formArray[2].innerText
// var entireMeal = formArray[3].innerText

//~~~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// var test = document.getElementById("side").value
//make accessing the values a seperate function
//create another function at the top that prevents the default
// var buttonClick = event.target.className
// if (buttonClick === "lets-cook-button") {
//   event.preventDefault();
//   console.log("prevent default")
// }



function checkForm() {

  var side = document.getElementById("side").checked
  var main = document.getElementById("main").checked
  var dessert = document.getElementById("dessert").checked
  var entireMeal = document.getElementById("entire-meal").checked
  //REFACTOR THIS ONE
  clickReturn(side, main)
}

function clickReturn(side, main) {
  var buttonClick = event.target.className
  if (buttonClick === "lets-cook-button") {
    event.preventDefault(buttonClick);
    returnSpecificMeal(side, main, buttonClick);
  }
}

function returnSpecificMeal(side, buttonClick) {
  if (side && buttonClick === "lets-cook-button") {
    console.log("return side")
  } else if (main && buttonClick === "lets-cook-button") {
    console.log("return main")
  }
}

//if you click the return button prevent default and then run your other conditionals in another function checking for that form click
//
// function checkForm(buttonClick) {
//   var formClick = event.target.id
//   console.log(formClick)
  // console.console.log(event.target.className);
  //  if (buttonClick === "lets-cook-button" && formClick === "side") {
  //   event.preventDefault();
  //   returnSide(event)
  // } else if (event.target.className === "lets-cook-button" && formClick === "main") {
  //   event.preventDefault();
  //   returnMain(event)
  // }
// }

function returnSide(event) {
  // event.preventDefault();
  console.log('return side')
  // console.log("it worked")
}

function returnMain(event) {
  // event.preventDefault();
  console.log("we got a main")
}


// console.log(formArray[1].children[0].value === "main")


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
