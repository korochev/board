const rows = 25;
const columns = 20;
const SQUARES_NUMBER = rows * columns;
const colors = ['#E74C3C', '#8E44AD', '#3498DB', '#16A085', '#D35400', '#7F8C8D', '#2C3E50'];

for (let i=0; i < SQUARES_NUMBER; i++) {
   let square = document.createElement('div');
   square.classList.add('square');

   square.onmouseover = () => setColor(square);
   
   document.querySelector('#board').append(square)
}

function setColor(element) {
   element.style.setProperty('--hover-color', getRandomColor())
}

function getRandomColor() {
   let index = Math.floor(Math.random() * colors.length);
   return colors[index];
}

