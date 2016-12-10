
Projectile.id = 0;
Projectile.instances = [];

Projectile.prototype = new Entity(true);
Projectile.prototype.constructor = Projectile;


function Projectile(startX, startY, endX, endY, distance, speed, damage, owner, team, color, uniqueID) {
    if(!color) { color = 1; }
    Entity.call(this);
    this.team = team;
    this.id = Projectile.id;
    //console.log(this.id);
    Projectile.id++
    this.startTime = Date.now();
    this.x = this.startX = startX;
    this.y = this.startY = startY;
    this.flying = true;
    this.endX = endX;
    this.endY = endY;
    this.distance = distance;
    this.speed = speed;
    this.damage = damage;
    this.radius = 1;
    this.softRadius = 10;
    this.owner = owner;
    this.image = gn.images.get('laser'+color);
    this.color = color;
    this.width = this.image.width;
    this.height = this.image.height;
    this.uniqueID = this.uniqueID;
    this.type = 'Projectile';

    this.move = function() {
        if(this.flight_time && this.flight_time <= 0) {
            this.delete();
        }
        if(this.checkCollision()) {
            this.delete();
        } else {
            this.checkEnvironment();
        }
        if(this.collide) {
            if(this.collide.type=='hard') {
                sendHit(this.uniqueID, this.collide.with);
                //this.collide.with.hurt(this.damage);
                this.delete();
            }
        }

        if(!this.trajectory || !this.velocity) {
            this.trajectory = {};
            this.trajectory.x = gn.round(this.endX - this.startX);
            this.trajectory.y = gn.round(this.endY - this.startY);
            //console.log(this.endX+', '+this.endY);
            var length_of_vector = Math.sqrt((this.trajectory.x * this.trajectory.x) + (this.trajectory.y * this.trajectory.y));
            this.trajectory.x = this.trajectory.x / length_of_vector;
            this.trajectory.y = this.trajectory.y / length_of_vector;
            this.velocity = {};
            this.velocity.x = (this.trajectory.x * this.speed);
            this.velocity.y = (this.trajectory.y * this.speed);
            this.flight_time = this.distance / this.speed;
        }
        this.flight_time -= (gn.deltaModifier);
        this.y = this.y + this.velocity.y * gn.deltaModifier;
        this.x = this.x + this.velocity.x * gn.deltaModifier;
    }

    Projectile.instances.push(this);
}

Projectile.prototype.hurt = function(damage) {
    this.delete();
}

Projectile.getByOwnId = function(id, owner) {
    var obj;
    for(var i in Projectile.instances) {
        obj = Projectile.instances[i];
        if(obj.id == id && obj.owner == owner) return obj;
    }
    return false;
}

Projectile.moveAll = function() {
    for(var i = 0, len = Projectile.instances.length; i<len;i++) {
        if(Projectile.instances[i]) {
            Projectile.instances[i].move();
        }
    }
}

Projectile.prototype.delete = function() {
    Entity.prototype.delete.call(this);
    for(var i in Projectile.instances) {
        if(Projectile.instances[i].id == this.id) {
            Projectile.instances.splice(i, 1);
            break;
        }
    }
}

Projectile.prototype.checkEnvironment = function() {
    var ents = Entity.selectInRadius(this.x, this.y, this.softRadius*2, { notTeam: this.team });
    if(ents.length>0) {
        // TODO Check actual collision
        // TODO Extend with "collision prevention", CMD+F in CNC for: moveTo:function(

        for(var i=0, len = ents.length; i<ents.length;i++) {
            var otherUnit = ents[i];
	        collision = this.collision(otherUnit);
            if(collision) {
                this.collide = collision;
                this.collide.with = otherUnit;
                //console.log(this.collide);
                //console.log(collision);
                if(collision.type=='hard') {
                    return;
                } else if(collision.type=='soft') {
                    //console.log('soft');
                    //this.moveTo = {};
                } else if(collision.type=='soft-hard') {
                    //console.log('soft-hard');
                }
            } else {
                this.collide = false;
            }
	    }
    }
}

Projectile.prototype.draw = function() {
    gn.handle.draw(this.image, this.x-gn.viewport.x, this.y-gn.viewport.y);
}
