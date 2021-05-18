const CANVAS_BACKGROUND_COLOUR = 'blue';
const PLAYER_1_COLOUR = 'red';
const PLAYER_2_COLOUR = 'yellow'
const CIRCLE_SIZE = 80;
const CIRCLE_SPACE = 10;
const gameCanvas = document.getElementById("playground");
const ctx = gameCanvas.getContext("2d");
const Player = {
    EMPTY: 0,
    RED: 1,
    YELLOW: 2
};
const gameSize = { x: 7, y: 6 };

let turn;
let discs = [];
let running = false;

function drawCanvas() {
    ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    for (let i = 0; i < gameSize.x; i++) {
        for (let j = 0; j < gameSize.y; j++) {
            ctx.beginPath();
            ctx.arc((i + 1) * (CIRCLE_SPACE + CIRCLE_SIZE / 2) + i * CIRCLE_SIZE / 2, (j + 1) * (CIRCLE_SPACE + CIRCLE_SIZE / 2) + j * CIRCLE_SIZE / 2, CIRCLE_SIZE / 2, 0, 2 * Math.PI);
            if (discs[i][gameSize.y - 1 - j] === Player.RED) {
                ctx.fillStyle = PLAYER_1_COLOUR;
            } else if (discs[i][gameSize.y - 1 - j] === Player.YELLOW) {
                ctx.fillStyle = PLAYER_2_COLOUR;
            } else {
                ctx.fillStyle = 'white';
            }
            ctx.fill();
        }
    }
}

function getColumn(offsetX) {
    for (let i = 0; i < gameSize.x; i++) {
        if (offsetX < (i + 1) * (CIRCLE_SPACE + CIRCLE_SIZE))
            return i;
    }
    return gameSize.x;
}

function addDisc(player, column) {
    if (gameSize.x <= column)
        return -1;
    for (let i = 0; i < gameSize.y; i++) {
        if (discs[column][i] === Player.EMPTY) {
            discs[column][i] = player;
            return i;
        }
    }
    return -1;
}

function checkWin(column, row) {
    let score = 1;
    const player = discs[column][row];
    let i = column + 1;
    while (i < gameSize.x && discs[i][row] === player) {
        i++;
        score++;
    }
    i = column - 1;
    while (i >= 0 && discs[i][row] === player) {
        i--;
        score++;
    }
    if (score >= 4)
        return true;

    i = row + 1;
    score = 1;
    while (i < gameSize.y && discs[column][i] === player) {
        i++;
        score++;
    }
    i = row - 1;
    while (i >= 0 && discs[column][i] === player) {
        i--;
        score++;
    }
    if (score >= 4)
        return true;

    score = 1;
    i = column + 1;
    let j = row + 1;
    while (i < gameSize.x && j < gameSize.y && discs[i][j] === player) {
        i++;
        j++;
        score++;
    }
    i = column - 1;
    j = row - 1;
    while (i >= 0 && j >= 0 && discs[i][j] === player) {
        i--;
        j--;
        score++;
    }
    if (score >= 4)
        return true;

    score = 1;
    i = column + 1;
    j = row - 1;
    while (i < gameSize.x && j >= 0 && discs[i][j] === player) {
        i++;
        j--;
        score++;
    }
    i = column - 1;
    j = row + 1;
    while (i >= 0 && j < gameSize.y && discs[i][j] === player) {
        i--;
        j++;
        score++;
    }
    if (score >= 4)
        return true;
    return false;
}

gameCanvas.addEventListener('click', function(event) {
    if (!running)
        return;
    const column = getColumn(event.offsetX);
    const row = addDisc(turn, column);
    if (row !== -1) {
        drawCanvas();
        if (checkWin(column, row)) {
            console.log(`Player: ${turn}, wins`);
            running = false;
        }
        turn = turn === Player.RED ? Player.YELLOW : Player.RED;
    }
}, false);

function start() {
    if (running)
        return;
    running = true;
    discs = [];
    for (let i = 0; i < gameSize.x; i++) {
        discs[i] = [];
        for (let j = 0; j < gameSize.y; j++) {
            discs[i][j] = Player.EMPTY;
        }
    }
    turn = Player.RED;
    drawCanvas();
}