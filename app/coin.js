function Coin(tileX, tileY) {
    this.x = tileX * gn.TILESIZE + (gn.TILESIZE/2) - 8;
    this.y = tileY * gn.TILESIZE + (gn.TILESIZE/2) - 8;
    this.image = gn.images.get('coin');
    this.maxBounce = 4;    
    this.bounceUp = true;    
    this.bounceVal = Math.random() * this.maxBounce;
    this.id = entities.add(this);

    this.draw = function() {
        gn.handle.draw(this.image, (this.x-gn.viewport.x + gn.viewport.centerX) , (this.y-gn.viewport.y + gn.viewport.centerY) - this.bounceVal );
    }

    this.update = function() {
        if (this.isTouching()) {
            scene.addCoin();
            this.delete();
        }
        this.bounce();
    }

    this.delete = function() {
        entities.remove(this.id)
    }

    this.isTouching = function() {
        return entity.isTouching(this.x, this.y);
    }

    this.bounce = function() {
        if(this.bounceUp) {
            this.bounceVal += 0.25;
            if(this.bounceVal>=this.maxBounce) {
                this.bounceUp = false;
            }
        } else {
            this.bounceVal -= 0.5;
            if(this.bounceVal<=-this.maxBounce) {
                this.bounceUp = true;
            }
        }
    }
}