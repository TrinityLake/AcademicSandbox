//Funtion that generates random number 1-6 for both die 
function rollDice(){
    return Math.floor(Math.random()*6)+1;
}
//Function that allows gamer to play the game
function playCraps(){
    //Roll the dice
    var die1 = rollDice();
    var die2 = rollDice();
    //Add both die1 and die2 together
    var sum = die1 + die2;
    //Display result of both die and adds them together
    document.getElementById("die1Results").innerHTML = "Die 1: " + die1;
    document.getElementById("die2Results").innerHTML = "Die 2: " + die2;
    document.getElementById("sumResults").innerHTML = "Sum: " + sum;
    //Assess the outome of game based on rules given
    if (sum === 7 || sum === 11) {
        document.getElementById("finalResult").innerHTML = "CRAPS! - You Lose!!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        document.getElementById("finalResults").innerHTML = "You Won!!!";
    } else {
        document.getElementById("finalResults").innerHTML = "You Pushed.";
    }
}