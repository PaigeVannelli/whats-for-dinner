//~~~~~~~~~~~~~~~~~~~ EVENT LISTENERS ~~~~~~~~~~~~~~~~~~~~~~~//

// window.addEventListener("click", chooseMeal)






//~~~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

// var test = document.getElementById("side").value
// console.log(test)
// function chooseMeal(event) {
//   if(event.target.className === "lets-cook-button" && document.getElementById("side").value === "side") {
//     returnSide(event)
//   }
// }
//
// function returnSide(event) {
//   event.preventDefault();
//   console.log("it worked")
// }
//I want to make sure the button is being push AND we are getting the right value out of our form before it runs
//How am I targeting each element of my form - with the class name NOT ID
//So we want to use a query selector on the class name and look at the .value
var formArray = document.querySelectorAll(".form-style")
 for (var i = 0; i < formArray.length; i++) {
   console.log(formArray[i].innerText)
 }
//We need to iterate through the nodes list like an array
//
