
// First Image
var randomNumber1 = Math.floor(Math.random() * 6 ) +1;

var randomImageSelection1 = "images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src", randomImageSelection1);


// Second Image
var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomImageSelection2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src", randomImageSelection2);


// title text

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!🥇";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🥇";
}
else{
    document.querySelector("h1").innerHTML = "Draw!☺"
}