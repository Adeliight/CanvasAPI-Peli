//const canvas = document.getElementById('gameCanvas');
//const ctx = canvas.getContext('2d');

// let x = 50;
// let y = 50;

// const pLeveys = 30
// const pPituus = 30

// const paino = 4
// let maassa = false

// const nopeus = 5;

    // Muutettu jotta olisi yhteensopiva muun koodin kanssa -Roni

const player = {
    x: 50,
    y: 50,
    pLeveys: 30,
    pPituus: 30,
    paino: 4,
    maassa: false,
    nopeus: 5,
    hyppays: false,
    korkeusTarkastus: 0
};

hyppataan = false
oikealle = false
vasemmalle = false

let hyppays = false
let korkeusTarkastus = 0

// Siirretty js/script.js

//function drawPlayer() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);  
    //ctx.fillStyle = 'rgb(90, 178, 230)';
    //ctx.fillRect(x, y, pLeveys, pLeveys);  
//}

document.addEventListener('keydown', liikutaPelaajaa);
document.addEventListener("keyup",lopetaLiikutus)

//Kaksi funcktiota hallitsemaan pelaajan liikkumista
function liikutaPelaajaa(e) { 
    switch(e.key) {
        case 'w':
           hyppataan = true
            break;
        case 'd':
            oikealle = true
            break; 
        case 'a':
            vasemmalle = true
            break;
    }
}

function lopetaLiikutus(e){
switch(e.key) {
        case 'w':
           hyppataan = false
            break;
        case 'd':
            oikealle = false
            break; 
        case 'a':
            vasemmalle = false
            break;
    }
}

//uusi liikkumis ohjaus
function liikutus(){
    if (hyppataan === true&&player.maassa===true||player.hyppays === true){
        player.y -= nopeus 
        player.korkeusTarkastus += 1
        player.hyppays = true
        if (player.korkeusTarkastus === 15){
            hyppataan = false
            player.hyppays = false
            player.korkeusTarkastus = 0
        }
    }
    if (oikealle === true) 
        player.x += player.nopeus;
    if (vasemmalle === true) 
        player.x -= player.nopeus;
}


//piirtää peli alueen
//function piirräMaa(){
    //ctx.fillStyle = "black"
    //ctx.lineWidth = 4
    //ctx.beginPath()
    //ctx.moveTo(0,400)
    //ctx.lineTo(800,400)
    //ctx.stroke()
//}

//asettaa putoamis nopeuden kun on ilmassa
function painovoima(){
    if (player.maassa === false && player.hyppays === false){
        player.y += player.paino;
    }
}

//yksinkertainen colllison checki testausta varten
function checkCollision() {
    if (y + 35 > 400) {
        maassa = true
    } else {
        maassa = false
    }
}

//setInterval(function() {
    //checkCollision()
    //liikutus()
    //painovoima()
    //drawPlayer();
    //piirräMaa()
//}, 20);
