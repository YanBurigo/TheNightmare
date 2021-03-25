canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;

document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;
document.exitPointerLock();

if ("onpointerlockchange" in document) {
    document.addEventListener('pointerlockchange', lockChangeAlert, false);
} else if ("onmozpointerlockchange" in document) {
    document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
}
  
function lockChangeAlert() {
    if(document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) {
      console.log('The pointer lock status is now locked');
    } else {
      console.log('The pointer lock status is now unlocked');
    }
}

document.addEventListener('pointerlockerror', lockError, false);
document.addEventListener('mozpointerlockerror', lockError, false);
canvas.requestPointerLock()
function lockError(e) {
  canvas.requestPointerLock()
}

document.onmousedown = function (evt){
    canvas.requestPointerLock()
}