const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let x = 50;
let y = 50;

const pLeveys = 30
const pPituus = 30

const paino = 4
let maassa = false

let hyppays = false
let korkeusTarkastus = 0

function drawPlayer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  
    ctx.fillStyle = 'rgb(90, 178, 230)';
    ctx.fillRect(x, y, pLeveys, pLeveys);  
}

document.addEventListener('keydown', liikutaPelaajaa);

//pelaajan ohjaaminen pitää tehdä kokonaan uudelleen pelin sujuvuuden vuoksi
function liikutaPelaajaa(e) {
    const speed = 5;
    switch(e.key) {
        case 'w':
            if (maassa === true){
                hyppays = true
            }
            break;
        case 'd':
            x += speed;
            break; 
        case 'a':
            x -= speed;
            break;
    }
}

//simppeli hyppäämis logiikka
function hyppy(){
    if (hyppays === true){
        y -= 5
        korkeusTarkastus += 1
        if (korkeusTarkastus === 15){
            hyppays = false
            korkeusTarkastus = 0
        }
    }

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
    painovoima()
    hyppy()
    checkCollision()
    drawPlayer();
    piirräMaa()
}, 20);

