function Portal(tileX, tileY) {
    this.x = tileX * gn.TILESIZE + (gn.TILESIZE/2) - 16;
    this.y = tileY * gn.TILESIZE + (gn.TILESIZE/2) - 16;
    this.id = entities.add(this);
    this.active = false;
    this.imageOff = gn.images.get('portal-off');
    this.imageOn = gn.images.get('portal');
    this.image = this.imageOff;
    
    this.draw = function() {
        gn.handle.draw(this.image, (this.x-gn.viewport.x + gn.viewport.centerX) , (this.y-gn.viewport.y + gn.viewport.centerY));
    }

    this.toggle = function() {
        this.active = !this.active;
        if(this.active) {
            this.image = this.imageOn;
        } else {
            this.image = this.imageOff;
        }
    }

    this.touchingAPortal = function() {
        if(this.isTouching()) {
            this.delete();
            return true;
        }
        return false;
    }

    this.delete = function() {
        entities.remove(this.id);
    }

    this.isTouching = function() {
        return entity.isTouching(this.x, this.y);
    }
}