// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice = "";
var computerChoice = "";
var winner = "";
var randomNumber = 0;
$("shoot").click(function(){
    var userChoice = ("#input").val();
    $("#input").text($("#userChoice").val());
    var randomNumber = Math.random(); 
    if (randomNumber >= 2/3)  {
        $("computerChoice").text("Rock");
    }
    else if (randomNumber <= 2/3 && randomNumber >= 1/3) {
        $("comuterChoice").text("Paper");
    }
    else if (randomNumber <= 1/3 && randomNumber >= 0) {
        $("computerChoice").text("scissors");
    }
});
