//Que tal uma luz ambiente com média intensidade?
var luzAmbiente = new THREE.AmbientLight(0x333333);
luzAmbiente.intensity = globalLighting;
cena.add(luzAmbiente);