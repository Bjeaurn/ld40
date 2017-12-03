player.x = 63; 
player.y = 870;

scene = {};
scene.coins = 0;
scene.crystals = 0;
scene.targetCrystals = 6;

gn.viewport.x = player.x;
gn.viewport.y = player.y;

scene.levelComplete = false;

console.log('loading once?');

map.default = 0;
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
    player.drinkPotion();
}

new Potion(11,5);
new Potion(18,5);
scene.coinsArr = [];
scene.seenCoin = false;

scene.addCoin = function() {
    player.coins++;
}

scene.addCrystal = function() {
    scene.crystals++;
    if(scene.crystals >= scene.targetCrystals) {
        portals.forEach(portal => portal.toggle());
    }
}

var dropCoin = function(x, y) {
    var tX = Math.round(x/gn.TILESIZE);
    var tY = Math.round(y/gn.TILESIZE);
    var t = map.getTile(x, y);
    if(tile.get(t).passable) {
        scene.coinsArr.push(new Coin(tX, tY));
    } else {
        new FastBanner("Coin instantly added, dropped in unreachable spot. Sorry!", 120);
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
        new FastBanner("Crystal instantly added, dropped in unreachable spot. Sorry!", 120);
        scene.addCrystal();
    }
}

new Enemy(610, 698, dropCoin);
new Enemy(599, 304, dropCoin);
new Enemy(444, 175, dropCrystal);

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
    if(player.coins > 0) {
        gn.handle.text('Coins: '+player.coins, 10, 560, '16px Helvetica', '255,255,255', '1');            
    }
    gn.handle.text('Crystals: '+scene.crystals, 10, 580, '16px Helvetica', '255,255,255', '1');    
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
                scene.completeLevel();
            };
        })
    }
}

scene.completeLevel = function() {
    if(!scene.levelComplete) {
        scene.levelComplete = true;
        portals.forEach(portal => portal.delete());
        gn.scene.load('level3');
    }
}
