var randomvariable1 = Math.floor(Math.random() * 6) + 1; // 1- 6

var randomdiceimg = "images/dice" + randomvariable1 + ".png"; // dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomdiceimg);

var randomvariable2 = Math.floor(Math.random() * 6) + 1;

var randomdiceimg2 = "images/dice" + randomvariable2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomdiceimg2);

if(randomvariable1 > randomvariable2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if(randomvariable2 > randomvariable1){
    document.querySelector("h1").innerHTML = "player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "draw!!"
}