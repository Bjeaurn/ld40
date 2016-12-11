Enemy.id = 0;
Enemy.prototype.constructor = Enemy;

Enemy.instances = [];

Enemy.moveAll = function() {
    for(var i in Enemy.instances) {
        Enemy.instances[i].move();
    }
}

function Enemy() {
    Enemy.id++;
    this.id = "e"+Enemy.id;
    this.x = Math.random() * 700;
    this.y = Math.random() * 400;
    this.image = gn.images.get('zombie');
    this.direction = 0;
    this.speed = 50;
    this.damage = 10;
    this.health = this.maxHealth = 30;
    this.attackDelay = false;
    this.attackDelayTime = 600;
    entities.add(this);

    Enemy.instances.push(this);

    this.setDirection = function() {
        var result = Math.atan2(this.y - player.y, this.x - player.x);
        this.direction = Math.round(result * 180 / Math.PI) + 180;
    }

    this.move = function() {
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

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.attack();
    }

    this.draw = function() {
//        gn.handle.drawImage(gn.images.get('health'), 0, 0, gn.images.get('health').width, gn.images.get('health').height, this.x, this.y, 100, 16);
        if(this.image && this.x && this.y) {
            gn.handle.save();
            gn.handle.translate(this.x, this.y);
            gn.handle.rotate(this.direction * TO_RADIANS);
            gn.handle.draw(this.image, -(this.image.width/2), -(this.image.height/2));
            gn.handle.restore();
        }

        if(this.health < this.maxHealth) {
            var health = gn.images.get('health_zombie');
            console.log(health);
            var width = Math.round((this.health / this.maxHealth) * health.width);

            gn.handle.globalAlpha = 0.4;
            gn.handle.drawImage(health, 0, 0, width, health.height, this.x - 32, this.y - 30, width, health.height);
            gn.handle.globalAlpha = 1;
        }
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
                return;
            }
        }
    }
}
