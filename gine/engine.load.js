// Must be loaded last
gn.load = function() {
    gn.then = gn.now = Date.now();

    gn.images.store('player', 'placeholder-person.png')
    gn.images.store('black', 'black.png');    
    gn.images.store('wall', 'wall.png');    
    gn.images.store('tile3', 'tile3.png');    
    gn.images.store('tile4', 'tile4.png');
    gn.images.store('coin', 'coin.png');
    gn.images.store('portal', 'portal.png');
    gn.images.store('bullet', 'bullet.png');
    
    // ### INITIALIZE VARIABLES ### //
    player = Player();

    // ### LOAD STARTING SCENE ### //
    gn.scene.load('level1');

    // Start gn.main();
    requestAnimationFrame(gn.main);
};
gn.load();
