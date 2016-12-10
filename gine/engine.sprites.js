gn.sprites = {};
gn.sprites.data = [];

gn.sprites.folder = "images";

// Settings work as follows:
/*
{ }
*/
gn.sprites.load = function(source, width, height, settings) {

    var newid = gn.sprites.data.length;
    var image  = [name, new Image(), false];   // format as explained: [id#, Image, loaded?]

    image[1].src    = gn.images.folder+'/'+imgSrc;
    image[1].onload = function()
    {
        image[2] = true;
    }

    gn.images.data[newid] = image;   // store this tile
};

gn.sprites.get = function(name) {
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
