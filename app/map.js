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

map.getTile = function(x, y) {
    if(map.data) {
        return (map.data[ Math.round(y / gn.TILESIZE) ] && map.data[ Math.round(y / gn.TILESIZE) ][ Math.round(x / gn.TILESIZE) ]) ? map.data[ Math.round(y / gn.TILESIZE) ][ Math.round(x / gn.TILESIZE) ] : 0;
    }
}

map.getRange = function(x, y, range) {
    var arr = [];
    if(map.data) {
        for(j=y-range; j<y+range; j++) {
            for(i=x-range; i<x+range; i++) {
                arr.push( ( map.data[j] && map.data[j][i] ) ? map.data[j][i] : 0);
            }
        }
        return arr;
    }
    console.error('No map data');
}
