var materialParedeEnd = new THREE.MeshLambertMaterial({ color: 0x2f4538 });
var paredeEndTexture = new THREE.TextureLoader().load("Assets/Images/Texture/texturaMadeira.webp");
materialParedeEnd.map = paredeEndTexture;

geometriaParedeEnd = new THREE.BoxGeometry(15, altura, 1);
var end = new THREE.Mesh(geometriaParedeEnd, materialParedeEnd);
end.position.y = 2.5;
end.position.x = 0.5;
end.position.z = -65.5;
end.receiveShadow = true;
end.castShadow = true;
posX2.push(end.position.x);
posZ2.push(end.position.z);
tam2.push(15);
cena.add(end);

geometriaParedeEnd = new THREE.BoxGeometry(5, altura, 1);
var end = new THREE.Mesh(geometriaParedeEnd, materialParedeEnd);
end.position.y = 2.5;
end.position.x = 5;
end.position.z = -58.5;
end.receiveShadow = true;
end.castShadow = true;
posX2.push(end.position.x);
posZ2.push(end.position.z);
tam2.push(5);
cena.add(end);

geometriaParedeEnd = new THREE.BoxGeometry(5, altura, 1);
var end = new THREE.Mesh(geometriaParedeEnd, materialParedeEnd);
end.position.y = 2.5;
end.position.x = -4.5;
end.position.z = -58.5;
end.receiveShadow = true;
end.castShadow = true;
posX2.push(end.position.x);
posZ2.push(end.position.z);
tam2.push(5);
cena.add(end);

geometriaParedeEnd = new THREE.BoxGeometry(1, altura, 8);
var end = new THREE.Mesh(geometriaParedeEnd, materialParedeEnd);
end.position.y = 2.5;
end.position.x = -7.5;
end.position.z = -62;
end.receiveShadow = true;
end.castShadow = true;
posX.push(end.position.x);
posZ.push(end.position.z);
tam.push(8);
cena.add(end);

geometriaParedeEnd = new THREE.BoxGeometry(1, altura, 8);
var end = new THREE.Mesh(geometriaParedeEnd, materialParedeEnd);
end.position.y = 2.5;
end.position.x = 7.5;
end.position.z = -62;
end.receiveShadow = true;
end.castShadow = true;
posX.push(end.position.x);
posZ.push(end.position.z);
tam.push(8);
cena.add(end);

var planEndTexture = new THREE.TextureLoader().load("Assets/Images/Texture/texturaChaoMadeira.webp");
var materialEndChao = new THREE.MeshLambertMaterial({ color: 0x333333, map: planEndTexture });

var geometriaEndChao = new THREE.BoxGeometry(15, 0.1, 11);
var chaoEnd = new THREE.Mesh(geometriaEndChao, materialEndChao);
chaoEnd.position.x = 0;
chaoEnd.position.y = -0.1;
chaoEnd.position.z = -60;
chaoSpawn.receiveShadow = true;
cena.add(chaoEnd);