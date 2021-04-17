var geometriaCubo = new THREE.BoxGeometry(1,1,1);
var materialCubo = new THREE.MeshLambertMaterial({color: 0x654321});
var cubeTexture = new THREE.TextureLoader().load("Assets/Images/Texture/texturaCaixa.webp");
materialCubo.map = cubeTexture;

var cubo = new THREE.Mesh(geometriaCubo, materialCubo);
cubo.position.x = 0;
cubo.position.y = 0.5;
cubo.position.z = 39;
cena.add(cubo);

cubeLoaded = true;