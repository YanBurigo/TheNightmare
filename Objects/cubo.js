//Todo objeto é composto de geometria e de materiais!
var geometriaCubo = new THREE.BoxGeometry(1,1,1);
var materialCubo = new THREE.MeshLambertMaterial({color: 0x59fd8b});

var cubo = new THREE.Mesh(geometriaCubo, materialCubo);
cubo.position.x = 0;
cubo.position.y = 0.5;
cubo.position.z = 39;
cena.add(cubo); //Adicionamos o cubo à cena