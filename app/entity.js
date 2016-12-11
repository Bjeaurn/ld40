var entity = {};

var entities = {};
entities.array = [];

entities.add = function(object) {
    entities.array.push(object);
}

entities.remove = function(id) {
    var obj;
    for(var i in entities.array) {
        obj = entities.array[i];
        if(obj.id && obj.id == id) {
            entities.array.splice(i, 1);
            return true;
        }
    }
    return false;
}

entities.newID = function() {
    // Dangerous while removing
    return entities.array.length;
}

entities.drawAll = function() {
    var obj;
    for(var i in entities.array) {
        obj = entities.array[i];
        obj.draw();
    }
}

entities.checkCollision = function() {
    var obj, test;
    var arr = [];
    for(var i in entities.array) {
        obj = entities.array[i];
        entities.setBounds(obj);
        for(var j in entities.array) {
            test = entities.array[j];
            if(test.x && test.y && test.image && !entities.bounds) {
                entities.setBounds(test);
            }
            if(obj.bounds.br > test.bounds.tl || obj.bounds.tl < test.bounds.br || obj.bounds.tr > test.bounds.bl || obj.bounds.bl > test.bounds.tr) {
                arr.push(test);
            }
        }
    }
    //console.log(arr);
}

entities.setBounds = function(obj) {
    if(!obj.bounds) {
        if(obj.image && obj.x && obj.y) {
            obj.bounds = {}
            obj.bounds.tl = obj.x;
            obj.bounds.tr = obj.x + obj.image.width;
            obj.bounds.bl = obj.x + obj.y;
            obj.bounds.br = obj.bounds.tr + obj.y;
        }
    }
}

entity = function() {
    self = {};
    self.id = entities.newID();
    self.x = self.y = self.image = self.width = self.height = undefined;
    self.lastX = self.lastY = undefined;

    self.setImage = function(image) {
        self.image = image;
        self.width = image.width;
        self.height = image.height;
    }

    self.checkCollision = function() {
        theTile = map.getTile(self.x, self.y);
        if(theTile && theTile.passable===false) {
            //console.log('collision!');
            return true;
        }
        return false;
    }

    self.draw = function() {
        if(self.image && self.x && self.y) {
            gn.handle.draw(self.image, self.x, self.y);
        }
    }

    self.delete = function() {
        entities.remove(self.id);
        self = {};
    }

    self.setLastPosition = function() {
        self.lastX = self.x;
        self.lastY = self.y;
    }

    self.resetLastPosition = function() {
        self.x = self.lastX;
        self.y = self.lastY;
    }

    entities.add(self);
    return self;
}

/*
var t1 = new entity();
t1.x = 50;
t1.y = 200;
var img = gn.images.get('hero');
//console.log(gn.images.data);
t1.setImage(img);*/
