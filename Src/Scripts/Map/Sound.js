const playerwalking = document.getElementById("playerwalking");
const playerruning = document.getElementById("playerruning");

const ambiencemain = document.getElementById("ambiencemain");
const ambiencesecond = document.getElementById("ambiencesecond");

const winSound = document.getElementById("win");

const nightmarewalking1 = document.getElementById("nightmarewalking1");
const nightmarewalking2 = document.getElementById("nightmarewalking2");
const nightmarewalking3 = document.getElementById("nightmarewalking3");
const nightmarewalking4 = document.getElementById("nightmarewalking4");
const nightmarewalking5 = document.getElementById("nightmarewalking5");
const keyMonster = document.getElementById("keyMonster");

const goldenJumpscare = document.getElementById("goldenJumpscareSound");
const jumpscareSound = document.getElementById("jumpscareSound");
var win = setInterval(() => {
    if ((camera.position.x >= -2 && camera.position.x <= 3) && camera.position.z <= -58.0 && start && victoryCont == 0){
        winSound.play();
        var victory = document.getElementById("winScreen")
        victory.innerHTML = '<div id="winScreen" style="text-align: center; position: fixed; color: green; width: 100%; height: 100%; padding-top: 30vh; font-size: 40px; font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif; font-style: italic; background-color: rgba(22, 22, 22, 1);">Victory<br><br><p onclick="restart()">Play Again?</p></div>'
        victoryCont ++;
        document.exitPointerLock();
    }
}, 500);

var nightmareWalking = setInterval(() => {
    arraySounds = ['nightmarewalking1', 'nightmarewalking2', 'nightmarewalking3', 'nightmarewalking4', 'nightmarewalking5'];
    var i = Math.floor(Math.random() * 4);
    var sortedSound = document.getElementById(arraySounds[i]);

    if (startSound && startSound != null && start)
        sortedSound.play();

}, 20000);
var ambienceSound = setInterval(() => {

    if (startSound && startSound != null && start)
        ambiencemain.play();

}, 0);