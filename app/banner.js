var Banners = {};

Banners.instances = [];

Banners.add = function(obj) {
    Banners.instances.push(obj);
    return Banners.instances.length;
}

Banners.drawAll = function() {
    Banners.instances.forEach(banner => banner.draw())
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

    this.id = Banners.add(this);

    this.draw = function() {
        gn.handle.draw(this.backgroundImage, this.x, this.y+this.extraY);
        if(this.extraY > 0 && !this.closing) {
           this.extraY--;
        } else {
            this.showText = true;
        }

        if(this.showText === true) {               
            gn.handle.text(this.text + ' ('+this.duration+')', this.x + 25, this.y + 75 + this.extraY, '16px Helvetica', '0,0,0', this.fade);
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
    }

    this.remove = function() {

    }
}