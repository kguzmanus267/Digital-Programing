
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

 var directionChoices = {righty, lefty};

var randomize = Math.floor(Math.random()*directionChoices.length);

  if (randomize) {winGreen();
} else {loseRed();
}
var functions = {loseRed, winGreen};

function loseRed () {
    document.body.style.backgroundColor ='red';
    console.log("LOSE");
}

function winGreen(){
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'white';
    console.log("WIN");
    


}})});