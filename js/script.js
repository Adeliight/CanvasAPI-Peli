const startScreen = document.getElementById('startingScreen');
const levelsScreen = document.getElementById('levelScreen');
const peliCanvas = document.getElementById('canvas');
const peliCtx = peliCanvas.getContext('2d');

peliCanvas.width = 800;
peliCanvas.height = 600;

// Nappien toiminta
document.getElementById('start').addEventListener('click', () => {
    startScreen.classList.remove('active');
    levelsScreen.classList.add('active');
});

// Pelin aloitus
function startGame(levelNumber) {
    levelsScreen.classList.remove('active');
    peliCanvas.style.display = "block";

    const data = levelData[levelNumber];
    if (data) {
        currentPlatforms = data.platforms;
        // Asetetaan pelaaja tason aloituspisteeseen
        player.x = data.spawn.x;
        player.y = data.spawn.y;
        player.hyppays = false;
        player.korkeusTarkastus = 0;
        
        // Käynnistetään looppi
        requestAnimationFrame(gameLoop);
    }
}

function draw() {
    peliCtx.clearRect(0, 0, peliCanvas.width, peliCanvas.height);

    peliCtx.fillStyle = "#4CAF50";
    currentPlatforms.forEach(plat => {
        peliCtx.fillRect(plat.x, plat.y, plat.width, plat.height);
    });
    peliCtx.fillStyle = 'rgb(90, 178, 230)';
    peliCtx.fillRect(player.x, player.y, player.pLeveys, player.pPituus);
}

function gameLoop() {
    liikutus();
    painovoima();
    tarkistaTormaykset();
    draw(); 
    requestAnimationFrame(gameLoop);
}
