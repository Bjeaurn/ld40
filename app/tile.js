tile = {};

tile.tiles = [
    {name: "black", passable: true},
    {name: "wall", passable: false},
    {name: "tile3", passable: false},
    {name: "tile4", passable: false},
]

tile.draw = function(x, y, tileID) {
    if(tile.tiles[tileID]) {
        gn.handle.draw(gn.images.get(tile.tiles[tileID].name), x*gn.TILESIZE, y*gn.TILESIZE);
    }
}

tile.get = function(tileID) {
    return tile.tiles[tileID];
}
