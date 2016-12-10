gn.handle = gn.canvas.getContext("2d");
gn.handle.font = gn.handle.defaultFont = '12px Helvetica';
defaultColor = 'white';

gn.handle.scale(gn.canvas.scaleX, gn.canvas.scaleY);
gn.handle.draw = function(image, x, y, sprite) {
    if(!image) return;
    if(sprite) {
        gn.handle.drawImage(image, sprite.x, sprite.y, sprite.w, sprite.h, x, y, sprite.w, sprite.h);
    } else {
      gn.handle.drawImage(image, x, y);
    }
}

gn.handle.rotateDegrees = function(image, degrees) {
    var radians = degrees * Math.PI / 180;
    gn.bufferHandle.save();
    gn.bufferHandle.rotate(radians);
    gn.bufferHandle.drawImage(image, 0, 0);
    var newImage = gn.bufferHandle.getImageData(0, 0, width, height);
    gn.bufferHandle.restore();
    return newImage;
}

gn.handle.setColor = function(color, alpha) {
    if(alpha!=null && alpha!=1.0) {
        gn.handle.fillStyle = "rgba("+color+", "+alpha+")";
    } else {
        gn.handle.fillStyle = color;
    }
};

gn.handle.reset = function() {
    gn.handle.resetColor();
    gn.handle.lineWidth = 0;
    gn.handle.font = gn.handle.defaultFont;
};

gn.handle.resetColor = function() {
    gn.handle.fillStyle = defaultColor;
};


gn.handle.text = function(text, x, y, font, textcolor, alpha) {
// TODO Alpha shouldn't be inherited from other messages being drawn.
    if(typeof alpha == 'undefined') { alpha = 1.0; }
    gn.handle.font = (font) ? font : '';
    gn.handle.setColor(textcolor, alpha)
    gn.handle.fillText(text, x, y);
};

gn.handle.strokefill = function(text, x, y, font, textcolor, strokecolor) {
    gn.handle.font = (font) ? font : '';
    gn.handle.setColor(textcolor);
    gn.handle.strokeStyle = (strokecolor) ? strokecolor : '' ;
    gn.handle.lineWidth = 2;
    gn.handle.strokeText(text, x, y);
    gn.handle.fillText(text, x, y);
};
