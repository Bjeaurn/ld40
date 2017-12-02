gn.viewport = {};
gn.viewport.x = 0;
gn.viewport.y = 0;
gn.viewport.centerX = gn.round(gn.canvas.ow/2);
gn.viewport.centerY = gn.round(gn.canvas.oh/2);

gn.viewport.lastX = gn.viewport.x;
gn.viewport.lastY = gn.viewport.y;

gn.viewport.update = function() {

    gn.viewport.tileX = (gn.viewport.x - gn.viewport.centerX) / gn.TILESIZE;
    gn.viewport.tileY = (gn.viewport.y - gn.viewport.centerY) / gn.TILESIZE;
    
    gn.viewport.hx = gn.viewport.x + gn.viewport.centerX;
    gn.viewport.hy = gn.viewport.y + gn.viewport.centerY;
    /*if(player) {
        gn.viewport.x = (player.x - gn.canvas.width/2);
        gn.viewport.y = (player.y - gn.canvas.height/2);
        gn.viewport.tileX = gn.viewport.x / gn.TILESIZE;
        gn.viewport.tileY = gn.viewport.y / gn.TILESIZE;
    } else {
    }*/

    if(gn.quake) {
        gn.viewport.earthquake(gn.quake);
    }
}

gn.viewport.checkInBounds = function(x, y) {
    if(x<gn.canvas.ow+(gn.canvas.ow+gn.TILESIZE) && x>(gn.canvas.ow-gn.TILESIZE) && y<gn.canvas.oh+(gn.canvas.oh+gn.TILESIZE) && y>(gn.viewport.y-gn.TILESIZE)) {
        return true;
    } else {
        return false;
    }
}

gn.viewport.getTile = function(x, y) {
    obj = { x: gn.floor(x/gn.TILESIZE), y: gn.floor(y/gn.TILESIZE) };
    return obj;
}

gn.viewport.earthquake = function (level) {
    var plier = level / 2;
    var x = (Math.random()*level-plier);
    var y = (Math.random()*level-plier);
    gn.viewport.tileX += x;
    gn.viewport.tileY += y;
    gn.viewport.x += x*gn.TILESIZE;
    gn.viewport.y += y*gn.TILESIZE;
}
