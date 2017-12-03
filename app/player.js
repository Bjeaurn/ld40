

var TO_RADIANS = Math.PI / 180;

Player.prototype.constructor = Player;

function Player() {
    this.x = 479;
    this.y = 738;
    this.speed = 90;
    this.velocity = 0;
    this.image = gn.images.get('player');
    this.direction = 0;
    this.health = 100;
    this.isHurt = false;
    this.hasCoins = 0;
    
    this.math = {
       halfX: this.image.width/2,
       halfY: this.image.height/2
    }

    this.draw = function() {
        if(this.image && this.x && this.y) {
            if(this.reloading) {
                this.curImage = this.reloadImage;
            } else {
                this.curImage = this.image;
            }
            gn.handle.save();
            gn.handle.translate(gn.viewport.centerX+this.math.halfX, gn.viewport.centerY+this.math.halfY);
            gn.handle.rotate(this.direction * TO_RADIANS);
            gn.handle.draw(this.curImage, -(this.math.halfX), -(this.math.halfY));
            gn.handle.restore();

            gn.handle.text('X: '+gn.round(this.x, 2)+', Y: '+gn.round(this.y,2), 5, 20);
            gn.handle.text('tX: '+gn.round(this.x/gn.TILESIZE)+', Y: '+gn.round(this.y/gn.TILESIZE), 5, 40);
            gn.handle.text('Coins: '+this.hasCoins, 5, 60);
        }
        gn.handle.globalAlpha = 1;

    }

    this.setDirection = function() {
        if(this.dead) return;
        var result = Math.atan2(gn.viewport.centerY - gn.mouse.y + this.math.halfY, gn.viewport.centerX - gn.mouse.x + this.math.halfX);
        this.direction = Math.round(result * 180 / Math.PI) + 180;
    }

    this.move = function() {
        if(this.dead) {
            return;
        }
        if(this.health <= 0) this.die();

        if(this.attackDelayed) {
            if(gn.now - this.attackDelayed > this.attackSpeed)
                this.attackDelayed = false;
        }

      this.velocity = (this.speed * gn.deltaModifier)  - ((this.hasCoins * this.hasCoins) * 0.035);

      var tileID = map.getTile(Math.round(this.x-(this.image.width/2)), Math.round(this.y-(this.image.height/2)));
      var surrounding = map.getSurrounding(this.x, this.y);
      
      if(gn.keyboard.pressed[gn.keyboard.getValue('left')] || gn.keyboard.pressed[gn.keyboard.getValue('a')]) {
        if(tile.get(surrounding.left).passable)
            this.x -= this.velocity;
      }

      if(gn.keyboard.pressed[gn.keyboard.getValue('up')] || gn.keyboard.pressed[gn.keyboard.getValue('w')]) {
        if(tile.get(surrounding.up).passable)
            this.y -= this.velocity;
      }

      if(gn.keyboard.pressed[gn.keyboard.getValue('right')] || gn.keyboard.pressed[gn.keyboard.getValue('d')]) {
        if(tile.get(surrounding.right).passable)
            this.x += this.velocity;
      }

      if(gn.keyboard.pressed[gn.keyboard.getValue('down')] || gn.keyboard.pressed[gn.keyboard.getValue('s')]) {
        if(tile.get(surrounding.down).passable)
            this.y += this.velocity;
      }
    }

    this.attack = function() {
        if(this.dead) { return; } else {
            // if(!this.attackDelayed) {
                // if(this.bullets > 0) {
                //     this.bullets = this.bullets - 1;
                new Projectile(this.x+this.math.halfX, this.y+this.math.halfY, gn.mouse.x-gn.viewport.centerX+this.x+this.math.halfX, gn.mouse.y-gn.viewport.centerY+this.y+this.math.halfY, 1000, 800, 10, this.id, 0, 0, 1);
                // this.attackDelayed = gn.now;
                // }
            // }
        }
    }

    this.hurt = function(damage) {
        if(this.dead) return;
        this.health -= damage;
        this.isHurt = gn.now;
    }

    this.die = function() {
        this.dead = true;
        console.log('You died bro!');
        console.log('You scored '+this.score+' points!');
    }

    return this;
}
