map.default = [1];
map.data = [ [1,1,2,2,2,2,2,2,2,2,1,1],
             [1,1,1,1,1,1,1,1,1,1,1,1],
             [3,1,1,1,1,1,1,1,1,1,1,3],
             [3,1,1,1,1,1,1,1,1,1,1,3],
             [3,1,1,1,1,1,1,1,1,1,1,3],
             [3,1,1,1,1,1,1,1,1,1,1,3],
             [3,1,1,1,1,1,1,1,1,1,1,3],
             [1,1,1,1,1,1,1,1,1,1,1,1],
             [1,1,2,2,2,2,2,2,2,2,1,1]
           ];

new BoxGroup(1);
new BoxGroup(2);
new BoxGroup(3);

new Enemy()
new Enemy()
new Enemy()
//new Enemy()
//new Enemy()
//new Enemy()

scene.draw = function() {
    map.draw(map.data);
    player.setDirection()
    Box.drawAll();
    player.draw();
    entities.drawAll();
    if(gn.hud) {
	    gn.hud.draw();
    }
}

scene.tick = function () {
    player.move();
    Projectile.moveAll();
    Enemy.moveAll();
    //Enemy.updateAll();
//    entities.checkCollision();
    scene.logic();
}

scene.logic = function() {
    // Scene specific stuff.
    obj = gn.viewport.getTile(player.x, player.y);
}
