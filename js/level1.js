const levelData = {
    1: { platforms: [{x:0, y:550, width:800, height:50}, {x:200, y:400, width:200, height:20}, {x:450, y:300, width:200, height:20}], spawn: {x:50, y:500} },
    2: { platforms: [{x:0, y:550, width:800, height:50}, {x:100, y:450, width:100, height:20}, {x:300, y:350, width:100, height:20}], spawn: {x:20, y:500} },
    3: { platforms: [{x:0, y:550, width:800, height:50}, {x:100, y:200, width:50, height:300}], spawn: {x:50, y:100} }
};

let currentPlatforms = [];

//collison koodi uusittu toimimaan kaikissa tapauksissa (toivottavasti)
function tarkistaTormaykset() {
    let onkoTasonPaalla = false;
    currentPlatforms.forEach(plat => {
        if (player.x < plat.x + plat.width &&
            player.x + player.pLeveys > plat.x &&
            player.y + player.pPituus >= plat.y && 
            player.y <= plat.y + plat.height) {
            
                if(player.x < plat.x && player.y > plat.y && player.y <plat.y+plat.height){
                    player.x = plat.x -player.pLeveys

                } else if(player.x + player.pLeveys > plat.x + plat.width && player.y > plat.y && player.y <plat.y+plat.height){
                    player.x = plat.x + plat.width

                } else if(player.y+player.pPituus< plat.y+plat.height){
                    onkoTasonPaalla = true;
                    player.y = plat.y - player.pPituus 

                }else{
                    player.hyppays = false
                }
            }
        }
    );
    player.maassa = onkoTasonPaalla;
}
