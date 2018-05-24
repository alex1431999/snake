var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var scoreTXT = document.getElementById("score");
var snake = [];
var direction = 100;
var apple = new Vector(Math.floor(Math.random()*canvas.width/10) * 10, Math.floor(Math.random()*canvas.height/10)*10);
var head;
var score;

/**
^ 119
> 100
v 115
< 97
**/

/**
* Initilaise project
*/
function init() {
  snake = [];
  snake.push(new Vector(0,10));
  head = snake[0];
  direction = 100;
  score = 1;
  scoreTXT.innerHTML = score;
}

document.onkeypress = function(e) {
  // set the event depending on browser
  e = e || window.event;

  // extract keyCode
  charCode = e.keyCode;

  // Override direction
  direction = charCode;

}


function move() {
  // Clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  /* Move the snake */
  for(i = 0; i < snake.length; i++) {
    if (i != 0) {
      snake[i].setLast(snake[i].getX(), snake[i].getY());

      snake[i].setX(snake[i-1].getLast().getX());
      snake[i].setY(snake[i-1].getLast().getY());
    }

    if (i == 0) {
      head.setLast(head.getX(), head.getY());
      /* Move the snake accordingly */
      switch(direction) {
        case 119:
          head.addY(-10);
          break;

        case 100:
          head.addX(10);
          break;

        case 115:
          head.addY(10);
          break;

        case 97:
          head.addX(-10);
          break;
      }
    }

    // Check for coalition
    coalition();

    // Draw everything
    draw();

    // Check for sides
    wrap();
  }

}

function draw() {
  /* Draw settings and drwaing */
  context.fillStyle = "#000000";
  context.fillRect(snake[i].getX(), snake[i].getY(), 10,10);

  context.fillStyle = "#FF0000";
  context.fillRect(apple.getX(), apple.getY(), 10, 10);
}


/**
* Simple method to check if a side has been hit
*/
function wrap() {
  if(head.getX() == -10 || head.getY() == -10 || head.getX() == canvas.width || head.getY() == canvas.height) {
    gameOver();
  }
}

/**
* Method to check coalition with itself or apple
*/
function coalition() {

  /* Check if it collides with itself */
  for (j = 1; j < snake.length; j++) {
    if ((head.getX() == snake[j].getX()) && (head.getY() == snake[j].getY())) {
      gameOver();
    }
  }

  /* Apple has been eaten */
  if (head.getX() == apple.getX() && head.getY() == apple.getY()) {
    snake.push(new Vector(snake[snake.length-1].getLast()));
    apple = new Vector(Math.floor(Math.random()*canvas.width/10) * 10, Math.floor(Math.random()*canvas.height/10)*10);

    /* Update score */
    score++;
    scoreTXT.innerHTML = score;
  }
}

/**
* Game over function to restart the game and alert a "lost"
*/
function gameOver() {
  alert("lost");
  init();
}

/* Initilaise */
init();
setInterval(move, 50);
