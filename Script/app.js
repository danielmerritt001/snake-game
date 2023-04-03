// IDEA!!! CHANGE THE MOVEMENT FUNCTIONS TO EXIST WITHIN THE INTERVAL FUNCTION SO THAT PEOPLE CANT CHEAT AND GO THROUGH THEMSELVES

//import { changeDirection } from "./snake.js"

/*-----cached elements-----*/
let boardEl = document.getElementById('board')
let scoreEl = document.getElementById('score')
let resetEl = document.getElementById('reset')
let sqEl =document.querySelectorAll('.sq')

/*----------constants----------*/
let snake= {
  direction: null,
  size: ["8H"]
}
let score = 0
let win = false
let loss = false 
let piece = null

scoreEl.innerHTML= `Score: ${score}`
/*---------event listeners----*/
// boardEl.addEventListener('click', function(){
  //   if (event.target.className === "sq"){
    //     event.target.className += " snake"
    //     console.log(event.target)
    //   }
    // })
let keyPress = document.addEventListener('keydown', (event) => {
      //prevent the arrow keys from moving the page
  if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(event.code) > -1) {
    event.preventDefault();
  }
  changeDirection(event.key)
}, false)
    
resetEl.addEventListener('click', init)
/*----------Losing Positions----------*/
let losingBlocks = ["0A", "0B", "0C", "0D", "0E", "0F", "0E", "0F", "0G", "0H", "0I", "0J", "0K", "0L", "0M", "0N", "0O", "0P", "17A", "17B", "17C", "17D", "17E", "17F", "17G", "17H", "17I", "17J", "17K", "17L", "17M", "17N", "17O", "17P","1@", "2@", "3@", "4@", "5@", "6@", "7@", "8@", "9@", "10@", "11@", "12@", "13@", "14@", "15@", "16@", "1Q", "2Q", "3Q", "4Q", "5Q", "5Q", "6Q", "7Q", "8Q", "9Q", "10Q", "11Q", "12Q", "13Q", "14Q", "15Q", "16Q"]
/*----------functions----------*/
init()
function init() {
  snake.size =["8H"]
  snake.direction= null
  score = 0
  scoreEl.innerHTML = `Score: ${score}`
  newPiece()
  render()
}
function render() {
  sqEl.forEach(function(sq) {
    if (snake.size.includes(sq.id)) {
      sq.className += " snake"
    } else {
      sq.className = "sq"
    }
    if (snake.size[0] === piece) {
      score += 1
      sq.removeAttribute(" piece")
      newPiece()
      scoreEl.innerHTML= `Score: ${score}`
    } 
    if (sq.id === piece) {
      sq.className += " piece"
    }
  })
  checkWin()
  checkLoss()
}
function newPiece () {
  let number = Math.floor(Math.random() * 16 + 1)
  let letter = String.fromCharCode(Math.floor(Math.random() * 16 + 65))
  piece = number.toString() + letter
}

function checkLoss() {
  let filterArray = snake.size.filter(function(squ){
    return squ === snake.size[0]
  })
  if (filterArray.length > 1) {
    loss = true
    return
  }
  loss = losingBlocks.some(function(square) {
    return square === snake.size[0]
  })
  //need loss if the snake touches itself
}

function checkWin(){
  if (snake.size.length === 256) {
    win = true
  }
}

/*----------movement functions----------*/
function up() {
  if (snake.direction !== "down") {
    snake.direction = "up"
  }
}
function down() {
  if (snake.direction !== "up") {
    snake.direction = "down"
  }
}
function left() {
  if (snake.direction !== "right") {
    snake.direction = "left"
  }
}
function right() {
  if (snake.direction !== "left") {
    snake.direction = "right"
  }
}
function changeDirection(key) {
  if (key === "ArrowUp") {
    up()
  } else if (key === "ArrowDown") {
    down()
  } else if (key === "ArrowLeft") {
    left()
  } else if (key === "ArrowRight") {
    right()
  }
}

let movementID = setInterval(snakeMovement, 500) 
function snakeMovement(){
  if(loss === true || win === true) {
    clearInterval(movementID)
    return
  }
  //if statements for up. reverse alphabetical order
  if (snake.direction === "up") {
    let letter = snake.size[0].slice(-1)
    let newLetter = String.fromCharCode(letter.codePointAt(0) - 1)
    let newSquare = snake.size[0].replace(letter, newLetter)
    snake.size.unshift(newSquare)
  } else if (snake.direction === "down"){
    //if statement for down. regular alphabetical order
    let letter = snake.size[0].slice(-1)
    let newLetter = String.fromCharCode(letter.codePointAt(0) + 1)
    let newSquare = snake.size[0].replace(letter, newLetter)
    snake.size.unshift(newSquare)
  } else if (snake.direction === "left"){
    //if statement for left. reverse numerical order.
    let number = snake.size[0].slice(0,-1)
    let newNumber = parseInt(number) - 1
    let newSquare = snake.size[0].replace(number, newNumber)
    snake.size.unshift(newSquare)
  } else if (snake.direction === "right") {
    //if statement for right. regular numerical order.
    let number = snake.size[0].slice(0,-1)
    let newNumber = parseInt(number) + 1
    let newSquare = snake.size[0].replace(number, newNumber)
    snake.size.unshift(newSquare)
  }
  if ((snake.size[0] !== piece) && (snake.direction !== null)) {
    snake.size.pop()
  }
  render()
}


    //// Build the html screen
    //// Flexbox row with two items
    //// Box 1 has h1#title for the title of the game
    //// Box 2 has a div#score and a button#reset
    //// Underneath flexbox, a 16x16 grid give each square a CLASS relating to its position
//// Style this to be able to distinguish grid, box and flexbox items
// Board.js
// Create an array containing the id’s of each square in the grid. Unnecessary
// Snake.js
//// Snake as an object with two parameters
//// Snake.direction = 0
//// Snake.size as an array that corresponds to the squares on the board. 
//// 4 functions for each direction the snake can go. 
//// Add an if statement that prevents the snake from going the opposite direction it was going (for example: can’t go east if you are going west)
// App.js
//// create an init() function and call it
//// cache constants for
//// Board
//// Score
//// Reset button
// Create constants for
//// Loss = false
//// Win = false
//// piece
//// Create an event listener for the keyboard that runs the snake movement functions
//// Create a function ran via intervals that moves the snake in the direction it is going
//// Create an event listener for the reset button that runs init()
//// Make a function that shift(“the square in the direction the snake is moving”). Add snake as an id to squares the snake array is on
//// If the snake has NOT eaten, pop() to remove the end of the snake. use the return of the snake.pop() to remove the snake id of the corresponding square
//// Create a function that runs when the snakehead touches a piece, adding score and removing the piece. 
//// Create a function that creates a piece in a non#snake space when there is no piece on the board
//// Create a render function to render changes of piece and snake placement  on screen
// Create a check for loss function if the snake hits a square with a snake “id” or hits the wall
// Create a check for win function if the snake is the size of the board. array.length=256. Add fun win sounds and confetti-like stuff
// Style.css
// Flexbox 
// Format to match wireframe
// #h1
// Cool font and color
// #score
// Style to look like a fun scoreboard
// #reset
// Make cute as a button
// Grid
// 16x16 grid equal size and centered
// 1 div inside each cell
// #snake 
// Background color or image to display snake position
// Add a Favicon of the snake


// Additional goals
// Make the snakehead unique from the body
// Add sounds for when the snake eats or loses
