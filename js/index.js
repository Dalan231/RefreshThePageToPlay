var randomNum1 = Math.floor(Math.random() * 6);
var randomNum2 = Math.floor(Math.random() * 6);
var diceNum=["dice1.png",
"dice2.png",
"dice3.png",
"dice4.png",
"dice5.png",
"dice6.png"];
document.querySelector(".img1").setAttribute("src","images/"+diceNum[randomNum1]);

document.querySelector(".img2").setAttribute("src","images/"+diceNum[randomNum2]);

if(randomNum1>randomNum2){
    document.querySelector("h1").textContent="Sorry, You Lose!"
}else if( randomNum2>randomNum1){
    
    document.querySelector("h1").textContent="You Won!!!"

}else{
    
    document.querySelector("h1").textContent="Draw"
}