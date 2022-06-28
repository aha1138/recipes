// Preload image

var images = new Array();

function preloadImages(){
    for (i=0; i < preloadImages.arguments.length; i++){
        images[i] = new Image();

        images[i].src = preloadImages.arguments[1];
    }
}

preloadImages("cake.jpeg","./images/cinnamon_rolls.jpg","dougnuts.jpeg");