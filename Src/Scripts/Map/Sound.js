const playerwalking = document.getElementById("playerwalking");

const ambiencemain = document.getElementById("ambiencemain");
const ambiencesecond = document.getElementById("ambiencesecond");

const winSound = document.getElementById("win");

const nightmarewalking1 = document.getElementById("nightmarewalking1");
const nightmarewalking2 = document.getElementById("nightmarewalking2");
const nightmarewalking3 = document.getElementById("nightmarewalking3");
const nightmarewalking4 = document.getElementById("nightmarewalking4");
const nightmarewalking5 = document.getElementById("nightmarewalking5");


const jumpscareSound = document.getElementById("jumpscareSound");

var win = setInterval(() => {
    if ((camera.position.x >= -1.55 && camera.position.x <= 5) && (camera.position.z <= -57.5 && camera.position.z >= -58.0)) {
        winSound.play();
    }
}, 500);

var nightmareWalking = setInterval(() => {
    arraySounds = ['nightmarewalking1', 'nightmarewalking2', 'nightmarewalking3', 'nightmarewalking4', 'nightmarewalking5'];
    var i = Math.floor(Math.random() * 4);
    var sortedSound = document.getElementById(arraySounds[i]);
    if(startSound && startSound!=null){
        sortedSound.play();
    }
}, 20000);
if(startSound && startSound!=null){
    var ambienceSound = setInterval(() => {
        ambiencemain.play();
    }, 0);
}