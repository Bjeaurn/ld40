map = {};
map.data = [];

map.draw = function(data) {
    if(data && data !== 0) {
        var mapX = 0;
        var mapY = 0;
        var tileVar;
        for(j=0; j<gn.screen.tilesY+2; j++) {
            for(i=0;i<gn.screen.tilesX+2; i++) {
                tileVar = (map.data[j] && map.data[j][i]) ? map.data[j][i] : 0;

                if(tile && tile.draw) {
                    tile.draw(i, j, tileVar);
                } else {
                    console.log('We don\'t have a Tile object');
                    return;
                }
            }
        }
    } else {
        var mapX = 0;
        var mapY = 0;
        var tileVar;
        for(j=0; j<gn.screen.tilesY+2; j++) {
            for(i=0;i<gn.screen.tilesX+2; i++) {
                if(tile && tile.draw) {
                    tile.draw(i, j, 0);
                } else {
                    console.log('We don\'t have a Tile object');
                    return;
                }
            }
        }
    }
}
