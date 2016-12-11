
var TO_RADIANS = Math.PI / 180;

var Player = function() {
    var self = {};
    self = entity();

    self.x = gn.canvas.ow / 2;
    self.y = gn.canvas.oh / 2;
    self.speed = 70;
    self.velocity = 0;
    self.setImage(gn.images.get('player_gun'));
    self.direction = 0;
    self.health = 100;
    self.isHurt = false;
    self.hurtAlpha = 0.8;
    self.dead = false;
    self.draw = function() {
        if(self.image && self.x && self.y) {
            gn.handle.save();
            gn.handle.translate(self.x, self.y);
            gn.handle.rotate(self.direction * TO_RADIANS);
            gn.handle.draw(self.image, -(self.image.width/2), -(self.image.height/2));
            gn.handle.restore();
        }

        if(self.isHurt || self.dead) {
            self.hurtAlpha -= gn.deltaModifier
            gn.handle.globalAlpha = self.hurtAlpha;
            gn.handle.draw(gn.images.get('blood'), 0, 0);
            if(gn.now - self.isHurt > 400) {
                self.isHurt = false;
                self.hurtAlpha = 0.8;
            }
        }
        gn.handle.globalAlpha = 1;

    }

    self.setDirection = function() {
        if(self.dead) return;
        var result = Math.atan2(self.y - gn.mouse.y, self.x - gn.mouse.x);
        self.direction = Math.round(result * 180 / Math.PI) + 180;
    }

    self.move = function() {
        if(self.dead) {
            return;
        }
        if(self.health <= 0) self.die();

      self.velocity = self.speed * gn.deltaModifier;

      var tileID = map.getTile(Math.round(self.x-(self.image.width/2)), Math.round(self.y-(self.image.height/2)));
      if(!tile.get(tileID).passable) {
          self.collided = true
      } else {
          self.collided = false;
      }

      if(gn.keyboard.pressed[gn.keyboard.getValue('left')] || gn.keyboard.pressed[gn.keyboard.getValue('a')]) {
        if(self.collided) {
            self.x += self.velocity + 1;
        }
        self.x -= self.velocity;
      }

      if(gn.keyboard.pressed[gn.keyboard.getValue('up')] || gn.keyboard.pressed[gn.keyboard.getValue('w')]) {
        if(self.collided) {
            self.y += self.velocity + 1;
        }
        self.y -= self.velocity;
      }

      if(gn.keyboard.pressed[gn.keyboard.getValue('right')] || gn.keyboard.pressed[gn.keyboard.getValue('d')]) {
        if(self.collided) {
            self.x -= self.velocity + 1;
        }
        self.x += self.velocity;
      }

      if(gn.keyboard.pressed[gn.keyboard.getValue('down')] || gn.keyboard.pressed[gn.keyboard.getValue('s')]) {
        if(self.collided) {
            self.y -= self.velocity * 2;
        }
        self.y += self.velocity;
      }
    }

    self.attack = function() {
        if(self.dead) { return; } else {
            new Projectile(self.x, self.y, gn.mouse.x, gn.mouse.y, 1000, 1000, 10, self.id, 0, 0, 1);
        }
    }

    self.hurt = function(damage) {
        if(self.dead) return;
        self.health -= damage;
        self.isHurt = gn.now;
    }

    self.die = function() {
        self.dead = true;
        console.log('You died bro!');

    }

    return self;
}
