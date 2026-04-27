const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let x = 50;
let y = 50;

const pLeveys = 30
const pPituus = 30

const paino = 4
let maassa = false

const nopeus = 5;

hyppataan = false
oikealle = false
vasemmalle = false

let hyppays = false
let korkeusTarkastus = 0

function drawPlayer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  
    ctx.fillStyle = 'rgb(90, 178, 230)';
    ctx.fillRect(x, y, pLeveys, pLeveys);  
}

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
    if (hyppataan === true&&maassa===true||hyppays === true){
        y -= nopeus
        korkeusTarkastus += 1
        hyppays = true
        if (korkeusTarkastus === 15){
            hyppataan = false
            hyppays = false
            korkeusTarkastus = 0
        }
    }
    if (oikealle === true)
        x += nopeus
    if (vasemmalle === true)
        x -= nopeus
}


//piirtää peli alueen
function piirräMaa(){
    ctx.fillStyle = "black"
    ctx.lineWidth = 4
    ctx.beginPath()
    ctx.moveTo(0,400)
    ctx.lineTo(800,400)
    ctx.stroke()
}

//asettaa putoamis nopeuden kun on ilmassa
function painovoima(){
    if (maassa === false && hyppays === false){
        y += paino
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

setInterval(function() {
    checkCollision()
    liikutus()
    painovoima()
    drawPlayer();
    piirräMaa()
}, 20);

