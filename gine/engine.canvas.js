gn.canvas = document.getElementById("game"); // Handle canvas element

gn.canvas.oncontextmenu = function (){
    return false;
}

// stage dimensions
gn.canvas.ow = 800; // your stage width
gn.canvas.oh = 600; // your stage height
gn.canvas.keepAspectRatio = true;

gn.canvas.onselectstart = function () { return false; } // ie
gn.canvas.onmousedown = function () { return false; } // mozilla

gn.canvas.clear = function() {
    // Store the current transformation matrix
    //gn.handle.save();

    // Use the identity matrix while clearing the canvas
    //gn.handle.setTransform(1, 0, 0, 1, 0, 0);
    gn.handle.clearRect(0, 0, gn.canvas.width,  gn.canvas.height);

    // Restore the transform
    //gn.handle.restore();
};

gn.canvas.goFullscreen = function() {
    if(gn.canvas.requestFullScreen)
        gn.canvas.requestFullScreen();
    else if(gn.canvas.webkitRequestFullScreen)
        gn.canvas.webkitRequestFullScreen();
    else if(gn.canvas.mozRequestFullScreen)
        gn.canvas.mozRequestFullScreen();
}

gn.canvas.doResize = function() {
    // browser viewport size
    var w = window.innerWidth;
    var h = window.innerHeight;

    if (gn.canvas.keepAspectRatio)
    {
        // keep aspect ratio
        var scale = Math.min(w / gn.canvas.ow, h / gn.canvas.oh);
        gn.canvas.scaleX = scale;
        gn.canvas.scaleY = scale;

       // adjust canvas size
       gn.canvas.width = w;
       gn.canvas.height = h;
    }
    else
    {
        // scale to exact fit
        gn.canvas.scaleX = w / gn.canvas.ow;
        gn.canvas.scaleY = h / gn.canvas.oh;

        // adjust canvas size
        gn.canvas.width = gn.canvas.ow * gn.canvas.scaleX;
        gn.canvas.height = gn.canvas.oh * gn.canvas.scaleY;
    }

    if(gn.handle) {
        gn.handle.scale(gn.canvas.scaleX, gn.canvas.scaleY);
    }
    if(gn.screen) {
        gn.screen.update();
    }
}
window.addEventListener('resize', gn.canvas.doResize);
gn.canvas.doResize();
