
function rollDice() {


    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    var dice1Image = "./images/dice" + dice1 + ".png";
    var dice2Image = "./images/dice" + dice2 + ".png";


    var resultDice1 = document.querySelector(".container__dice--1 img");
    var resultDice2 = document.querySelector(".container__dice--2 img");

    resultDice1.setAttribute("src", dice1Image);
    resultDice2.setAttribute("src", dice2Image);
    

    

    if (dice1 > dice2) {
        document.getElementById("message").innerHTML = "Dice 1 wins!🎉";
        document.getElementById("userid1").innerHTML = "🥳";
        document.getElementById("userid2").innerHTML = "🫣";
    } 
    
    else if (dice2 > dice1) {

        document.getElementById("message").innerHTML = "Dice 2 wins!🎉";
        document.getElementById("userid2").innerHTML = "🥳";
        document.getElementById("userid1").innerHTML = "🫣";
    }


    else {
        document.getElementById("message").innerHTML = "Draw!🤝";
        document.getElementById("userid1").innerHTML = "🤝";
        document.getElementById("userid2").innerHTML = "🤝";
    }
}