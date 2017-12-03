tile = {};

tile.tiles = [
    {name: "black", passable: true},
    {name: "wall", passable: false},
    {name: "wall-wizard", passable: false},
    {name: "grass", passable: true},
]

tile.draw = function(x, y, tileID) {
    if(tile.tiles[tileID]) {
        gn.handle.draw(gn.images.get(tile.tiles[tileID].name), x*gn.TILESIZE, y*gn.TILESIZE);
    }
}

tile.get = function(tileID) {
    return tile.tiles[tileID];
}
