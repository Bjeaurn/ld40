var map = {};
map.data = [ [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
             [3,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,3],
             [3,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
             [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
             [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
             [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
             [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
             [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
              [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
              [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
              [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
              [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
              [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
           ];

scene.draw = function() {
    //map.draw();
    //player.setDirection()
    entities.drawAll();
    if(gn.hud) {
	    gn.hud.draw();
    }
}


scene.tick = function () {
    player.move();
    scene.logic();
}

scene.logic = function() {
    // Scene specific stuff.
    obj = gn.viewport.getTile(player.x, player.y);
}
