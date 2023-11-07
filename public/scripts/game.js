// game.js

const backgroundCanvas = document.getElementById('backgroundCanvas');
const backgroundCtx = backgroundCanvas.getContext('2d');

// Draw a white background rectangle on the canvas
backgroundCtx.fillStyle = 'white';
backgroundCtx.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);

const numShapes = 20;
const animationSpeed = 2;

<<<<<<< Updated upstream
function randomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function createShape() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    
    const size = Math.random() * 50 + 20;
    const color = randomColor();
    const startY = Math.random() * (canvas.height - size);
    
    const shape = {
        x: canvas.width,
        y: startY,
        size,
=======
// Function to create a square with a random vertical position and color
function createSquare(x) {
    const y = Math.random() * (canvas.height - squareHeight);
    const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256})`;
    return {
        x,
        y,
        width: squareWidth,
        height: squareHeight,
>>>>>>> Stashed changes
        color,
    };

    function moveShape() {
        ctx.fillStyle = shape.color;
        ctx.fillRect(shape.x, shape.y, shape.size, shape.size);
        
        shape.x -= animationSpeed;

        if (shape.x + shape.size < 0) {
            // Shape is out of the canvas, remove it
            return;
        }
        
        requestAnimationFrame(moveShape);
    }

    requestAnimationFrame(moveShape);
}

<<<<<<< Updated upstream
for (let i = 0; i < numShapes; i++) {
    createShape();
}
=======
// Start moving the squares
moveSquares();
>>>>>>> Stashed changes
