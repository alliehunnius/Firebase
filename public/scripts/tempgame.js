const canvas = document.createElement("canvas");
canvas.width = 420;
canvas.height = 300;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
const mazeWidth = 21;
const mazeHeight = 15;
const cellSize = canvas.width / mazeWidth;
const playerSize = cellSize / 2;

// Create the maze
const maze = generateMaze(mazeWidth, mazeHeight);

// Add paths from the corners to the middle
for (let y = 0; y < mazeHeight; y++) {
  maze[y][mazeWidth / 2] = 0;
}
for (let x = 0; x < mazeWidth; x++) {
  maze[mazeHeight / 2][x] = 0;
}

// Players
const player1 = { x: 0, y: 0, path: [] };
const player2 = { x: mazeWidth - 1, y: mazeHeight - 1, path: [] };
let currentPlayer = player1;
let gameEnded = false;

function drawMaze() {
  for (let y = 0; y < mazeHeight; y++) {
    for (let x = 0; x < mazeWidth; x++) {
      if (maze[y][x] === 1) {
        ctx.fillStyle = "black";
        ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }
}

function drawPlayer(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
}

function movePlayer(player, dx, dy) {
  if (gameEnded) return;

  const newX = player.x + dx;
  const newY = player.y + dy;

  if (newX >= 0 && newX < mazeWidth && newY >= 0 && newY < mazeHeight && maze[newY][newX] === 0) {
    player.path.push({ x: player.x, y: player.y });
    player.x = newX;
    player.y = newY;

    if (player.x === mazeWidth / 2 && player.y === mazeHeight / 2) {
      gameEnded = true;
      announceWinner();
    }

    return true;
  }
  // If there's a wall, show an error and suggest undoing the step
  console.error("Oops, you ran into a wall. Suggest undoing that step.");
  return false;
}

function drawPath(player, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = playerSize;
  ctx.lineJoin = "round";
  ctx.beginPath();
  player.path.forEach((point, index) => {
    ctx.rect(point.x * cellSize, point.y * cellSize, cellSize, cellSize);
  });
  ctx.stroke();
}

function announceWinner() {
  if (player1.x === mazeWidth / 2 && player1.y === mazeHeight / 2) {
    alert("Game Over! Player 1 (top-left) wins!");
  } else {
    alert("Game Over! Player 2 (bottom-right) wins!");
  }
}

function update() {
  if (gameEnded) return;

  // Handle player movements
  window.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft" && movePlayer(currentPlayer, -1, 0)) {
      e.preventDefault();
    } else if (e.key === "ArrowRight" && movePlayer(currentPlayer, 1, 0)) {
      e.preventDefault();
    } else if (e.key === "ArrowUp" && movePlayer(currentPlayer, 0, -1)) {
      e.preventDefault();
    } else if (e.key === "ArrowDown" && movePlayer(currentPlayer, 0, 1)) {
      e.preventDefault();
    } else if (e.key === "a" && movePlayer(currentPlayer, -1, 0)) {
      e.preventDefault();
    } else if (e.key === "d" && movePlayer(currentPlayer, 1, 0)) {
      e.preventDefault();
    } else if (e.key === "w" && movePlayer(currentPlayer, 0, -1)) {
      e.preventDefault();
    } else if (e.key === "s" && movePlayer(currentPlayer, 0, 1)) {
      e.preventDefault();
    }
    // Clear the canvas and redraw everything
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMaze();
    drawPlayer(player1.x, player1.y, "red");
    drawPlayer(player2.x, player2.y, "blue");
    drawPath(player1, "red");
    drawPath(player2, "blue");
  });

  // Clear the canvas and redraw everything
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMaze();
  drawPlayer(player1.x, player1.y, "red");
  drawPlayer(player2.x, player2.y, "blue");
  drawPath(player1, "red");
  drawPath(player2, "blue");
}

// Initial drawing
drawMaze();
drawPlayer(player1.x, player1.y, "red");
drawPlayer(player2.x, player2.y, "blue");

// Start the game loop
setInterval(update, 1000 / 10); // 10 frames per second
