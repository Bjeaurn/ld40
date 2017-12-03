// GINE - Bjeaurn's HTML5/JS gn.
// Namespaced to "gn"
// @Version 0.1
// @Author Bjorn Schijff (@Bjeaurn)

var gn = {};

gn.TILESIZE = 32;
gn.MAXFPS = 60;
gn.debug = false; // DEBUGGING OFF DEFAULT, HIT 'r'
gn.startTime = gn.tickStart = Date.now();
gn.syncs = gn.ticks = 0;

gn.selected = false;

frameCount = 0;

window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || //Chromium
    window.webkitRequestAnimationFrame || //Webkit
    window.mozRequestAnimationFrame || //Mozilla Geko
    window.oRequestAnimationFrame || //Opera Presto
    window.msRequestAnimationFrame || //IE Trident?

    function(callback, element) { //Fallback function
        window.setTimeout(callback, 1000 / gn.MAXFPS);
    }

})();

gn.main = function() {
    gn.tick();
    gn.draw();
};

gn.tick = function() {
	gn.now = Date.now();
	gn.ticks++;
	gn.draws = 0;
    var delta = gn.now - gn.then;
    // if(delta > 10) { delta = 0; }
    gn.deltaModifier = delta / 1000;

    // ###  Game logic updates per tick. ###
    gn.scene.tick();
    gn.viewport.update();
	gn.then = gn.now;
}

gn.draw = function() {
    frameCount++;
    var seconds = (gn.now - gn.startTime) / 1000;
    gn.currentFps = parseInt(frameCount / seconds, 10);
    gn.canvas.clear();
    // ### DRAW ALL GAME ENTITIES ###
    gn.scene.draw();

    if(gn.mouse.isClicked) {
        var width = gn.mouse.curPosition.x - gn.mouse.mousePosition.x;
        var height = gn.mouse.curPosition.y - gn.mouse.mousePosition.y;
        //gn.handle.scale(1,1);
        //gn.handle.clearRect(0,0,gn.canvas.ow, gn.canvas.oh);
        gn.handle.fillStyle = 'rgba(255,255,255,0.4)';
        gn.handle.fillRect(gn.mouse.mousePosition.x, gn.mouse.mousePosition.y, width, height);
        gn.handle.stroke();
    }
	// Update deltatime and request new animation frame. Do math for FPS calculations.
    if(frameCount>=gn.MAXFPS) { frameCount = 0; gn.startTime = Date.now(); }
    requestAnimationFrame(gn.main);
}

gn.round = function (number, decimals) {
    if(decimals>0) {
        return +number.toFixed(decimals);
    }
    return ~~ (0.5 + number);
    //return Math.round(number);
}

gn.floor = function(number) {
    // Refactor to mathematical correct method
    return Math.floor(number);
}


gn.log = function(message) {
    console.log(message);
};
