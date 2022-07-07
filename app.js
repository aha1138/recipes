
var images = [];

function preload() {
    for (var i = 0; i <arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguemnts[i];
    }
}

preload (LOGO.jpg,
        cake.jpeg,
        cinnamon_rolls.jpg,
        dougnuts.jpeg)
