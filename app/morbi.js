function Morbi(x, y) {
    this.x = x;
    this.y = y;
    this.image = gn.images.get('morbi');
    this.direction = 180;
    this.id = entities.add(this);
    Enemy.instances.push(this);

    this.math = {
        halfX: this.image.width / 2,
        halfY: this.image.height / 2
    };


    this.draw = function() {
        gn.handle.save();
        gn.handle.translate(this.x-gn.viewport.x+gn.viewport.centerX+this.math.halfX, this.y-gn.viewport.y+gn.viewport.centerY+this.math.halfY);
        gn.handle.rotate(this.direction * TO_RADIANS);
        gn.handle.draw(this.image, -(this.image.width/2), -(this.image.height/2));
        gn.handle.restore();
    }

    this.hurt = function() {
        new FastBanner("Morbi: You can\'t hurt me with your puny bullets!", 100);
        console.log(Banners);
    }
}