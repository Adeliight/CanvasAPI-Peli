
const player = {
    x: 50,
    y: 50,
    pLeveys: 30,
    pPituus: 30,
    paino: 6,
    maassa: false,
    nopeus: 5,
    hyppy: 10,
    hyppays: false,
    korkeusTarkastus: 0
};

hyppataan = false
oikealle = false
vasemmalle = false

let hyppays = false
let korkeusTarkastus = 0


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
        player.y -= player.hyppy 
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




//asettaa putoamis nopeuden kun on ilmassa
function painovoima(){
    if (player.maassa === false && player.hyppays === false){
        player.y += player.paino;
    }
}