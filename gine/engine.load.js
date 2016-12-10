// Must be loaded last
gn.load = function() {
    gn.then = gn.now = Date.now();

    gn.images.store('player_gun', 'survivor1_gun.png');
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
