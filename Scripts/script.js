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

var debugMode = true;       //Variavel de debug responsavel por mostrar elementos invisiveis (ex: hitboxes) caso for true

camera.position.z = 60;
camera.position.y = 2;
camera.position.x = -55;


function desenhar(){
    render.render(cena, camera);
    requestAnimationFrame(desenhar);

    PlayerHitbox.position.set(camera.position.x, camera.position.y, camera.position.z);     //necessário para sincronizar a hitbox do Player com a camera
    if(checkCollision(PlayerHitbox, MonsterHitbox)){
        console.log("Colisão");
    }
}
requestAnimationFrame(desenhar);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }