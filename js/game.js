const player = document.querySelector('.player');
const poop = document.querySelector('.poop');
let isGameOver = false;

document.addEventListener('keydown', (event) => {
  if (isGameOver) return;
  if (event.key === 'ArrowLeft') {
    moveLeft();
  } else if (event.key === 'ArrowRight') {
    moveRight();
  }
});

function moveLeft() {
  let leftPosition = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
  if (leftPosition > 0) {
    player.style.left = `${leftPosition - 10}px`;
  }
}

function moveRight() {
  let leftPosition = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
  if (leftPosition < 350) {
    player.style.left = `${leftPosition + 10}px`;
  }
}

function movePoop() {
  let topPosition = parseInt(window.getComputedStyle(poop).getPropertyValue('top'));
  if (topPosition < 400) {
    poop.style.top = `${topPosition + 10}px`;
  } else {
    isGameOver = true;
    alert('Game Over');
  }
}

setInterval(movePoop, 400);
