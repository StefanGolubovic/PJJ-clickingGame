var totalScore = 0;
var timer;
var seconds=59;
var timerStarted = false;
function clickedFunc(clicked_id) {

    if(!timerStarted) {
        timer = window.setInterval(function() { 
          myFunction();
        }, 1000);
    }
    timerStarted = true;
    var numClicked = clicked_id;
    totalScore += 1;
    var color = document.getElementById(clicked_id).style.backgroundColor;
    if (color === "lightslategray") {
        document.getElementById(clicked_id).style.backgroundColor = "white";
       printIt();
    }
    else {
        window.alert("Oops...\nTry again");
        location.reload();
        
    }
    document.getElementById("scoreHeader").innerHTML = "Score: " + totalScore;
}

function myFunction() {
    if(seconds < 60) {
      document.getElementById("timerHeader").innerHTML = seconds + " ";
    }
    if (seconds >0 ) {
       seconds--;
    } else {
       clearInterval(timer);
       window.alert("Your total score is: " + totalScore);
    }
}

function mainFunction() {

    initialize();
}

function printIt() {
    var printed = false;
    var rand = parseInt(16 * Math.random()) + 1;
    while(!printed) {
        if(document.getElementById(rand).style.backgroundColor == "lightslategray"){
            rand = parseInt(16 * Math.random()) + 1;
        }
        else{
            document.getElementById(rand).style.backgroundColor = "lightslategray";
            printed = true;
        }
    }
}

function initialize() {
    
    for (i = 0; i < 5 ; i++) {
        printIt();
    }
}
