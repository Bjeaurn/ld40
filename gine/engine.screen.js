gn.screen = {};
gn.screen.update = function() {
    gn.screen.width = gn.canvas.width;
    gn.screen.height = gn.canvas.height;
    gn.screen.tilesY = gn.round(gn.canvas.oh / gn.TILESIZE);
    gn.screen.tilesX = gn.round(gn.canvas.ow / gn.TILESIZE);
}

gn.screen.update();
