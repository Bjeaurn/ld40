gn.images = {};
gn.images.data = [];

gn.images.folder = "assets/images";

gn.images.store = function(name, imgSrc) {
    var newid = gn.images.data.length;
    var image  = [name, new Image(), false];   // format as explained: [id#, Image, loaded?]

    image[1].src    = gn.images.folder+'/'+imgSrc;
    image[1].onload = function()
    {
        image[2] = true;
    }

    gn.images.data[newid] = image;   // store this tile
};

gn.images.get = function(name) {
    var i;
    for(i=0; i<gn.images.data.length; i++)
    {
      if(gn.images.data[i][0] == name)
      {
         return gn.images.data[i][1];   // return the image object
      }
    }
    return false;
};
