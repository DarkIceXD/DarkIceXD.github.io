const GAME_TIMEOUT = 100;
const CANVAS_BORDER_COLOUR = 'white';
const CANVAS_BACKGROUND_COLOUR = 'black';
const SNAKE_COLOUR = 'black';
const SNAKE_BORDER_COLOUR = 'white';
const FOOD_COLOUR = 'black';
const FOOD_BORDER_COLOUR = 'red';
const SIZE = 20;

const gameCanvas = document.getElementById("playground");
const max = { x: gameCanvas.width / SIZE-1, y: gameCanvas.height / SIZE-1 };
const ctx = gameCanvas.getContext("2d");

const gradient = ctx.createLinearGradient(0, 0, 900, 600);
gradient.addColorStop("0", "red");
gradient.addColorStop("0.1", "#f442d9");
gradient.addColorStop("0.2", "magenta");
gradient.addColorStop("0.3", "purple");
gradient.addColorStop("0.4", "darkblue");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("0.6", "lightblue");
gradient.addColorStop("0.7", "#42f4bf");
gradient.addColorStop("0.8", "green");
gradient.addColorStop("0.9", "lightgreen");
gradient.addColorStop("1.0", "yellow");

let inProgress = false;
let snake;
let food;
let tick = GAME_TIMEOUT;

function clearCanvas() {
    ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
    ctx.strokeStyle = CANVAS_BORDER_COLOUR;
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

function drawSnake() {
    snake.parts.forEach(function (part) {
        ctx.fillStyle = SNAKE_COLOUR;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.fillRect(part.x * SIZE, part.y * SIZE, SIZE, SIZE);
        ctx.strokeRect(part.x * SIZE, part.y * SIZE, SIZE, SIZE);
    })
}

function updateScore() {
    if (inProgress) {
        document.getElementById('score').innerHTML = `Score: ${snake.parts.length}`;
    } else {
        document.getElementById('score').innerHTML = `GameOver!<br> Score: ${snake.parts.length}`;
    }
}

function drawFood() {
    ctx.fillStyle = FOOD_COLOUR;
    ctx.strokeStyle = FOOD_BORDER_COLOUR;
    ctx.fillRect(food.x * SIZE, food.y * SIZE, SIZE, SIZE);
    ctx.strokeRect(food.x * SIZE, food.y * SIZE, SIZE, SIZE);
}

function advanceSnake() {
    snake.parts.unshift({ x: snake.parts[0].x + snake.direction.x, y: snake.parts[0].y + snake.direction.y });
    const didEatFood = snake.parts[0].x === food.x && snake.parts[0].y === food.y;
    if (didEatFood) {
        updateScore();
        createFood();
    } else {
        snake.parts.pop();
    }
}

function createFood() {
    food.x = Math.floor(Math.random() * max.x);
    food.y = Math.floor(Math.random() * max.y);
}

function didGameEnd() {
    for (let i = 4; i < snake.parts.length; i++)
        if (snake.parts[i].x === snake.parts[0].x && snake.parts[i].y === snake.parts[0].y)
            return true;
    return snake.parts[0].x < 0 || snake.parts[0].x > max.x || snake.parts[0].y < 0 || snake.parts[0].y > max.y;
}

document.addEventListener("keydown", function (event) {
    const keyPressed = event.keyCode;
    if (keyPressed === 16) {
        tick = GAME_TIMEOUT / 2;
    }
    if (snake.direction.updated) return;
    if ((keyPressed === 37 || keyPressed === 65) && !(snake.direction.x === 1)) { //left
        snake.direction.x = -1;
        snake.direction.y = 0;
        snake.direction.updated = true;
    } else if ((keyPressed === 38 || keyPressed === 87) && !(snake.direction.y === 1)) { //up
        snake.direction.x = 0;
        snake.direction.y = -1;
        snake.direction.updated = true;
    } else if ((keyPressed === 39 || keyPressed === 68) && !(snake.direction.x === -1)) { //right
        snake.direction.x = 1;
        snake.direction.y = 0;
        snake.direction.updated = true;
    } else if ((keyPressed === 40 || keyPressed === 83) && !(snake.direction.y === -1)) { //down
        snake.direction.x = 0;
        snake.direction.y = 1;
        snake.direction.updated = true;
    }
});

document.addEventListener("keyup", function (event) {
    const keyPressed = event.keyCode;
    if (keyPressed === 16) {
        tick = GAME_TIMEOUT;
    }
});

function main() {
    if (didGameEnd()) {
        inProgress = false;
        updateScore();
        return;
    }
    setTimeout(function () {
        snake.direction.updated = false;
        clearCanvas();
        drawFood();
        advanceSnake();
        drawSnake();
        main();
    }, tick)
}

function start() {
    if (inProgress) return;
    inProgress = true;
    snake = {
        direction: { x: 0, y: 1, updated: false },
        parts: [{ x: 3, y: 3 }]
    };
    food = {
        x: 0,
        y: 0
    };
    updateScore();
    createFood();
    main();
}