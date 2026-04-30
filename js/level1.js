const levelData = {
        1: { 
        platforms: [
            { x: 0, y: 550, width: 200, height: 50 },
            { x: 350, y: 550, width: 450, height: 50 },
            { x: 150, y: 420, width: 120, height: 20 },
            { x: 350, y: 320, width: 100, height: 20 },
            { x: 550, y: 220, width: 80, height: 20 },
            { x: 700, y: 150, width: 100, height: 20 }
        ], 
        spawn: { x: 50, y: 500 },
        goal: { x: 750, y: 100, width: 30, height: 30 }
    },
        2: {
            platforms: [
            {x: 0, y: 550, width: 800, height: 50 },
            { x: 100, y: 450, width: 100, height: 20 },
            { x: 300, y: 350, width: 100, height: 20 },
            { x: 500, y: 150, width: 100, height: 20 },
            { x: 300, y: 150, width: 100, height: 20 },
            { x: 190, y: 270, width: 80, height: 20}
            ],
            spawn: { x: 50, y: 500 },
            goal: { x: 750, y: 100, width: 30, height: 30 }
        },
    3: {
        platforms: [
            { x: 0, y: 550, width: 150, height: 50 },
            { x: 250, y: 480, width: 60, height: 20 },
            { x: 450, y: 420, width: 60, height: 20 },
            { x: 650, y: 350, width: 100, height: 20 },
            { x: 450, y: 280, width: 50, height: 20 },
            { x: 250, y: 220, width: 50, height: 20 }, 
            { x: 50, y: 180, width: 100, height: 20 },
            { x: 250, y: 100, width: 300, height: 20 } 
        ],
        spawn: { x: 40, y: 500 },
        goal: { x: 500, y: 70, width: 30, height: 30 }
    }
};

let currentPlatforms = [];
let currentGoal = [];

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