var altura = 5;
var materialLabirinto = new THREE.MeshLambertMaterial({color: 0x2f4538});

var geometriaLabirinto = new THREE.BoxGeometry(1,altura,100);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -50;
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(45,altura,1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -27.5;
labirinto.position.z = -50;
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(50,altura,1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 25;
labirinto.position.z = -50;
cena.add(labirinto);

var geometriaLabirinto = new THREE.BoxGeometry(1,altura,100);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 50;
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(95,altura,1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 2.5;
labirinto.position.z = 50;
cena.add(labirinto);