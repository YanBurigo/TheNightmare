//Objeto cena é quem gerencia tudo que deve existir em uma cena
var cena = new THREE.Scene();

//Câmera é uma configuração sobre como e de que posição iremos
//Observar a cena
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//Renderizador utilizará a cena e a câmera para exibir a imagem
var render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
//O canvas será construído pelo renderizador
var canvas = render.domElement;
document.body.appendChild(canvas);

camera.position.z = 60;
camera.position.y = 2;
camera.position.x = -55;

//Debug Collision
var cubeGeometry = new THREE.BoxGeometry(1,1,1,1,1,1);
var wireMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:true } )
var PlayerHitbox = new THREE.Mesh( cubeGeometry, wireMaterial );
PlayerHitbox.position.set(-55,2,60)
cena.add(PlayerHitbox)

var debugHitbox = new THREE.Mesh(new THREE.BoxGeometry(1.2,2,1), new THREE.MeshLambertMaterial({color: 0xff4000}));
debugHitbox.position.y = 2;
debugHitbox.position.x = -55;
debugHitbox.position.z = 50;
cena.add(debugHitbox);

function desenhar(){
    render.render(cena, camera);
    requestAnimationFrame(desenhar);

    PlayerHitbox.position.set(camera.position.x, camera.position.y, camera.position.z);
    if(checkCollision(PlayerHitbox, debugHitbox)){
        console.log("Colisão");
    }
}
requestAnimationFrame(desenhar);

function checkCollision(mesh1, mesh2){
    var m1Xposition = mesh1.position.x;
    var m1ZPosition = mesh1.position.z;
    var m1Width = mesh1.geometry.parameters.width;
    var m1Depth = mesh1.geometry.parameters.depth;

    var m2Xposition = mesh2.position.x;
    var m2ZPosition = mesh2.position.z;
    var m2Width = mesh2.geometry.parameters.width;
    var m2Depth = mesh2.geometry.parameters.depth;
    
    return !(m1Xposition > m2Xposition + m2Width 
        || m1Xposition + m1Width < m2Xposition 
        || m1ZPosition > m2ZPosition + m2Depth 
        || m1ZPosition + m1Depth < m2ZPosition);
}
