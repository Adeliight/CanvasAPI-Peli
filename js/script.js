let peliKaynnissa = false;
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
    currentLevelNumber = levelNumber;
    levelsScreen.classList.remove('active');
    peliCanvas.style.display = "block";

    const data = levelData[levelNumber];
    if (data) {
        currentPlatforms = data.platforms;
        currentGoal = data.goal;
        nollaaPelaaja();
        // Asetetaan pelaaja tason aloituspisteeseen
        player.x = data.spawn.x;
        player.y = data.spawn.y;
        player.hyppays = false;
        player.korkeusTarkastus = 0;
        
        // Käynnistetään looppi kerran
        if (!peliKaynnissa) {
            peliKaynnissa = true; 
            requestAnimationFrame(gameLoop);
        }
    }
}
function draw() {
    peliCtx.clearRect(0, 0, peliCanvas.width, peliCanvas.height);

    // Tasot
    peliCtx.fillStyle = "#4CAF50";
    currentPlatforms.forEach(plat => {
        peliCtx.fillRect(plat.x, plat.y, plat.width, plat.height);
    });

    // Maali palikka
    if (currentGoal) {
        peliCtx.fillStyle = 'yellow';
        peliCtx.fillRect(currentGoal.x, currentGoal.y, currentGoal.width, currentGoal.height);
    }

    peliCtx.fillStyle = 'rgb(90, 178, 230)';
    peliCtx.fillRect(player.x, player.y, player.pLeveys, player.pPituus);
}

// Katsoo koskettaako pelaaja maali palikkaa ja vie seuraavaan leveliin
function tarkistaMaali() {
    if (!currentGoal) return;
    if (player.x < currentGoal.x + currentGoal.width &&
        player.x + player.pLeveys > currentGoal.x &&
        player.y < currentGoal.y + currentGoal.height &&
        player.y + player.pPituus > currentGoal.y) {

        currentGoal = null;

        const seuraavaTaso = currentLevelNumber + 1;

        if (levelData[seuraavaTaso]) {
            alert('Taso läpäisty, siirry tasoon' + seuraavaTaso);
            nollaaPelaaja();
            startGame(seuraavaTaso);
        } else {
            alert('Läpäisit kaikki tasot');
            location.reload();
        }
    }
}

function nollaaPelaaja() {
    const data = levelData[currentLevelNumber];

    player.x = data.spawn.x;
    player.y = data.spawn.y;
    
    player.vX = 0;
    player.vY = 0;
    
    player.hyppays = false;
    player.maassa = false;
}

function gameLoop() {
    liikutus();
    painovoima();
    tarkistaTormaykset();
    tarkistaMaali();
    if (player.y > peliCanvas.height) {
        nollaaPelaaja();
    }
    draw(); 
    requestAnimationFrame(gameLoop);
}