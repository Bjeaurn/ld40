player.x = 63; 
player.y = 870;

scene = {};
scene.coins = 0;
scene.crystals = 0;
scene.targetCrystals = 6;

gn.viewport.x = player.x;
gn.viewport.y = player.y;

map.default = [0];
map.data = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
            [1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0],
            [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
            [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
            [1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0],
            [1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0],
            [1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,],
            [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],

           ];

// new Coin(8, 04);  good spot for an enemy

new Banner(['Well done, you\'re getting closer to an exit.', 'There\'s another portal on this floor.'], 300);

var crystals = [
    new Crystal(21, 20),
    new Crystal(21, 18),
    new Crystal(8, 6),
    new Crystal(13, 5),
    new Crystal(19, 7)
];
scene.addPotion = function() {
    new Banner('Oh wow! That drink made you a lot faster!', 200);
    player.speed += 25;
}

new Potion(11,5);

scene.coinsArr = [];
scene.seenCoin = false;

scene.addCoin = function() {
    this.coins++;
}

scene.addCrystal = function() {
    this.crystals++;
}

var dropCoin = function(x, y) {
    var tX = Math.round(x/gn.TILESIZE);
    var tY = Math.round(y/gn.TILESIZE);
    var t = map.getTile(x, y);
    if(tile.get(t).passable) {
        scene.coinsArr.push(new Coin(tX, tY));
    } else {
        alert("Coin instantly added, dropped in unreachable spot. Sorry!");
        scene.addCoin();
    }
    if(!scene.seenCoin) {
        scene.seenCoin = true;
        new Banner(['Wow a coin! What would this be used for?', 'Might get rich trying to escape from here!'], 400);
    }
}

var dropCrystal = function(x, y) {
    var tX = Math.round(x/gn.TILESIZE);
    var tY = Math.round(y/gn.TILESIZE);
    var t = map.getTile(x, y);
    if(tile.get(t).passable) {
        new Crystal(tX, tY);
    } else {
        alert("Crystal instantly added, dropped in unreachable spot. Sorry!");
        scene.addCrystal();
    }
}

new Enemy(610, 698, dropCoin);
new Enemy(599, 84, dropCoin);
new Enemy(444, 75, dropCrystal);

var portals = [
    new Portal(04, 2),
    new Portal(05, 2),
    new Portal(06, 2),
    new Portal(04, 3),
    new Portal(05, 3),
    new Portal(06, 3)
]

scene.draw = function() {
    map.draw();
    entities.drawAll();
    player.setDirection();
    player.draw();
    Banners.drawAll();    
}

scene.tick = function () {
    player.move();
    gn.viewport.x = player.x;
    gn.viewport.y = player.y;
    gn.viewport.update();
    scene.logic()
    entities.updateAll();
    Projectile.moveAll();
}

scene.logic = function() {
    // Scene specific stuff.
    if (scene.crystals >= scene.targetCrystals) {
        portals.forEach( portal => {
            if(portal.touchingAPortal()) {
                gn.scene.load('level3');
            };
        })
    }
}
