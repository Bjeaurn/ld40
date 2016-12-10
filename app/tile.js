tile = {};

tile.tiles = [
    {name: "black", passable: true},
    {name: "tile", passable: true },
    {name: "horizontal_wall", passable: false },
    {name: "vertical_wall", passable: false },
    {name: "tl_corner", passable: false },
    {name: "tr_corner", passable: false },
    {name: "bl_corner", passable: false },
    {name: "br_corner", passable: false },
]

tile.draw = function(x, y, tileID) {
    if(tile.tiles[tileID]) {
        gn.handle.draw(gn.images.get(tile.tiles[tileID].name), x*gn.TILESIZE, y*gn.TILESIZE);
    }
}

tile.get = function(tileID) {
    return tile.tiles[tileID];
}
