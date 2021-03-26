var movimentFront = 0;
var movimentBack = 0;
var movimentLeft = 0;
var movimentRight = 0;

var vel = 3;

document.onkeydown = function (evt) {
    switch (evt.keyCode) {
        case 87: //w
            movimentFront = 1;
            break;
        case 83: //s
            movimentBack = 1;
            break;
        case 65: //a
            movimentLeft = 1;
            break;
        case 68: //d
            movimentRight = 1;
            break;
    }
};

var intervalo = setInterval(() => {
    if (movimentFront == 1) {
        camera.position.z -= vel * Math.cos(camera.rotation.y)/100;
        camera.position.x -= vel * Math.sin(camera.rotation.y)/100;
    }
    if(movimentBack == 1){
        camera.position.z += vel * Math.cos(camera.rotation.y)/100;
        camera.position.x += vel * Math.sin(camera.rotation.y)/100;
    }
    if(movimentLeft == 1){
        camera.position.z += vel * Math.sin(camera.rotation.y)/100;
        camera.position.x -= vel * Math.cos(camera.rotation.y)/100;
    }
    if(movimentRight == 1){
        camera.position.z -= vel * Math.sin(camera.rotation.y)/100;
        camera.position.x += vel * Math.cos(camera.rotation.y)/100;
    }
}, 10);

document.onkeyup = function (evt) {
    if (evt.keyCode == 87) {
        movimentFront = 0;
    }
    if (evt.keyCode == 83) {
        movimentBack = 0;
    }
    if (evt.keyCode == 65) {
        movimentLeft = 0;
    }
    if (evt.keyCode == 68) {
        movimentRight = 0;
    }
};

document.onmousemove = function (evt){
    if(evt.movementX < 0){
        camera.rotation.y -= (evt.movementX/150);
    }
    else if(evt.movementX > 0){
        camera.rotation.y -= (evt.movementX/150);
    }
}