gn.scene = {};
gn.scene.folder = "scenes";
gn.scene.loaded = false;

scene = {};
gn.scene.current = false;

gn.scene.load = function(sceneName) {
    var file = gn.scene.folder+"/"+sceneName+".js";
    $.getScript(file, function(data, textStatus, jqxhr) {
        gn.scene.loaded = true;
        gn.scene.current = sceneName;
        if(gn.debug) {
            console.log('Scene: '+sceneName+' loaded');
        }
       /*console.log(data); //data returned
       console.log(textStatus); //success
       console.log(jqxhr.status); //200
       console.log('Load was performed.');*/
    })
    .fail(function( jqxhr, settings, exception) {
        console.log('=== Loading of scene failed: "'+file+'" ===');
        throw(exception);
    });
}

gn.scene.tick = function() {
    if(gn.scene.loaded) {
        scene.tick();
        return true;
    }
    return false;
}

gn.scene.draw = function() {
    if(gn.scene.loaded) {
        scene.draw();
        //return true;
    }
    return false;
}

gn.scene.reset = function () {
    gn.scene.load(gn.scene.current);
}
