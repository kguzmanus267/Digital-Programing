
document.addEventListener('keydown' , function (righty) {
    switch (righty.keyCode) {
       case 39:
          console.log("Right key is pressed.");
          break;
          };

 document.addEventListener('keydown' , function (lefty) {
    switch (lefty.keyCode) {
        case 37:
           console.log("Left key is pressed.");
           break;
           };

 var directionChoices = [righty, lefty];

var randomize = directionChoices[Math.floor(Math.random()*directionChoices.length)];

  if (randomize) {winGreen();
} else {loseRed();
}
var functions = {loseRed, winGreen};

function loseRed () {
    document.body.style.backgroundColor ='red';
    h3 = document.createElement("h3");
    document.querySelector("body").appendChild(h3);
    h3.innerHTML="Try Again";
    console.log("LOSE");
}

function winGreen(){
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'white';
    h3 = document.createElement("h3");
    document.querySelector("body").appendChild(h3);
    h3.innerHTML="You Did It";
    console.log("WIN");
    


for (directionChoice of directionChoices) {console.log ("Refresh to play again.")};

for(random of randomize) if (randomize === loseRed) {console.log("You picked the wrong way")};


while (lefty, righty < 2) {
    console.log("Play again?");

}}})});;;