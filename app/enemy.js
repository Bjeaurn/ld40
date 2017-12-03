Enemy.id = 0;
Enemy.prototype.constructor = Enemy;

Enemy.instances = [];

Enemy.moveAll = function() {
    for(var i in Enemy.instances) {
        Enemy.instances[i].move();
    }
}

Enemy.graceDistance = 250;

function Enemy(startX, startY, lootFn) {
    Enemy.id++;
    this.x = startX
    this.y = startY;
    this.direction = 0;
    this.speed = 50;
    this.maxSpeed = 70;
    this.image = gn.images.get('spider');
    this.direction = 90;
    this.lootFn = lootFn;
        
    this.math = {
        halfX: this.image.width/2,
        halfY: this.image.height/2
    }

    if(this.special==0) {
        this.speed = this.speed * 2;
        this.maxSpeed = this.maxSpeed * 2;
    }
    this.damage = 10;
    this.health = this.maxHealth = 30;
    this.attackDelay = false;
    this.attackDelayTime = Math.floor(Math.random() * 200) + 600;
    this.id = entities.add(this);

    Enemy.instances.push(this);

    this.setDirection = function() {
        var result = Math.atan2(this.y - player.y, this.x - player.x);
        this.direction = Math.round(result * 180 / Math.PI) + 180;
    }

    this.update = function() {
        if(Math.abs(this.x - player.x) < Enemy.graceDistance + (player.coins * 50) && Math.abs(this.y - player.y) < Enemy.graceDistance + (player.coins * 50)) {
            this.setDirection();
            this.trajectory = {};
            this.trajectory.x = gn.round(player.x - this.x);
            this.trajectory.y = gn.round(player.y - this.y);
            var length_of_vector = Math.sqrt((this.trajectory.x * this.trajectory.x) + (this.trajectory.y * this.trajectory.y));
            this.trajectory.x = this.trajectory.x / length_of_vector;
            this.trajectory.y = this.trajectory.y / length_of_vector;
            this.velocity = {};
            
            this.velocity.x = (this.trajectory.x * this.speed) * gn.deltaModifier;
            this.velocity.y = (this.trajectory.y * this.speed) * gn.deltaModifier;

            if(!this.velocity.x) this.velocity.x = 0;
            if(!this.velocity.y) this.velocity.y = 0;

            var correction = +gn.TILESIZE;
            if(this.velocity.x <= 0 || this.velocity.y <= 0) { correction = -(gn.TILESIZE / 4); } else { correction = +(gn.TILESIZE); }

            var tileID = map.getTile(Math.round(this.x-this.math.halfX+this.velocity.x+correction), Math.round(this.y-this.math.halfY+this.velocity.y+correction));
            if(tile.get(tileID).passable) {
                this.x += this.velocity.x;
                this.y += this.velocity.y;
            }

            var dX = Math.round(Math.abs(player.x - this.x));
            var dY = Math.round(Math.abs(player.y - this.y));
            if(dX < 100 && dY < 100) {
                this.speed += 1;
                if(this.speed > this.maxSpeed) this.speed = this.maxSpeed;
            }

            this.attack();
        }
    }

    this.draw = function() {
//        gn.handle.drawImage(gn.images.get('health'), 0, 0, gn.images.get('health').width, gn.images.get('health').height, this.x, this.y, 100, 16);
        if(this.image && this.x && this.y) {
            gn.handle.save();
            gn.handle.translate(this.x-gn.viewport.x+gn.viewport.centerX+this.math.halfX, this.y-gn.viewport.y+gn.viewport.centerY+this.math.halfY);
            gn.handle.rotate(this.direction * TO_RADIANS);
            gn.handle.draw(this.image, -(this.image.width/2), -(this.image.height/2));
            gn.handle.restore();
        }

        // if(this.health < this.maxHealth) {
        //     var width = Math.round((this.health / this.maxHealth) * health.width);

        //     gn.handle.globalAlpha = 0.4;
        //     gn.handle.drawImage(health, 0, 0, width, health.height, this.x - 32, this.y - 30, width, health.height);
        //     gn.handle.globalAlpha = 1;
        // }
    }

    this.hurt = function(damage) {
        this.health -= damage;
        if(this.health <= 0) {
            this.die();
        }
    }

    this.attack = function() {
        if(!this.attackDelay || (gn.now - this.attackDelay) > this.attackDelayTime) {
            var dX = Math.round(Math.abs(player.x - this.x));
            var dY = Math.round(Math.abs(player.y - this.y));
            if(dX < 30 && dY < 30) {
                player.hurt(this.damage);
                this.attackDelay = Date.now();
            }
        }
    }

    this.die = function() {
        var obj;
        for(var i in Enemy.instances) {
            obj = Enemy.instances[i];
            if(obj.id == this.id) {
                Enemy.instances.splice(i, 1);
                entities.remove(this.id);
                this.lootFn(this.x, this.y);
                return;
            }
        }
    }
}
