const levelData = {
    1: { platforms: [{x:0, y:550, width:800, height:50}, {x:200, y:400, width:200, height:20}, {x:450, y:300, width:200, height:20}], spawn: {x:50, y:500} },
    2: { platforms: [{x:0, y:550, width:800, height:50}, {x:100, y:450, width:100, height:20}, {x:300, y:350, width:100, height:20}], spawn: {x:20, y:500} },
    3: { platforms: [{x:0, y:550, width:800, height:50}, {x:100, y:200, width:50, height:300}], spawn: {x:50, y:100} }
};

let currentPlatforms = [];

function tarkistaTormaykset() {
    let onkoTasonPaalla = false;
    currentPlatforms.forEach(plat => {
        if (player.x < plat.x + plat.width &&
            player.x + player.width > plat.x &&
            player.y + player.height <= plat.y + 10 && 
            player.y + player.height + paino >= plat.y) {
            player.y = plat.y - player.height;
            onkoTasonPaalla = true;
        }
    });
    player.maassa = onkoTasonPaalla;
}