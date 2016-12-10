gn.math = {};
var v1, r1;
gn.math.inCircle = function(cX, cY, radius, x, y) {
    v1 = (x-cX)*(x-cX)+(y-cY)*(y-cY);
    r1 = (radius*radius);
    //return v1+' '+r1;
    if(v1<r1) {
        return Math.round(v1);
    }
    return false;
    //return (x-cX)*(x-cX)+(y-cY)*(y-cY) < (radius*radius);
}


gn.math.angle = function(x1, y1, x2, y2) {
    x = x1 - x2;
    y = y1 - y2;
    radians = Math.atan2(y,x);
    angle = radians*180/Math.PI;
    return Math.round(360 - ((angle + 360) % 360));
}

function sortDistance(a,b) {
  if (a.dXY < b.dXY)
     return -1;
  if (a.dXY > b.dXY)
    return 1;
  return 0;
}
