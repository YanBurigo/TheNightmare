//Que tal uma luz ambiente com média intensidade?
var luzAmbiente = new THREE.AmbientLight(0x333333);
luzAmbiente.intensity = 2;
cena.add(luzAmbiente);