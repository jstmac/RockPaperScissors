var title = document.getElementById("title");
title.addEventListener("click", function() {
    debugger
});

var options = ["Rock", "Paper", "Scissors"];
var userChoice=undefined; 
var compChoice=undefined;



var rock = document.getElementById("Rock");

rock.addEventListener("click", function() {
    var userChoice="Rock";
    document.getElementById("userChoice").innerHTML = userChoice;
    document.getElementById("computerChoice").innerHTML = compChoice;
    winner(userChoice)
})

var paper = document.getElementById("Paper")

paper.addEventListener("click", function() {
    var userChoice="Paper";
    document.getElementById("userChoice").innerHTML = userChoice;
    document.getElementById("computerChoice").innerHTML = compChoice;
    winner(userChoice)
})

var scissors = document.getElementById("Scissors")
scissors.addEventListener("click", function() {
    var userChoice="Scissors";
    document.getElementById("userChoice").innerHTML = userChoice;
    document.getElementById("computerChoice").innerHTML = compChoice;
    winner(userChoice)
})

function winner(userChoice) {
    var compChoice=options[Math.floor(Math.random()*options.length)];
    if ((userChoice=== "Rock" && compChoice==="Scissors") || 
    (userChoice==="Paper" && compChoice==="Rock") || 
    (userChoice==="Scissors" && compChoice==="Paper")) {
    //  return "YOU WIN!!!!"
    console.log("Win")
    } else if (userChoice=== compChoice) {
        console.log("Tie")
        // return "It's a TIE!!!"
     } else {
          console.log("lose")
        //  return "YOU LOSE!!!!"
     } 
}



// var choices = document.getElementsByClassNane("choice");
// console.log(choices);
// choices.( function(choice) {
//     choice.addEventListener("click", functional(){

//     }
// })

//get the cop choice
//display choices
//figure out the winner

