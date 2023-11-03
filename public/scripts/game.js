// game.js

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Center the canvas on the screen
function centerCanvas() {
    canvas.style.position = 'absolute';
    canvas.style.left = '50%';
    canvas.style.top = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
}

centerCanvas();

// Define the squares
const squareWidth = 50;
const squareHeight = 50;
const numSquares = 23; // Total number of squares
const animationSpeed = 2;

const circleRadius = 10; // Radius of the circle
const circleX = 0; // X-coordinate (left edge of the canvas)
const circleY = canvas.height / 2; // Y-coordinate (middle of the canvas)
const circleColor = 'black';

function drawCircle() {
    ctx.fillStyle = circleColor;
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
    ctx.fill();
}

// Function to create a square with a random vertical position and color
function createSquare(x) {
    const y = Math.random() * (canvas.height - squareHeight);
    const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    return {
        x,
        y,
        width: squareWidth,
        height: squareHeight,
        color,
    };
}

// Create an array of initial x positions for all squares
const initialXPositions = Array.from({ length: numSquares }, (_, index) => canvas.width + index * squareWidth);

// Create an array of squares with random vertical positions and colors
const squares = initialXPositions.map((x) => createSquare(x));

// Function to move the squares
function moveSquares() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw the background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Move and draw the squares
    squares.forEach((square) => {
        ctx.fillStyle = square.color; // Use the assigned color
        ctx.fillRect(square.x, square.y, square.width, square.height);
        square.x -= animationSpeed;

        // Check if the square has gone off the canvas
        if (square.x + square.width < 0) {
            // Reset the square to the initial position
            square.x = canvas.width;
            square.y = Math.random() * (canvas.height - squareHeight);
        }
    });

    // Request the next frame
    requestAnimationFrame(moveSquares);
}

// Start moving the squares
moveSquares();

// Call the drawCircle() function to draw the circle
drawCircle();