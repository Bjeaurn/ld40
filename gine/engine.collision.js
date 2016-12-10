// returns true if there is any overlap
// params: x,y,w,h of two rectangles
gn.collision = function(a, b) {
    if(b instanceof Array) {
        bArray = b;
        for(b in bArray) {
            b.active = true;
            result = gn.collision.doCheck(a, b);
            if(result == true) {
                return true;
            }
        }
        return false;
    } else {
        return gn.collision.doCheck(a, b);
    }
}

gn.collision.doCheck = function(a, b) {
    var x1 = a.x;
    var y1 = a.y;
    var w1 = a.width;
    var h1 = a.height;
    var x2 = b.x;
    var y2 = b.y;
    var w2 = b.width;
    var h2 = b.height;
    if(a.isCentered) {
       x1 = x1 - (w1 / 2);
       y1 = y1 - (h1 / 2);
    }
    if(b.isCentered) {
        x2 = x2 - (w2 / 2);
        y2 = y2 - (h2 / 2);
    }
    return gn.collision.doMath(x1, y1, w1, h1, x2, y2, w2, h2);
}

// returns true if collision
gn.collision.doMath = function(x1, y1, w1, h1, x2, y2, w2, h2) {
    return x1 < x2 + w2 &&
                 x1 + w1 > x2 &&
                 y1 < y2 + h2 &&
                 y1 + h1 > y2;
}
