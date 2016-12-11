Box.instances = [];

Box.prototype.constructor = Box;

Box.soundHit = [ new Audio("sound/hit04.wav"), new Audio("sound/hit04.wav"),new Audio("sound/hit04.wav"),new Audio("sound/hit04.wav"),new Audio("sound/hit04.wav"),new Audio("sound/hit04.wav"),new Audio("sound/hit04.wav"),new Audio("sound/hit04.wav"), new Audio("sound/hit04.wav") ];

Box.soundHitLast = 0;

Box.drawAll = function() {
    for(var i in Box.instances) {
        Box.instances[i].draw();
    }
}

BoxGroup.prototype.constructor = BoxGroup;

BoxGroup.deleted = [];

function BoxGroup(position) {
    if(position==1) {
        new Box(0,0, 50, 1);
        new Box(1,0, 50, 2);
        new Box(0,1, 50, 3);
    }
    if(position==2) {
        new Box(0,7, 50, 4);
        new Box(0,8, 50, 5);
        new Box(1,8, 50, 6);
    }

    if(position==3) {
        new Box(10,0, 50, 7);
        new Box(11,0, 50, 8);
        new Box(11,1, 50, 9);
    }
}

BoxGroup.positions = [1, 2, 3];

BoxGroup.check = function() {
    for(var i in BoxGroup.positions) {
        if(BoxGroup.positions[i]== 1) {
            if(containsAll([1, 2, 3], BoxGroup.deleted)) {
                BoxGroup.positions.splice(i, 1);
                Enemy.openSpawn(1);
            }
        }

        if(BoxGroup.positions[i]== 2) {
            if(containsAll([4, 5, 6], BoxGroup.deleted)) {
                BoxGroup.positions.splice(i, 1);
                Enemy.openSpawn(2);
            }
        }

        if(BoxGroup.positions[i]== 3) {
            if(containsAll([7, 8, 9], BoxGroup.deleted)) {
                BoxGroup.positions.splice(i, 1);
                Enemy.openSpawn(3);
            }
        }
    }
}

BoxGroup.destroyRandom = function() {
    Box.instances[Math.floor(Math.random() * Box.instances.length)].hurt(50);
}

function containsAll(needles, haystack){
  for(var i = 0 , len = needles.length; i < len; i++){
     if($.inArray(needles[i], haystack) == -1) return false;
  }
  return true;
}

BoxGroup.delete = function(id) {
    BoxGroup.deleted.push(id);
}

function Box(tX, tY, health, id) {
    this.id = id;
    this.x = tX * gn.TILESIZE;
    this.x = tX * gn.TILESIZE;
    this.y = tY * gn.TILESIZE;
    this.health = health;
    this.boxImage = gn.images.get('box');

    Box.instances.push(this);

    this.draw = function() {
        gn.handle.draw(this.boxImage, this.x, this.y);
    }

    this.delete = function() {
        for(var i in Box.instances) {
            if(Box.instances[i].id == this.id) {
                Box.instances.splice(i, 1);
                return;
            }
        }
    }

    this.hurt = function(damage) {
        this.health -= damage;
        Box.soundHit[Box.soundHitLast].play();
        Box.soundHitLast++;
        if(Box.soundHitLast >= Box.soundHit.length) Box.soundHitLast = 0;
        if(this.health<=0) {
            BoxGroup.delete(this.id);
            this.delete();
            BoxGroup.check();
        }
    }
}
