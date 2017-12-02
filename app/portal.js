function Portal(tileX, tileY) {
    this.x = tileX * gn.TILESIZE + (gn.TILESIZE/2) - 16;
    this.y = tileY * gn.TILESIZE + (gn.TILESIZE/2) - 16;
    this.id = entities.add(this);
    this.image = gn.images.get('portal');
    
    this.draw = function() {
        gn.handle.draw(this.image, (this.x-gn.viewport.x + gn.viewport.centerX) , (this.y-gn.viewport.y + gn.viewport.centerY));
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