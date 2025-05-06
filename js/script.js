// Screen One Start
let screenOne = document.querySelector(".screenOne")
let headingScreenOne = document.querySelector(".headingScreenOne")
let playerOneName = document.querySelector(".playerOneName")
let startGameBtn = document.querySelector(".startGameBtn")
let screenOneError = document.querySelector(".screenOneError")


startGameBtn.addEventListener("click", function(){
    if (playerOneName.value == ""){
        screenOneError.style.display = "block"
    }
    else{
        headingScreenOne.innerHTML = "Player -1"
        screenOne.style.display = "none"
        screenTwo.style.display = "block"
    }
    
})
//Screen One End

// Screen Two Start
let screenTwo = document.querySelector(".screenTwo")
let headingScreenTwo = document.querySelector(".headingScreenTwo")
let playerTwoValue = document.querySelector(".playerTwoValue")
let letsPlayBtn = document.querySelector(".letsPlayBtn")
let screenTwoError = document.querySelector(".screenTwoError")

letsPlayBtn.addEventListener("click", function(){
    if (playerTwoValue.value == ""){
        screenTwoError.style.display = "block"
    }
    else{
        headingScreenTwo.innerHTML = "Player -2 Name"    
        screenTwo.style.display="none"
        screenThree.style.display = "block"
        
    }

})

//Screen Two End

// Screen Three Start
let screenThree = document.querySelector(".screenThree")
let headingScreenThree = document.querySelector(".headingScreenThree")
let playerThreeName = document.querySelector(".playerThreeName")
let screenThreeStartGameBtn = document.querySelector(".screenThreeStartGameBtn")
let screenThreeError = document.querySelector(".screenThreeError")

screenThreeStartGameBtn.addEventListener("click", function(){
    if (playerThreeName.value == ""){
        screenThreeError.style.display = "block"
    }
    else{
        headingScreenTwo.innerHTML = "Player-2"    
        screenThree.style.display= "none"
        screenFour.style.display = "block"
    }

})
// Screen Three End
// Screen Four Start
let screenFour = document.querySelector(".screenFour")
let headingScreenFour = document.querySelector(".headingScreenFour")
let playerTwoNumber = document.querySelector(".playerTwoNumber")
let guessBtn = document.querySelector(".guessBtn")

// Screen Four End

guessBtn.addEventListener("click", function(){
    if (playerThreeName.value = playerTwoNumber.value){
        console.log("Player Two Win");
        
    }
    else{
        console.log("Player One Win");
        
    }
})

















// let mainScreen = document.querySelector(".mainScreen");
// let nameInput = document.querySelector(".nameInput");
// let playBtn = document.querySelector(".playBtn");
// let nameError = document.querySelector(".nameError");
// let heading = document.querySelector(".heading");
// // =============
// // Player One Screen

// let playerOneScreen = document.querySelector(".playerOneScreen");
// let playerOneInput = document.querySelector(".playerOneInput");
// let playerPlayBtn = document.querySelector(".playerPlayBtn");
// let playerOneError = document.querySelector(".playerOneError");

// playBtn.addEventListener("click", function () {
//   if (nameInput.value == "") {
//     nameError.style.display = "block";
//   } else {
//     heading.innerHTML = "Player One";
//     playerOneScreen.style.display = "block";
//     mainScreen.style.display = "none";
//   }
// });

// // ====================
// playerPlayBtn.addEventListener("click", function () {
//   // if (playerOneInput.value == "") {
//   //   playerOneError.style.display = "block";
//   // }
//   if (playerOneInput.value < 1 || playerOneInput.value > 10) {
//     console.log("Error");
//   }
//    else {
//     if (playerOneInput.value - 15) {
//       console.log("Ami Number and 3rd screen a jao");
//     }
//      else {
//       console.log("Ami Number Na");
//     }
//   }
// });

// // ======================