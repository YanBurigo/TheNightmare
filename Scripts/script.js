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

//Todo objeto é composto de geometria e de materiais!
var geometriaCubo = new THREE.BoxGeometry(1,1,1);
var materialCubo = new THREE.MeshLambertMaterial({color: 0x59fd8b});

var cubo = new THREE.Mesh(geometriaCubo, materialCubo);
cena.add(cubo); //Adicionamos o cubo à cena
//Que tal uma luz ambiente com média intensidade?
var luzAmbiente = new THREE.AmbientLight(0x333333);
luzAmbiente.intensity = 2;
cena.add(luzAmbiente);

//Adicionamos um ponto de luz(uma lâmpada?)
var luzPonto = new THREE.PointLight(0x888888);
luzPonto.position.set(2,2,4);
cena.add(luzPonto);

camera.position.z = 5;
function desenhar(){
    render.render(cena, camera);
    requestAnimationFrame(desenhar);
}
requestAnimationFrame(desenhar);

//Variáveis para avaliar o deslocamento do mouse
var xi;
var yi;

canvas.addEventListener("mousedown", function(e){
    xi = e.offsetX;
    yi = e.offsetY;
}, false);
//Evento de movimento do mouse (se há botão pressionado)
canvas.addEventListener("mousemove", function(e){
    if(e.buttons > 0){
        camera.position.x = 8 * (xi - e.offsetX) / canvas.width;
        camera.position.y = 8 * (e.offsetY - yi) / canvas.height;
        cubo.rotation.x = cubo.rotation.x + Math.PI / 45;
    }
}, false)