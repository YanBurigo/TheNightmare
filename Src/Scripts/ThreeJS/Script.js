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

camera.position.z = 64
camera.position.y = 2
camera.position.x = -49.31

if(orbitControlsEnable){
    var controles = new THREE.OrbitControls(camera, render.domElement);
}

var MonsterHitbox;
var PlayerHitbox;
var MonsterHitbox2;
var jumpscareCont = 0;
var monster;
var chave;

function desenhar() {
    render.render(cena, camera);
    requestAnimationFrame(desenhar);

       

    if(jumpscareEnable && colisionLoaded){
        PlayerHitbox.position.set(camera.position.x, camera.position.y, camera.position.z);  //necessário para sincronizar a hitbox do Player com a camera
        if(checkCollision(PlayerHitbox, MonsterHitbox)){
            var jumpscare = document.getElementById("jumpscare")
            jumpscareSound.play();
            jumpscare.innerHTML = '<img src="https://thumbs.gfycat.com/ForkedSnappyAsianelephant-size_restricted.gif" id="jumpscare" style="position:absolute; width:100%; height:100%"/>'
            jumpscareCont ++;
        }
        else if(jumpscareCont > 0){
            var jumpscare = document.getElementById("jumpscare")
            jumpscare.innerHTML = '<div id="jumpscare" />'
            jumpscareCont = 0;

        }
        if(monsterLoaded){
            if(checkCollision(PlayerHitbox, MonsterHitbox2)){
                console.log("Colisão2");
            }
        }
    }
    if(colisionLoaded && cubeLoaded){
        if(checkCollision(PlayerHitbox, cubo)){
            cena.remove(chave)
            velMonster = velMonsterAfterKey;
        }
    }
}
requestAnimationFrame(desenhar);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}