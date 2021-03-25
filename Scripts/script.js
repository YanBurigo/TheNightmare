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
var cubeGeometry = new THREE.BoxGeometry(2,2,2,1,1,1);
var wireMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:true } )
var PlayerHitbox = new THREE.Mesh( cubeGeometry, wireMaterial );
PlayerHitbox.position.set(-55,2,60)
cena.add(PlayerHitbox)

var hitbox2 = new THREE.Mesh(new THREE.BoxGeometry(1.2,2,1), new THREE.MeshLambertMaterial({color: 0xff4000}));
hitbox2.position.y = 2;
hitbox2.position.x = -55;
hitbox2.position.z = 50;
cena.add(hitbox2);

function desenhar(){
    render.render(cena, camera);
    requestAnimationFrame(desenhar);

    PlayerHitbox.position.set(camera.position.x, camera.position.y, camera.position.z);
    if(checkCollision()){
        console.log("Colisão");
    }
    //console.log(Player.position.x +","+Player.position.y+","+Player.position.z);
}
requestAnimationFrame(desenhar);

function checkCollision(){
    var originPoint = PlayerHitbox.position.clone();

    for (var vertexIndex = 0; vertexIndex < PlayerHitbox.geometry.vertices.length; vertexIndex++)
    {       
        var localVertex = PlayerHitbox.geometry.vertices[vertexIndex].clone();
        var globalVertex = PlayerHitbox.matrix.multiplyVector3(localVertex);
        var directionVector = globalVertex.subSelf( PlayerHitbox.position );

        var ray = new THREE.Ray( PlayerHitbox.position, directionVector.clone().normalize() );
        var collisionResults = ray.intersectObjects( collidableMeshList );
        if ( collisionResults.length > 0 && collisionResults[0].distance < directionVector.length() ) 
        {
            return true;
        }
    }
    return false;
}
