// var prompt =require ("prompt-sync")()

// function guss(gussdnumber) {
//   var randomNumeber = Math.floor(Math.randomm() * 10) + 1
//   if (randomNumeber == gussdnumber) 
//   {
//     console.log("Your Gussesd Right")
//   }
//   else{
//     console.log("Your Guess is wrong , Generated Random Number is:"+ randomNumeber)
//   }
// }

// var gussdnumber=prompt()

// guss(gussdnumber)


// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>GAME</title>
// </head>
// <body>
//   <h1>Guess the Number from 1 to 5</h1>
//   <br>
//   <input type="text" id="inputbox">
//   <button id="checkbox" onclick="check()">check</button>
//   <h3 id="result">You are right/wrong</h3>
//   <h3 id="gusses">Available Guesses:3</h3>
//   <script src="./script.js"></script>
// </body>
// </html>






// // game
// var inputbox=document.getElementById("inputbox")
// var checkbox=document.getElementById("checkbox")
// var result=document.getElementById("result")
// var gusses=document.getElementById("gusses")
// var noofguess=3
// // Genarate random numbers

// var randomnumber = Math.floor(Math.random()*10)+1

// if (randomnumber>5){
//   randomnumber=randomnumber-5
// }

// //even handler function 
// function check(){

//   if(inputbox.value==randomnumber)
//   {
//     alert("You got it right, congratu")
//     result.textContent="you are right"
//   }
//   else
//   {
//     noofguess=noofguess-1
//     if(noofguess==0){
//       alert("you lost the random number is :"+randomnumber)
//     }
//     alert("you are wrong")
//     gusses.textContent="Avilable Guess:"+noofguess
//     result.textContent="you are wrong"
  
//   }
// }


// game
var inputbox=document.getElementById("inputbox")
var checkbox=document.getElementById("checkbox")
var result=document.getElementById("result")
var gusses=document.getElementById("gusses")
var noofguess=3
// Genarate random numbers

var randomnumber = Math.floor(Math.random()*10)+1

if (randomnumber>5){
  randomnumber=randomnumber-5
}

//even handler function 
function check(){

  if(inputbox.value==randomnumber)
  {
    alert("You got it right, congratu")
    result.textContent="you are right"
  }
  else
  {
    noofguess=noofguess-1
    if(noofguess==0){
      alert("you lost the random number is :"+randomnumber)
    }
    alert("you are wrong")
    gusses.textContent="Avilable Guess:"+noofguess
    result.textContent="you are wrong"
  
  }
}