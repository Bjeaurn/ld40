gn.mouse = {};

gn.mouse.x = 0;
gn.mouse.y = 0;

gn.mouse.getMousePosition = function(evt) {
    // return relative mouse position
    var mouseX = Math.round((evt.clientX - gn.canvas.offsetLeft) / gn.canvas.scaleX);
    var mouseY = Math.round((evt.clientY - gn.canvas.offsetTop + window.pageYOffset) / gn.canvas.scaleY);
    //console.log(mouseX+':'+mouseY);
    return {
      x: mouseX,
      y: mouseY
    };
};

gn.canvas.addEventListener('mousedown', function(evt) {
    /*if(evt.which==1) { // Left click
        gn.mouse.isClicked = true;
        gn.mouse.start = {};
        gn.mouse.mousePosition = gn.mouse.curPosition = gn.mouse.getMousePosition(evt);
    }*/
    gn.mouse.mousePosition = gn.mouse.getMousePosition(evt);
    player.attack();
    /*if(evt.which==3) { // Right click
        //console.log(gn.selected);
        gn.mouse.curPosition = gn.mouse.getMousePosition(evt);
        var obj;
        for(var i in gn.selected) {
            obj = gn.selected[i];
            obj.moveTo.x = Math.round(gn.mouse.curPosition.x + gn.viewport.x);
            obj.moveTo.y = Math.round(gn.mouse.curPosition.y + gn.viewport.y);
        }
        //console.log('command');
    }   */
}, false);

gn.canvas.addEventListener('mousemove', function(evt) {
    var tmp = gn.mouse.getMousePosition(evt);
    gn.mouse.x = tmp.x;
    gn.mouse.y = tmp.y;
});

gn.canvas.addEventListener('mouseup', function(evt) {
    /*if(evt.which==1) {
        gn.mouse.isClicked = false;
        if(!gn.player) {
            gn.viewport.lastX = gn.viewport.lastY = false;
        }
        gn.mouse.curPosition = gn.mouse.getMousePosition(evt);
        //console.log(gn.mouse.mousePosition.x+', '+gn.mouse.mousePosition.y+' - '+gn.mouse.curPosition.x+', '+gn.mouse.curPosition.y);
        gn.selected = Entity.findInRange(Math.round(gn.mouse.mousePosition.x + gn.viewport.x), Math.round(gn.mouse.mousePosition.y + gn.viewport.y), Math.round(gn.mouse.curPosition.x + gn.viewport.x), Math.round(gn.mouse.curPosition.y + gn.viewport.y), {team: player.team, select: true});
        //console.log(results);
    }
    /*
    if(gn.mapeditor && gn.mouse.start) {
        var sX = gn.mouse.start.x;
        var sY = gn.mouse.start.y;
        var mousePosition = gn.mouse.getMousePosition(evt);
        var mX = Math.ceil((gn.viewport.x+mousePosition.x)/gn.TILESIZE);
        var mY = Math.ceil((gn.viewport.y+mousePosition.y)/gn.TILESIZE);

        if(sX<=mX) {
            startX = sX;
            endX = mX;
        } else {
            startX = mX;
            endX = sX;
        }
        if(sY<=mY) {
            startY = sY;
            endY = mY;
        } else {
            startY = mY;
            endY = sY;
        }

        for(var i = startX; i < endX; i++) {
            for(var j = startY; j < endY; j++) {
                gn.mapeditor.edit(i, j)
            }
        }
    }*/
});
