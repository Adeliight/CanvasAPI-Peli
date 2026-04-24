const playButton = document.getElementById('start');
const start = document.getElementById('startingScreen');
const levels = document.getElementById('levelScreen');

playButton.addEventListener('click', () => {
    showLevels();
});

function showLevels() {
    start.classList.remove('active');
    levels.classList.add('active');
}