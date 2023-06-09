import { 
  changeDirection,
  snakeMovement,
  snake,
} from "./snake.js"
export {
  win,
  loss,
  piece,
  render,
  movementID,
}
/*-----cached elements-----*/
let scoreEl = document.getElementById('score')
let resetEl = document.getElementById('reset')
let messageEl = document.getElementById('message')
let sqEl =document.querySelectorAll('.sq')
let winLoseMessage = document.getElementById('win-loss-message')
let playAgainEl = document.getElementById('play-again')
let eatSound = new Audio("../Assets/Audio/eatSound.mp3")
let bonk = new Audio("../Assets/Audio/bonkSound.mp3")
let keyPad = document.getElementById('phone-keys')

/*----------constants----------*/

let score = 0
let win = false
let loss = false 
let piece = null
let intervalNum = 250
let movementID

scoreEl.innerHTML= `Score: ${score}`
/*---------event listeners----*/
document.addEventListener('keydown', (event) => {
  if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(event.code) > -1) {
    event.preventDefault();
  }
  changeDirection(event.key)
})

keyPad.addEventListener('click', (event) => {
  changeDirection(event.target.id)
})

resetEl.addEventListener('click', init)
playAgainEl.addEventListener('click', playAgain)
/*----------Losing Positions----------*/
let losingBlocks = ["0A", "0B", "0C", "0D", "0E", "0F", "0E", "0F", "0G", "0H", "0I", "0J", "0K", "0L", "0M", "0N", "0O", "0P", "17A", "17B", "17C", "17D", "17E", "17F", "17G", "17H", "17I", "17J", "17K", "17L", "17M", "17N", "17O", "17P","1@", "2@", "3@", "4@", "5@", "6@", "7@", "8@", "9@", "10@", "11@", "12@", "13@", "14@", "15@", "16@", "1Q", "2Q", "3Q", "4Q", "5Q", "5Q", "6Q", "7Q", "8Q", "9Q", "10Q", "11Q", "12Q", "13Q", "14Q", "15Q", "16Q"]
/*----------init, reset, and render functions----------*/
init()
function init() {
  snake.size =["8H"]
  snake.direction= null
  snake.nextDirection=null
  win = false
  loss = false
  score = 0
  scoreEl.innerHTML = `Score: ${score}`
  clearInterval(movementID)
  movementID = setInterval(snakeMovement, intervalNum) 
  newPiece()
  render()
}
function playAgain() {
  init()
  messageEl.className = 'hidden'
}
function render() {
  sqEl.forEach(function(sq) {
    if (snake.size.includes(sq.id) && !(sq.id === snake.size[0])) {
      sq.className = "sq snake"
    } else if (sq.id === snake.size[0]) {
      sq.className += ` snakehead-${snake.direction}`
    }
    else {
      sq.className = "sq"
    }
    if (snake.size[0] === piece) {
      score += 1
      sq.removeAttribute(" piece")
      newPiece()
      scoreEl.innerHTML= `Score: ${score}`
      eatingSound()
    } 
    if (sq.id === piece) {
      sq.className += " piece"
    }
  })
  checkWin()
  checkLoss()
  renderMessage()
}
function newPiece () {
  let number = Math.floor(Math.random() * 16 + 1)
  let letter = String.fromCharCode(Math.floor(Math.random() * 16 + 65))
  let possiblePiece = number.toString() + letter
  if (snake.size.includes(possiblePiece)) {
    pieceInSnake()
  } else {
    piece = possiblePiece
  }
}
function pieceInSnake () {
  let number = Math.floor(Math.random() * 16 + 1)
  let letter = String.fromCharCode(Math.floor(Math.random() * 16 + 65))
  let possiblePiece = number.toString() + letter
  if (snake.size.includes(possiblePiece)) {
    newPiece()
  } else {
    piece = possiblePiece
  }
}

/*----------Win/Lose mechanics and Sound Effects----------*/
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
}
function checkWin(){
  if (snake.size.length === 256) {
    win = true
  }
}
function renderMessage(){
  if (loss === true) {
    deathCry()
    messageEl.className = "visible animate__animated animate__bounceInDown"
    winLoseMessage.innerText = "Game Over. But that's ok."
  }
  if (win === true) {
    messageEl.className = "visible animate__animated animate__bounceInDown"
    winLoseMessage.innerText = "You Won??? Kudos, I guess"
  }
}
function eatingSound() {
  eatSound.volume = .25
  eatSound.play()
}
function deathCry() {
  bonk.volume = .25
  bonk.play()
}