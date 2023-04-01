
//// Build the html screen
//// Flexbox row with two items
//// Box 1 has h1#title for the title of the game
//// Box 2 has a div#score and a button#reset
// Underneath flexbox, a 16x16 grid give each square an id relating to its position
// Style this to be able to distinguish grid, box and flexbox items
// Board.js
// Create an array containing the id’s of each square in the grid
// Snake.js
// Snake as an object with two parameters
// Snake.direction = 0
// Snake.size as an array that corresponds to the squares on the board. 
// 4 functions for each direction the snake can go. 
// Add an if statement that prevents the snake from going the opposite direction it was going (for example: can’t go east if you are going west)
// App.js
// create an init() function and call it
// cache constants for
// Board
// Score
// Reset button
// Create constants for
// Loss = false
// Win = false
// piece
// Create an event listener for the keyboard that runs the snake movement functions
// Create a function ran via intervals that moves the snake in the direction it is going
// Create an event listener for the reset button that runs init()
// Make a function that shift(“the square in the direction the snake is moving”). Add snake as an id to squares the snake array is on
// If the snake has NOT eaten, pop() to remove the end of the snake. use the return of the snake.pop() to remove the snake id of the corresponding square
// Create a function that runs when the snakehead touches a piece, adding score and removing the piece. 
// Create a function that creates a piece in a non#snake space when there is no piece on the board
// Create a render function to render changes of piece and snake placement  on screen
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
