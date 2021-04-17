var materialParedeSpawn = new THREE.MeshLambertMaterial({ color: 0x2f4538 });
var paredeSpawnTexture = new THREE.TextureLoader().load("Assets/Images/Texture/texturaMadeira.webp");
materialParedeSpawn.map = paredeSpawnTexture;

var geometriaParedeSpawn = new THREE.BoxGeometry(1, altura, 8);
var paredeSpawn = new THREE.Mesh(geometriaParedeSpawn, materialParedeSpawn);
paredeSpawn.position.y = 2.5;
paredeSpawn.position.x = -48;
paredeSpawn.position.z = 62;
posX.push(paredeSpawn.position.x);
posZ.push(paredeSpawn.position.z);
tam.push(8);
paredeSpawn.receiveShadow = true;
paredeSpawn.castShadow = true;
cena.add(paredeSpawn);

var geometriaParedeSpawn = new THREE.BoxGeometry(1, altura, 8.3);
var paredeSpawn = new THREE.Mesh(geometriaParedeSpawn, materialParedeSpawn);
paredeSpawn.position.y = 2.5;
paredeSpawn.position.x = -57.5;
paredeSpawn.position.z = 61.650;
posX.push(paredeSpawn.position.x);
posZ.push(paredeSpawn.position.z);
tam.push(8.3);
paredeSpawn.receiveShadow = true;
paredeSpawn.castShadow = true;
cena.add(paredeSpawn);

var geometriaParedeSpawn = new THREE.BoxGeometry(10, altura, 1);
var paredeSpawn = new THREE.Mesh(geometriaParedeSpawn, materialParedeSpawn);
paredeSpawn.position.y = 2.5;
paredeSpawn.position.x = -53;
paredeSpawn.position.z = 66;
posX2.push(paredeSpawn.position.x);
posZ2.push(paredeSpawn.position.z);
tam2.push(10);
paredeSpawn.receiveShadow = true;
paredeSpawn.castShadow = true;
cena.add(paredeSpawn);

var geometriaParedeSpawn = new THREE.BoxGeometry(5, altura, 1);
var paredeSpawn = new THREE.Mesh(geometriaParedeSpawn, materialParedeSpawn);
paredeSpawn.position.y = 2.5;
paredeSpawn.position.x = -50.5;
paredeSpawn.position.z = 58;
posX2.push(paredeSpawn.position.x);
posZ2.push(paredeSpawn.position.z);
tam2.push(5);
paredeSpawn.receiveShadow = true;
paredeSpawn.castShadow = true;
cena.add(paredeSpawn);

var planSpawnTexture = new THREE.TextureLoader().load("Assets/Images/Texture/texturaChaoMadeira.webp");
var materialSpawnChao = new THREE.MeshLambertMaterial({ color: 0x333333, map: planSpawnTexture });

var geometriaSpawnChao = new THREE.BoxGeometry(9.5, 0.1, 9);
var chaoSpawn = new THREE.Mesh(geometriaSpawnChao, materialSpawnChao);
chaoSpawn.position.x = -52.5;
chaoSpawn.position.y = 0.1;
chaoSpawn.position.z = 61.5;
chaoSpawn.receiveShadow = true;
cena.add(chaoSpawn);