var player1button = document.getElementById("player1");
var player2button = document.getElementById("player2");
var p1score = document.getElementById("p1score")
var p2score = document.getElementById("p2score")
var resetButton = document.getElementById("reset")
var input = document.querySelector("input");
var score = document.getElementById("scoreToPlayTo");

var gameOver = false;
var scoreToReach = 5;




var p1Score = 0;
player1button.addEventListener("click",function(){
	if(!gameOver){

	p1Score++;

	if(p1Score == scoreToReach){
		gameOver = true;
		p1score.classList.add("winner")
}
	p1score.textContent = p1Score;

}

})


var p2Score = 0;

player2button.addEventListener("click",function(){

	if(!gameOver){
	p2Score++;

	if(p2Score == scoreToReach){
		gameOver = true;
		p2score.classList.add("winner")

	}
	p2score.textContent = p2Score;

}

})

resetButton.addEventListener("click",function(){
	if(gameOver == true){
reset();	

}


function reset(){
	p2score.classList.remove("winner");
	p1score.classList.remove("winner");
	p1Score = 0;
	p2Score = 0;
	p2score.textContent = p2Score;
	p1score.textContent = p1Score;
	gameOver = false;
}




input.addEventListener("change",function(){
	score.textContent = input.value
	scoreToReach = Number(input.value);
	reset();
})




})





