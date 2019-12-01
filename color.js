var numOfSquares = 6
var colors = generateRandomColors(numOfSquares)
var squares = document.getElementsByClassName('square')
var pickedColor = pickColor()
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.getElementById("message")
var h1 = document.querySelector("h1")
var resetBtn = document.getElementById("reset")
var easyBtn = document.getElementById("easyBtn")
var hardBtn = document.getElementById("hardBtn")

onload = function() {
    clicked()

    easyBtn.addEventListener("click", function() {
        easyBtn.className = "selected"
        hardBtn.className = ""
        numOfSquares = 3
        showSquares(numOfSquares)
        playAgain(numOfSquares)
    })
    
    hardBtn.addEventListener("click", function() { 
        hardBtn.className = "selected"
        easyBtn.className = ""
        numOfSquares = 6
        showSquares(numOfSquares)
        playAgain(numOfSquares)
    })
    
    resetBtn.addEventListener("click", function() {
        showSquares(numOfSquares)
        colors = generateRandomColors(numOfSquares)
        //pick a new random color from array
        pickedColor = pickColor()
        //change colorDisplay = pickedColor
        colorDisplay.textContent = pickedColor;
        //change colors of squares
        for(var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i]
        }
        h1.style.background = "steelblue"
    })
}

//shows squares
function showSquares(num) {
    hideAll()
    for (i = 0; i < num; i++) {
        document.getElementById('container').getElementsByClassName('square')[i].style.display = 'block'
    }
}
//hides all squares
function hideAll() {
    for (i = 0; i < document.getElementById('container').getElementsByClassName('square').length; i++) {
        document.getElementById('container').getElementsByClassName('square')[i].style.display = 'none'
    }
}
//resets game
function playAgain(num) {
    colors = generateRandomColors(num)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i]
    }
    h1.style.background = "steelblue"
}
function clicked() {
    for(var i = 0; i < squares.length; i++) {
        //add initial colors to square
        squares[i].style.background = colors[i];
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.background
            if(clickedColor === pickedColor) {
                correct(clickedColor)       
            } else {
                this.style.background = "#232323"
                messageDisplay.textContent = "Try Again"
            }
        })
    }
}
//display correct
function correct(clickedColor) {
    messageDisplay.textContent = "Correct"
    resetBtn.textContent = "Play Again"
    changeColors(clickedColor)
    h1.style.background = clickedColor
}
//used when player chose correct color
function changeColors(color) {
    for(var i = 0;i < squares.length; i++) {
        squares[i].style.background = color
    }
}
//used to pick winning color
function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}
//generates array of random color
function generateRandomColors(num) {
    var arr = []
    for(var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}
//generates random colors
function randomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}