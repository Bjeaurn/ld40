

var TO_RADIANS = Math.PI / 180;

Player.prototype.constructor = Player;

Player.soundreload = new Audio("sound/outofammo.wav");
Player.soundNoAmmo = new Audio("sound/weapload.wav");

Player.soundDie = new Audio("sound/die1.wav");
Player.soundPain = [new Audio("sound/pain1.wav"), new Audio("sound/pain2.wav") ];

function Player() {
    this.x = gn.canvas.ow / 2;
    this.y = gn.canvas.oh / 2;
    this.speed = 70;
    this.velocity = 0;
    this.image = gn.images.get('player_gun');
    this.reloadImage = gn.images.get('player_reload');
    this.direction = 0;
    this.health = 100;
    this.isHurt = false;
    this.hurtAlpha = 0.8;
    this.dead = false;
    this.attackSpeed = 200;
    this.attackDelayed = false;
    this.score = 0;

    this.bullets = this.maxBullets = 12;

    this.draw = function() {
        if(this.image && this.x && this.y) {
            if(this.reloading) {
                this.curImage = this.reloadImage;
            } else {
                this.curImage = this.image;
            }
            gn.handle.save();
            gn.handle.translate(this.x, this.y);
            gn.handle.rotate(this.direction * TO_RADIANS);
            gn.handle.draw(this.curImage, -(this.image.width/2), -(this.image.height/2));
            gn.handle.restore();
        }

        if(this.isHurt || this.dead) {
            this.hurtAlpha -= gn.deltaModifier
            gn.handle.globalAlpha = this.hurtAlpha;
            gn.handle.draw(gn.images.get('blood'), 0, 0);
            if(gn.now - this.isHurt > 400) {
                this.isHurt = false;
                this.hurtAlpha = 0.8;
            }
        }
        gn.handle.globalAlpha = 1;

    }

    this.setDirection = function() {
        if(this.dead) return;
        var result = Math.atan2(this.y - gn.mouse.y, this.x - gn.mouse.x);
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

      this.velocity = this.speed * gn.deltaModifier;

      var tileID = map.getTile(Math.round(this.x-(this.image.width/2)), Math.round(this.y-(this.image.height/2)));
      if(!tile.get(tileID).passable) {
          this.collided = true
      } else {
          this.collided = false;
      }

        if(this.reloading && gn.now - this.reloading > 1000) {
            this.bullets = this.maxBullets;
            this.reloading = false;
            Player.soundNoAmmo.play();
        }

        if(!this.reloading && gn.keyboard.pressed[gn.keyboard.getValue('r')]) {
            this.reloading = gn.now;
            Player.soundreload.play();
        }

      if(gn.keyboard.pressed[gn.keyboard.getValue('left')] || gn.keyboard.pressed[gn.keyboard.getValue('a')]) {
        if(this.collided) {
            this.x += this.velocity + 1;
        }
        this.x -= this.velocity;
      }

      if(gn.keyboard.pressed[gn.keyboard.getValue('up')] || gn.keyboard.pressed[gn.keyboard.getValue('w')]) {
        if(this.collided) {
            this.y += this.velocity + 1;
        }
        this.y -= this.velocity;
      }

      if(gn.keyboard.pressed[gn.keyboard.getValue('right')] || gn.keyboard.pressed[gn.keyboard.getValue('d')]) {
        if(this.collided) {
            this.x -= this.velocity + 1;
        }
        this.x += this.velocity;
      }

      if(gn.keyboard.pressed[gn.keyboard.getValue('down')] || gn.keyboard.pressed[gn.keyboard.getValue('s')]) {
        if(this.collided) {
            this.y -= this.velocity * 2;
        }
        this.y += this.velocity;
      }
    }

    this.attack = function() {
        if(this.dead) { return; } else {
            if(!this.attackDelayed) {
                if(this.bullets > 0) {
                    this.bullets = this.bullets - 1;
                    new Projectile(this.x, this.y, gn.mouse.x, gn.mouse.y, 1000, 800, 10, this.id, 0, 0, 1);
                    this.attackDelayed = gn.now;
                } else {
                    Player.soundNoAmmo.play();
                }
            }
        }
    }

    this.hurt = function(damage) {
        if(this.dead) return;
        var rnd = Math.floor(Math.random() * Player.soundPain.length);
        Player.soundPain[rnd].play();
        this.health -= damage;
        this.isHurt = gn.now;
    }

    this.die = function() {
        Player.soundDie.play();
        this.dead = true;
        console.log('You died bro!');
        console.log('You scored '+this.score+' points!');
    }

    return this;
}
