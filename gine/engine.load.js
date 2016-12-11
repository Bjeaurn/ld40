// Must be loaded last
gn.load = function() {
    gn.then = gn.now = Date.now();

    gn.images.store('black', 'tile_01.png');
    gn.images.store('player_gun', 'survivor1_gun.png');
    gn.images.store('zombie', 'zoimbie1_hold.png');
    gn.images.store('tile', 'tile_12.png');
    gn.images.store('horizontal_wall', 'tile_111.png');
    gn.images.store('vertical_wall', 'tile_138.png');
    gn.images.store('tl_corner', 'tile_109.png');
    gn.images.store('tr_corner', 'tile_110.png');
    gn.images.store('bl_corner', 'tile_136.png');
    gn.images.store('br_corner', 'tile_137.png');
    gn.images.store('bullet', 'bullet.png');
    gn.images.store('health', 'health.png');
    gn.images.store('blood', 'blood.png');
    gn.images.store('health_zombie', 'health_zombie.png');

    // ### INITIALIZE VARIABLES ### //
    player = Player();

    // ### LOAD STARTING SCENE ### //
    gn.scene.load('scene');

    // Start gn.main();
    requestAnimationFrame(gn.main);
};
gn.load();
