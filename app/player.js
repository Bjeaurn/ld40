
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

    self.draw = function() {
      if(self.image && self.x && self.y) {
        gn.handle.save();
        gn.handle.translate(self.x, self.y);
        gn.handle.rotate(self.direction * TO_RADIANS);
        gn.handle.draw(self.image, -(self.image.width/2), -(self.image.height/2));
        gn.handle.restore();
      }
    }

    self.setDirection = function() {
        var result = Math.atan2(self.y - gn.mouse.y, self.x - gn.mouse.x);
        self.direction = Math.round(result * 180 / Math.PI) + 180;
    }

    self.move = function() {

      self.velocity = self.speed * gn.deltaModifier;

      if(gn.keyboard.pressed[gn.keyboard.getValue('left')] || gn.keyboard.pressed[gn.keyboard.getValue('a')]) {
        self.x -= self.velocity;
      }

      if(gn.keyboard.pressed[gn.keyboard.getValue('up')] || gn.keyboard.pressed[gn.keyboard.getValue('w')]) {
        self.y -= self.velocity;
      }

      if(gn.keyboard.pressed[gn.keyboard.getValue('right')] || gn.keyboard.pressed[gn.keyboard.getValue('d')]) {
        self.x += self.velocity;
      }

      if(gn.keyboard.pressed[gn.keyboard.getValue('down')] || gn.keyboard.pressed[gn.keyboard.getValue('s')]) {
        self.y += self.velocity;
      }
    }

    self.attack = function() {
        console.log('shoot it!');
    }

    return self;
}
