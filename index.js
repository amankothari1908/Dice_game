var randomnumber1 = Math.floor(Math.random() * 6) + 1 ; // generating random numbers

var randomImage1 = "images/" + "dice" + randomnumber1 + ".png" ; // images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImage1);


var randomnumber2 = Math.floor(Math.random() * 6) + 1 ; // generating random numbers

var randomImage2 = "images/" + "dice" + randomnumber2 + ".png" ; // images/dice1.png to images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImage2)

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!" ;
}
else if( randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩" ;
}
else{
    document.querySelector("h1").innerHTML = " Draw ! " ;
}