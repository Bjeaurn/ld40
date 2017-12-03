// Must be loaded last
gn.load = function() {
    gn.then = gn.now = Date.now();

    gn.images.store('player', 'placeholder-person.png')
    gn.images.store('black', 'black.png');    
    gn.images.store('wall', 'wall.png');    
    gn.images.store('wall-wizard', 'wall-wizard.png');    
    gn.images.store('grass', 'grass.png');
    gn.images.store('coin', 'coin.png');
    gn.images.store('crystal', 'blue-crystal.png');
    gn.images.store('potion', 'potion.png');
    gn.images.store('portal', 'portal.png');
    gn.images.store('portal-off', 'portal-off.png');
    gn.images.store('bullet', 'bullet.png');
    gn.images.store('spider', 'spider.png');
    gn.images.store('banner', 'banner.png');
    gn.images.store('morbi', 'wizard.png');
    // ### INITIALIZE VARIABLES ### //
    player = Player();

    // ### LOAD STARTING SCENE ### //
    gn.startTime = new Date().getTime();
    gn.scene.load('level1');

    // Start gn.main();
    requestAnimationFrame(gn.main);
};
gn.load();
