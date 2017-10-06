var numberOfSquares = 6;
var colors = []
	var squares = document.querySelectorAll(".square");

	var pickedColor = pickColor();

	var resetButton = document.querySelector("#reset");

	var colorDisplay = document.getElementById("colorDisplay")

	var h1 = document.querySelector("h1");


	var message1 = document.querySelector("#message");

var modeButtons = document.querySelectorAll(".mode");

var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
    setUpModeButtons();
    setupSquares();
    reset();
}

    







	


function setupSquares(){
for(var i =0; i < squares.length; i++){
		

		squares[i].addEventListener("click", function(){
		       var clickedColor = this.style.background;
              
		       

		       if(clickedColor == pickedColor){
		       	message1.textContent = "Correct!"
		       	resetButton.textContent = "Play Again?"
		       	changeColors(clickedColor);
		       	h1.style.background = clickedColor;
		       }
		       else{
		         this.style.background = "#232323"
		         message1.textContent = "Try Again!"
		       }
		})
	}
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){


    	modeButtons[i].addEventListener("click", function(){

    	  
    		modeButtons[0].classList.remove("selected");
    		modeButtons[1].classList.remove("selected")
    		this.classList.add("selected");

    		if(this.textContent === "Easy"){
    			numberOfSquares = 3;
    		}

    		else
    			numberOfSquares = 6;

    	      reset();
    	})
    }
}

    function reset(){
    	colors = generateRandomColors(numberOfSquares);

		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;

       resetButton.textContent = "New Colors";


		message1.textContent = "";



		for(var i = 0; i < squares.length; i++){
			
            if(colors[i]){
            squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}

		else{
			squares[i].style.display = "none";
		}
		}
		h1.style.background = "steelblue"
    }

	


	/*easyBtn.addEventListener("click",function(){
		hardBtn.classList.remove("selected");
		easyBtn.classList.add("selected");
		numberOfSquares = 3;
		colors = generateRandomColors(numberOfSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length ; i++){
			if(colors[i]){
				squares[i].style.background = colors[i];
			}

			else{
				squares[i].style.display = "none";
			}
		}
	})

	hardBtn.addEventListener("click",function(){
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");

		numberOfSquares = 6;

		colors = generateRandomColors(numberOfSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length ; i++){
			
				squares[i].style.background = colors[i];
			

			
				squares[i].style.display = "block";
			
		}	})*/

	

	resetButton.addEventListener("click",function(){
		reset();
	});

	colorDisplay.textContent = pickedColor;

	
function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length );
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for(var i = 0 ; i < num; i++){
        arr.push(randomColor())
	}


	return arr;
}

function randomColor(){
  var r =  Math.floor(Math.random() * 256)
  var g =  Math.floor(Math.random() * 256)
  var b =  Math.floor(Math.random() * 256)

  return "rgb(" + r + ", " + g + ", " + b + ")";
}