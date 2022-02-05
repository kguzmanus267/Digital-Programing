var functions = [loseRed, winGreen];

function loseRed () {
    document.body.style.backgroundColor ='red';
    console.log("LOSE");
}

function winGreen(){
    document.body.style.backgroundColor = 'green';
    document.body.style.color = 'white';
    console.log("WIN");
}

function randomize(n) {
     return [Math.floor(Math.random()*n)];
}

functions[randomize(functions.length)]();