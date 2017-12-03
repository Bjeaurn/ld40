    var Banners = {};

Banners.instances = [];

Banners.add = function(obj) {
    Banners.instances.push(obj);
    return Banners.instances.length;
}

Banners.drawAll = function() {
    if(Banners.instances.length > 0) {
        Banners.instances[0].draw();
    }
}

function Banner(text, duration) {
    this.text = text;
    this.duration = duration;
    this.backgroundImage = gn.images.get('banner');
    this.x = 100;
    this.y = 480;
    this.extraY = 120;
    this.fade = 0.0;
    this.showText = false;
    this.closing = false;

    Banners.add(this);

    this.draw = function() {
        gn.handle.draw(this.backgroundImage, this.x, this.y+this.extraY);
        if(this.extraY > 0 && !this.closing) {
           this.extraY--;
        } else {
            this.showText = true;
        }

        if(this.showText === true) {
            if(this.text.constructor === Array) {
                this.text.forEach(
                    (t, i) => {
                        gn.handle.text(t, this.x + 25, this.y + 75 + this.extraY + (i*20), '16px Helvetica', '0,0,0', this.fade);
                    }
                )
            }  else { 
                gn.handle.text(this.text, this.x + 25, this.y + 75 + this.extraY, '16px Helvetica', '0,0,0', this.fade);
            }
            if(this.fade < 1 && !this.closing)
                this.fade += 0.05;
        }

        if(this.duration > 0) {
            this.duration--;
        } else {
            this.closing = true;
            this.fade -= 0.05;
            this.extraY++;

            if(this.extraY === 120) { this.remove(); }
        }
        gn.handle.resetColor();
    }

    this.remove = function() {
        Banners.instances.splice(0, 1);
    }
}

function FastBanner(text, duration) {
    this.text = text;
    this.duration = duration;
    this.backgroundImage = gn.images.get('banner');
    this.x = 100;
    this.y = 480;
    this.extraY = 120;
    this.fade = 0.0;
    this.showText = false;
    this.closing = false;

    Banners.add(this);

    this.draw = function() {
        gn.handle.draw(this.backgroundImage, this.x, this.y+this.extraY);
        if(this.extraY > 0 && !this.closing) {
           this.extraY -= 10;
        } else {
            this.showText = true;
        }

        if(this.showText === true) {
            if(this.text.constructor === Array) {
                this.text.forEach(
                    (t, i) => {
                        gn.handle.text(t, this.x + 25, this.y + 75 + this.extraY + (i*20), '16px Helvetica', '0,0,0', this.fade);
                    }
                )
            }  else { 
                gn.handle.text(this.text, this.x + 25, this.y + 75 + this.extraY, '16px Helvetica', '0,0,0', this.fade);
            }
            if(this.fade < 1 && !this.closing)
                this.fade += 0.05;
        }

        if(this.duration > 0) {
            this.duration--;
        } else {
            this.closing = true;
            this.fade -= 0.05;
            this.extraY += 10;

            if(this.extraY === 120) { this.remove(); }
        }
        gn.handle.resetColor();
    }

    this.remove = function() {
        Banners.instances.splice(0, 1);
    }
}