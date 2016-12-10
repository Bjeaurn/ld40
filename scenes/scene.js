map.default = [1];
map.data = [ [4,2,2,2,2,2,2,2,2,2,2,5],
             [3,1,1,1,1,1,1,1,1,1,1,3],
             [3,1,1,1,1,1,1,1,1,1,1,3],
             [3,1,1,1,1,1,1,1,1,1,1,3],
             [3,1,1,1,1,1,1,1,1,1,1,1],
             [3,1,1,1,1,1,1,1,1,1,1,3],
             [3,1,1,1,1,1,1,1,1,1,1,3],
             [3,1,1,1,1,1,1,1,1,1,1,3],
             [6,2,2,2,2,2,2,2,2,2,2,7]
           ];

scene.draw = function() {
    map.draw(map.data);
    player.setDirection()
    entities.drawAll();
    if(gn.hud) {
	    gn.hud.draw();
    }
}


scene.tick = function () {
    player.move();
    Projectile.moveAll();
    scene.logic();
}

scene.logic = function() {
    // Scene specific stuff.
    obj = gn.viewport.getTile(player.x, player.y);
}
