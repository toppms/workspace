const body = document.querySelector("body");
const IMG_NUMBER = 3;
//Math.floor = 버림
//Math.ceiling = 올림 


function paintImage(imgNumber) {
    const image = new Image();
    image.src = `imges/${imgNumber + 1}.jpg`;
    body.prepend(image);
    image.classList.add("bgImage");
}
function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER); 
    return number;
    
}
function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();