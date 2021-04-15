var altura = 5;
var materialLabirinto = new THREE.MeshLambertMaterial({ color: 0x2f4538 });
var mazeTexture = new THREE.TextureLoader().load("Assets/Images/Texture/texturaLabirinto.webp");
materialLabirinto.map = mazeTexture;


var geometriaLabirinto = new THREE.BoxGeometry(1, altura, 115);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -57.5;
labirinto.position.z = 0;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(115);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -53;
labirinto.position.z = 66;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);


var geometriaLabirinto = new THREE.BoxGeometry(1, altura, 8);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -48;
labirinto.position.z = 62;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(8);
cena.add(labirinto);

var geometriaLabirinto = new THREE.BoxGeometry(1, altura, 8.3);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -57.5;
labirinto.position.z = 61.650;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(8.3);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(55, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -30;
labirinto.position.z = -57.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(55);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(55, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 30;
labirinto.position.z = -57.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(55);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 115);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 57.5;
labirinto.position.z = 0;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(115);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(110, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 2.5;
labirinto.position.z = 57.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(110);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(15, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 0.5;
labirinto.position.z = -65.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -42.5;
labirinto.position.z = -55;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 25);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -52.5;
labirinto.position.z = -41;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(25);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -47.5;
labirinto.position.z = -53;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 21);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -2.5;
labirinto.position.z = -47.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(21);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -7.5;
labirinto.position.z = -55;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -12.5;
labirinto.position.z = -55;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -17.5;
labirinto.position.z = -52;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -13;
labirinto.position.z = -47;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(45, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -25;
labirinto.position.z = -42;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(45);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -4.5;
labirinto.position.z = -37;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -22.5;
labirinto.position.z = -47;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(15, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -29.5;
labirinto.position.z = -52;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(20, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -37.5;
labirinto.position.z = -47.2;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(20);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 25);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -47.5;
labirinto.position.z = -35;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(25);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(30, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -32.5;
labirinto.position.z = -37;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(30);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -12.5;
labirinto.position.z = -40;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -50;
labirinto.position.z = -23;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(50, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -32.5;
labirinto.position.z = -18;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(50);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -45;
labirinto.position.z = -28;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -42.5;
labirinto.position.z = -30;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -42.5;
labirinto.position.z = -20;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -37.5;
labirinto.position.z = -35;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 15);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -32.5;
labirinto.position.z = -25;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -27.5;
labirinto.position.z = -35;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -22.5;
labirinto.position.z = -30;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -17.5;
labirinto.position.z = -35;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -12.5;
labirinto.position.z = -30;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -37.5;
labirinto.position.z = -25;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(20, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -28;
labirinto.position.z = -28;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(20);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(6, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -15;
labirinto.position.z = -33;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(6);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(25, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -15;
labirinto.position.z = -23;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(25);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(15, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -45;
labirinto.position.z = -13;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(15, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -25;
labirinto.position.z = -13;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 15);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -52.5;
labirinto.position.z = -6;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 45);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -17.5;
labirinto.position.z = 9;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(45);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 45);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -22.5;
labirinto.position.z = 14;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(45);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(25, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -35;
labirinto.position.z = -8;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(25);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 19.5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -47;
labirinto.position.z = 1.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(19.5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 35);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -27.5;
labirinto.position.z = 14;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(35);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(15, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -35;
labirinto.position.z = -3;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -48;
labirinto.position.z = 2;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);


geometriaLabirinto = new THREE.BoxGeometry(1, altura, 8);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -7.5;
labirinto.position.z = -62;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(8);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 8);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 7.5;
labirinto.position.z = -62;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(8);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -40;
labirinto.position.z = 7;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 15);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -37.5;
labirinto.position.z = 4;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -32.5;
labirinto.position.z = 4;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -30;
labirinto.position.z = 6;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -35;
labirinto.position.z = 11;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(20, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -42.7;
labirinto.position.z = 16;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(20);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -45;
labirinto.position.z = 11;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 21);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -32.5;
labirinto.position.z = 21;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(21);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(15, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -30;
labirinto.position.z = 36;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(35, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -30;
labirinto.position.z = 46;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(35);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -32.5;
labirinto.position.z = 41;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(15, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -45;
labirinto.position.z = 51;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 7);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -52.5;
labirinto.position.z = 54;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(7);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 25);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -52.5;
labirinto.position.z = 34;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(25);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -52.5;
labirinto.position.z = 11.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -55;
labirinto.position.z = 7;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(15, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -45;
labirinto.position.z = 22;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 15);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -37.5;
labirinto.position.z = 29;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 20);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -47.5;
labirinto.position.z = 36.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(20);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -45.5;
labirinto.position.z = 27;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -40.5;
labirinto.position.z = 32;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -42.5;
labirinto.position.z = 36.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -40.5;
labirinto.position.z = 41;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 7);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -27.5;
labirinto.position.z = 54;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(7);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -30;
labirinto.position.z = 51;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -15;
labirinto.position.z = 51;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(40, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 17;
labirinto.position.z = 51;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(40);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 47;
labirinto.position.z = 51;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(30, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -13;
labirinto.position.z = 41;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(30);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -13;
labirinto.position.z = 48;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -22;
labirinto.position.z = 48;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -8;
labirinto.position.z = 46.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 20);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -3;
labirinto.position.z = 31.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(20);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 6);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -3;
labirinto.position.z = 48.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(6);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 2;
labirinto.position.z = 46;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(25, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 24.5;
labirinto.position.z = 46;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(25);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 55;
labirinto.position.z = 46;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 50;
labirinto.position.z = 41;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 47.5;
labirinto.position.z = 45.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 20);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 42.5;
labirinto.position.z = 40.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(20);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 20);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 52.5;
labirinto.position.z = 26.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(20);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 47.5;
labirinto.position.z = 36;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 15);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 37.5;
labirinto.position.z = 44;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 35.5;
labirinto.position.z = 36;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 18;
labirinto.position.z = 36;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 18;
labirinto.position.z = 41;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 30.5;
labirinto.position.z = 41;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 27.5;
labirinto.position.z = 36.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 12.5;
labirinto.position.z = 40.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(25, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 35.5;
labirinto.position.z = 31;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(25);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 20);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 47.5;
labirinto.position.z = 21.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(20);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 30);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 7.5;
labirinto.position.z = 31.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(30);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 13;
labirinto.position.z = 31;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(25, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 29.5;
labirinto.position.z = 26;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(25);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 17.5;
labirinto.position.z = 29;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 32.5;
labirinto.position.z = 24;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 42.5;
labirinto.position.z = 21.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 37.5;
labirinto.position.z = 19;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(15, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 35.5;
labirinto.position.z = 16;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 13;
labirinto.position.z = -52.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 23;
labirinto.position.z = -52.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 18;
labirinto.position.z = -50;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 8;
labirinto.position.z = -47.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 3;
labirinto.position.z = -45;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 5;
labirinto.position.z = -52;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(25, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 15;
labirinto.position.z = -43;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(25);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 20.5;
labirinto.position.z = -48;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 45);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 28;
labirinto.position.z = -30;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(45);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 25);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 33;
labirinto.position.z = -35;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(25);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 33;
labirinto.position.z = -13;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 38;
labirinto.position.z = -50;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 48;
labirinto.position.z = -50;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 53;
labirinto.position.z = -47.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 33;
labirinto.position.z = -52;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 48;
labirinto.position.z = -52;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 43;
labirinto.position.z = -48;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(20, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 43;
labirinto.position.z = -43;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(20);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(15, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 50;
labirinto.position.z = -38;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 50;
labirinto.position.z = -33;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 55;
labirinto.position.z = -28;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 50;
labirinto.position.z = -23;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 55;
labirinto.position.z = -18;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 47.5;
labirinto.position.z = -3;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 52;
labirinto.position.z = 2;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 45;
labirinto.position.z = 7;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 45);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 43;
labirinto.position.z = -15.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(45);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 30);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 48;
labirinto.position.z = -17.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(30);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 53;
labirinto.position.z = -12.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 50);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 38;
labirinto.position.z = -13.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(50);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(20, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 42.5;
labirinto.position.z = 12;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(20);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 53;
labirinto.position.z = 7.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 35;
labirinto.position.z = -23;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(6, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 30.5;
labirinto.position.z = -8;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(6);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(20, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 12.5;
labirinto.position.z = -38;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(20);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -2.5;
labirinto.position.z = -33;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 2;
labirinto.position.z = -36;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 30);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 22;
labirinto.position.z = -23;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(30);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 20;
labirinto.position.z = -8;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 20;
labirinto.position.z = -23;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 15;
labirinto.position.z = -13;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 15;
labirinto.position.z = -18;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 12;
labirinto.position.z = -33;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(25, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 0;
labirinto.position.z = -28;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(25);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 7.5;
labirinto.position.z = -30;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 11);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 17.5;
labirinto.position.z = -28;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(11);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 6);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 17.5;
labirinto.position.z = -15.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(6);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 12.5;
labirinto.position.z = -20;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 12.5;
labirinto.position.z = -8.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(40, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 13.5;
labirinto.position.z = -3;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(40);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 35;
labirinto.position.z = 2;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 33;
labirinto.position.z = 0;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 33;
labirinto.position.z = 10;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 28;
labirinto.position.z = 5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(6, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 30.5;
labirinto.position.z = 7.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(6);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 26;
labirinto.position.z = 2.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(25, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 6;
labirinto.position.z = 2.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(25);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 6.5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -7;
labirinto.position.z = -0.25;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(6.5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 23;
labirinto.position.z = 9.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(6, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 25.5;
labirinto.position.z = 11.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(6);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 28;
labirinto.position.z = 16;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(15, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 15;
labirinto.position.z = 7.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 18;
labirinto.position.z = 5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 18;
labirinto.position.z = 15;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 30);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 2.5;
labirinto.position.z = 18;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(30);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 2.5;
labirinto.position.z = 39;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 21;
labirinto.position.z = 17;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(16, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 10.5;
labirinto.position.z = 12;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(16);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(16, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 20.5;
labirinto.position.z = 21.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(16);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 12.5;
labirinto.position.z = 21.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(20, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -7.5;
labirinto.position.z = 21.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(20);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(15, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -15.5;
labirinto.position.z = 31.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(15, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -15.5;
labirinto.position.z = 36;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -10;
labirinto.position.z = 26.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -8;
labirinto.position.z = 29.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -7.5;
labirinto.position.z = 16.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -5;
labirinto.position.z = 6.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -3;
labirinto.position.z = 11.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -8;
labirinto.position.z = 8.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 30.5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -12.5;
labirinto.position.z = 1.75;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(30.5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(5, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -9.5;
labirinto.position.z = -8.5;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 10.5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -7.5;
labirinto.position.z = -13.25;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(10.5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 5);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -17.5;
labirinto.position.z = -26;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(5);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 15);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 2;
labirinto.position.z = -20;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 15);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 7;
labirinto.position.z = -15;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(15);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(1, altura, 16);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = -2.5;
labirinto.position.z = -15.5;
posX.push(labirinto.position.x);
posZ.push(labirinto.position.z);
tam.push(16);
cena.add(labirinto);

geometriaLabirinto = new THREE.BoxGeometry(10, altura, 1);
var labirinto = new THREE.Mesh(geometriaLabirinto, materialLabirinto);
labirinto.position.y = 2.5;
labirinto.position.x = 2;
labirinto.position.z = -8;
posX2.push(labirinto.position.x);
posZ2.push(labirinto.position.z);
tam2.push(10);
cena.add(labirinto);