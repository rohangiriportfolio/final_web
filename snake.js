var blockSize = 15;
var total_row = 25;
var total_col = 25;
var board;
var context;
var snakeX = blockSize * 12;
var snakeY = blockSize * 12;
var speedX = 0;
var speedY = 0;
var snakeBody = [];
var foodX;
var foodY;
var gameOver = false;
var score = 0;
let move = new Audio();
move.src="snake_move.mp3";
let eat = new Audio();
eat.src="snake_eat.mp3";
let dead = new Audio();
dead.src="snake_dead.wav";
window.onload = function load() {
    board = document.getElementById("field");
    board.height = total_row * blockSize;
    board.width = total_col * blockSize;
    context = board.getContext("2d");
    placeFood();
    document.addEventListener("keydown", changeDirection);
    setInterval(update, 400);
}

function update() {
    if (gameOver) {
        
        speedX = 0;
        speedY = 0;
        return;
    }
    
    var grad = context.createLinearGradient(0, 375, 375, 0);
    grad.addColorStop(0, 'rgb(22, 22, 255)');
    grad.addColorStop(1, 'rgb(255, 52, 160)');
    context.fillStyle = grad;
    context.fillRect(0, 0, board.width, board.height);
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
    context.strokestyle = 'darkgreen';
    context.strokeRect(foodX, foodY, blockSize, blockSize);
    if (snakeX == foodX && snakeY == foodY) {
        eat.play();
        snakeBody.push([foodX, foodY]);
        placeFood();
        score++;
        document.getElementById('score').innerHTML = "Score: " + score;
    }
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }
    context.fillStyle = "rgb(172, 0, 172)";
    snakeX += speedX * blockSize;
    snakeY += speedY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    context.strokestyle = 'darkgreen';
    context.strokeRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillStyle = "violet";
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
        context.strokestyle = 'darkgreen';
        context.strokeRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
    if (snakeX < 0 || snakeX >= total_col * blockSize || snakeY < 0 || snakeY >= total_row * blockSize) {
        gameOver = true;
        dead.play();
        move.pause();
        document.getElementById('main').innerHTML = "";
        document.getElementById('main').innerHTML = "Your Score: " + score + "<br>" + "Reload the page to Restart..";
        document.getElementById('main').style.fontSize = "16px";
        document.getElementById('main').style.textAlign = "center";
        document.getElementById('main').style.margin = "300px auto";
        document.getElementById('main').style.color = "rgb(255, 52, 160)";
        document.getElementById('main').style.border = "2px solid rgb(22, 22, 255)";
        document.getElementById('main').style.width = "180px";
        document.getElementById('main').style.display = "flex";
        document.getElementById('main').style.justifyContent = "center";
        document.getElementById('main').style.alignItems = "center";
    }
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            dead.play();
            move.pause();
            document.getElementById('main').innerHTML = "";
            document.getElementById('main').innerHTML = "Your Score: " + score + "<br>" + "Reload the page to Restart..";
            document.getElementById('main').style.fontSize = "16px";
            document.getElementById('main').style.textAlign = "center";
            document.getElementById('main').style.margin = "300px auto";
            document.getElementById('main').style.color = "rgb(255, 52, 160)";
            document.getElementById('main').style.border = "2px solid rgb(22, 22, 255)";
            document.getElementById('main').style.width = "180px";
            document.getElementById('main').style.display = "flex";
            document.getElementById('main').style.justifyContent = "center";
            document.getElementById('main').style.alignItems = "center";
        }
    }
}
function up() {
    if (speedY != 1) {
        speedX = 0;
        speedY = -1;
        move.play();
    }
}
function down() {
    if (speedY != -1) {
        speedX = 0;
        speedY = 1;
        move.play();
    }
}
function left() {
    if (speedX != 1) {
        speedX = -1;
        speedY = 0;
        move.play();
    }
}
function right() {
    if (speedX != -1) {
        speedX = 1;
        speedY = 0;
        move.play();
    }
}
function changeDirection(e) {
    if (e.code == "ArrowUp" && speedY != 1) {
        speedX = 0;
        speedY = -1;
        move.play();
    }
    else if (e.code == "ArrowDown" && speedY != -1) {
        speedX = 0;
        speedY = 1;
        move.play();
    }
    else if (e.code == "ArrowLeft" && speedX != 1) {
        speedX = -1;
        speedY = 0;
        move.play();
    }
    else if (e.code == "ArrowRight" && speedX != -1) {
        speedX = 1;
        speedY = 0;
        move.play();
    }

}

function placeFood() {
    foodX = Math.floor(Math.random() * total_col) * blockSize;
    foodY = Math.floor(Math.random() * total_row) * blockSize;
}
