// Must be loaded last
gn.load = function() {
    gn.then = gn.now = Date.now();

    gn.images.store('black', 'tile_01.png');
    gn.images.store('player_gun', 'survivor1_gun.png');
    gn.images.store('tile', 'tile_12.png');
    gn.images.store('horizontal_wall', 'tile_111.png');
    gn.images.store('vertical_wall', 'tile_138.png');
    gn.images.store('tl_corner', 'tile_109.png');
    gn.images.store('tr_corner', 'tile_110.png');
    gn.images.store('bl_corner', 'tile_136.png');
    gn.images.store('br_corner', 'tile_137.png');
    gn.images.store('bullet', 'bullet.png');
    // ### LOAD ALL IMAGES ### //
    /*gn.images.store('water', 'rpg/water.png');
    gn.images.store('grass', 'rpg/grass.png');
    gn.images.store('trees', 'rpg/trees.png');
    gn.images.store('mountain', 'rpg/mountain.png');
    gn.images.store('town', 'rpg/town.png');
    gn.images.store('knight', 'rpg/knight.png');
    gn.images.store('mage', 'rpg/mage.png');
    gn.images.store('wolf', 'rpg/wolf.png');
    gn.images.store('skeleton', 'rpg/skeleton.png');
    gn.images.store('dialog', 'rpg/dialog.png');
    gn.images.store('sign', 'rpg/sign.png');
    gn.images.store('laser', 'rpg/laser.png');
    var nr = Math.round(Math.random()*1)+1;
    gn.images.store('princess', 'rpg/princess_'+nr+'.png');*/

    // ### INITIALIZE VARIABLES ### //
    player = Player();

    // ### LOAD STARTING SCENE ### //
    gn.scene.load('scene');

    // Start gn.main();
    requestAnimationFrame(gn.main);
};
gn.load();
