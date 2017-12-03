player.x = 635; 
player.y = 480;
if(player.coins<1) {
    player.coins = 1;
}
Enemy.graceDistance = -100;

scene = {};
scene.crystals = 0;
scene.targetCrystals = 6;
scene.cheapBastard = false;
scene.gameOver = false;

gn.viewport.x = player.x;
gn.viewport.y = player.y;

map.default = 3;
map.data = [[],
            [],
            [],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,2],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
            [0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1],
            [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],

           ];


new FastBanner(['Morbi the Wizard: BRING ME MORE COINS', 'OR YOU SHALL NOT PASS!!!'], 240);
new FastBanner(['Morbi the Wizard: I am greedy!', 'I need the coins for... Purposes!'], 240);
player.canMove = false;

setTimeout(() => {
    player.canMove = true;
}, 8000);

setTimeout(() => {
    Enemy.graceDistance = 150;    
}, 9000);

scene.addPotion = function() {
    player.drinkPotion();
}

new Morbi(707, 480);

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

var noDrop = function(x, y) { 
    if(!scene.cheapBastard) {
        new Banner("This cheap bastard didn\'t have any coins on him!", 180);
        scene.cheapBastard = true;
    }
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

new Enemy(461, 141, noDrop);
new Enemy(581, 141, noDrop);
new Enemy(681, 141, dropCoin);

new Enemy(133, 133, noDrop);
new Enemy(316, 136, noDrop);
new Enemy(340, 170, dropCoin);

new Enemy(142, 883, dropCoin);
new Enemy(142, 814, dropCoin);
new Enemy(206, 886, noDrop);
// new Enemy(600, 698, dropCoin);
// new Enemy(599, 304, dropCoin);
// new Enemy(444, 075, dropCrystal);

// var portals = [
//     new Portal(04, 2),
//     new Portal(05, 2),
//     new Portal(06, 2),
//     new Portal(04, 3),
//     new Portal(05, 3),
//     new Portal(06, 3)
// ]

scene.draw = function() {
    map.draw();
    entities.drawAll();
    player.setDirection();
    player.draw();
    gn.handle.text('Crystals: '+scene.crystals, 10, 580, '16px Helvetica', '255,255,255', '1');    
    gn.handle.text('Coins: '+player.coins, 10, 560, '16px Helvetica', '255,255,255', '1')
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
    // TL XY = 509, 383
    // BR XY = 783, 578
    if(!scene.gameOver && player.coins >= 5 && player.x > 509 && player.y > 383 && player.x < 783 && player.y < 578) {
        setTimeout(() => {
            if(!scene.gameOver) {
                Enemy.graceDistance = -1000;
                scene.gameOver = true;
                player.canMove = false;
                new FastBanner(['Morbi: Good! You\'ve brought me enough coins!', 'Now I can finally Subscribe to Bjeaurn on Twitch!!'], 500);
                new FastBanner(['Morbi: As a reward I will grant you freedom!', '(Morbi was an actual viewer during LD40, thanks for the support mate!)'], 600);
                var totalTime = Math.abs(new Date().getTime() - gn.startTime);
                console.log(totalTime);
            }
        }, 1000);

        setTimeout(() => {
            new Banner(['Thank you for playing!', 'Follow me on Twitter and on Twitch: @Bjeaurn'], 2000);
            player.canMove = true;            
            map.data[14][24] = 0;
            map.data[15][24] = 0;
            map.data[16][24] = 0;
        }, 20000);
    }
}
