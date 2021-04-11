const playerwalking = document.getElementById("playerwalking");

const ambiencemain = document.getElementById("ambiencemain");
const ambiencesecond = document.getElementById("ambiencesecond");

const nightmarewalking1 = document.getElementById("nightmarewalking1");
const nightmarewalking2 = document.getElementById("nightmarewalking2");
const nightmarewalking3 = document.getElementById("nightmarewalking3");
const nightmarewalking4 = document.getElementById("nightmarewalking4");
const nightmarewalking5 = document.getElementById("nightmarewalking5");

var nightmareWalking = setInterval(() => {
    arraySounds = ['nightmarewalking1', 'nightmarewalking2', 'nightmarewalking3', 'nightmarewalking4', 'nightmarewalking5'];
    var i = Math.floor(Math.random() * 4);
    var sortedSound = document.getElementById(arraySounds[i]);
    sortedSound.play();
}, 20000);

var ambienceSound = setInterval(() => {
    ambiencemain.play();
}, 0);