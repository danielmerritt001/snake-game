/*----------exports/imports----------*/
export {
  changeDirection,
  snakeMovement,
  snake,
}

import {
  win,
  loss,
  piece,
  render,
  movementID,
} from "./app.js"

/*----------snake----------*/
let snake= {
  direction: null,
  nextDirection: null,
  size: ["8H"]
}
/*----------movement functions----------*/
function up() {
  if (snake.direction !== "down") {
    snake.nextDirection = "up"
  }
}
function down() {
  if (snake.direction !== "up") {
    snake.nextDirection = "down"
  }
}
function left() {
  if (snake.direction !== "right") {
    snake.nextDirection = "left"
  }
}
function right() {
  if (snake.direction !== "left") {
    snake.nextDirection = "right"
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

function snakeMovement(){
  if(loss === true || win === true) {
    clearInterval(movementID)
    return
  }
  snake.direction = snake.nextDirection
  if (snake.direction === "up") {
    let letter = snake.size[0].slice(-1)
    let newLetter = String.fromCharCode(letter.codePointAt(0) - 1)
    let newSquare = snake.size[0].replace(letter, newLetter)
    snake.size.unshift(newSquare)
  } else if (snake.direction === "down"){
    let letter = snake.size[0].slice(-1)
    let newLetter = String.fromCharCode(letter.codePointAt(0) + 1)
    let newSquare = snake.size[0].replace(letter, newLetter)
    snake.size.unshift(newSquare)
  } else if (snake.direction === "left"){
    let number = snake.size[0].slice(0,-1)
    let newNumber = parseInt(number) - 1
    let newSquare = snake.size[0].replace(number, newNumber)
    snake.size.unshift(newSquare)
  } else if (snake.direction === "right") {
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
