gn.keyboard = {};
gn.keyboard.pressed = new Array();

// Handle keyboard controls
window.addEventListener("keydown", function (e) {
    if(!gn.keyboard.pressed[e.keyCode]) {
        gn.keyboard.pressed[e.keyCode] = true;
    }
}, false);

window.addEventListener("keyup", function (e) {
    if(gn.keyboard.pressed[e.keyCode]) {
        delete gn.keyboard.pressed[e.keyCode];
    }
}, false);

gn.keyboard.getValue = function(key) {
    // Switching keys
    switch(key) {
        case 'backspace': return 8;
        case 'shift': return 16;
        case 'enter': return 13;
        case 'space': return 32;
        case 'alt': return 18;
        case '`': return 192;
        //
        case 'left': return 37;
        case 'up': return 38;
        case 'right': return 39;
        case 'down': return 40;
        //
        case 'q': return 81;
        case 'w': return 87;
        case 'e': return 69;
        case 'r': return 82;
        case 't': return 84;
        case 'y': return 89;
        case 'u': return 85;
        case 'i': return 73;
        case 'o': return 79;
        case 'p': return 80;
        case '[': return 219;
        case ']': return 221;
        //
        case 'a': return 65;
        case 's': return 83;
        case 'd': return 68;
        case 'f': return 70;
        case 'g': return 71;
        case 'h': return 72;
        case 'j': return 74;
        case 'k': return 75;
        case 'l': return 76;
        case ';': return 186;
        case "'": return 222;
        case '\\': return 220;
        //
        case 'z': return 90;
        case 'x': return 88;
        case 'c': return 67;
        case 'v': return 86;
        case 'b': return 66;
        case 'n': return 78;
        case 'm': return 77;
        case ',': return 188;
        case '.': return 190;
        case '/': return 191;
        //
        case '0': return 48;
        case '1': return 49;
        case '2': return 50;
        case '3': return 51;
        case '4': return 52;
        case '5': return 53;
        case '6': return 54;
        case '7': return 55;
        case '8': return 56;
        case '9': return 57;
        case '-': return 189;
        case '=': return 187;
    }
};
