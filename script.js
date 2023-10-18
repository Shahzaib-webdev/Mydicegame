var randomNumber1=Math.floor(Math.random()*6)+1;
var randSrc="images/dice"+randomNumber1+".png"; // random src generator

document.querySelector(".img1").setAttribute("src", randSrc);

// same for 2nd dice

let randomNumber2=Math.floor(Math.random()*6)+1;
let randSrc2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", randSrc2);

// condition which player will win

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}