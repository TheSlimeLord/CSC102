function play() {
    // We roll the glorious dice.
    dice = roll();
    die1 = dice[0];
    die2 = dice[1];

    // Analyze the results
    sum = die1 + die2;
    if (sum == 7 || sum == 11){
        document.getElementById("result").innerHTML = "HAHA YOU LOST!!";
        document.getElementById("resultpic").src = "Laugh.png";
    }    
    else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("result").innerHTML = "NO WAY, YOU WON!?";
        document.getElementById("resultpic").src = "Shock.png";
    }
    else {
        document.getElementById("result").innerHTML = "You rolled...";
        document.getElementById("resultpic").src = "Bored.png";
    }
}

function roll() {
    // Calls in a function to roll 2 dice, between 1 and 6.
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    
    // The dice rolls shall be displayed
    document.getElementById("die1").innerHTML = "die 1 equals " + die1;
    document.getElementById("die2").innerHTML = "die 2 equals " + die2;

    // Dice1 pictures display
    if (die1 == 1)
        document.getElementById("diepic1").src = "Dice1.png";
    else if(die1 == 2)
        document.getElementById("diepic1").src = "Dice2.png";
    else if(die1 == 3)
        document.getElementById("diepic1").src = "Dice3.png";
    else if(die1 == 4)
        document.getElementById("diepic1").src = "Dice4.png";
    else if(die1 == 5)
        document.getElementById("diepic1").src = "Dice5.png";
    else
        document.getElementById("diepic1").src = "Dice6.png";

    // Dice2 pictures display
    if (die2 == 1)
        document.getElementById("diepic2").src = "Dice1.png";
    else if(die2 == 2)
        document.getElementById("diepic2").src = "Dice2.png";
    else if(die2 == 3)
        document.getElementById("diepic2").src = "Dice3.png";
    else if(die2 == 4)
        document.getElementById("diepic2").src = "Dice4.png";
    else if(die2 == 5)
        document.getElementById("diepic2").src = "Dice5.png";
    else
        document.getElementById("diepic2").src = "Dice6.png";    
    // Return the results from both.
    return [die1, die2];
}