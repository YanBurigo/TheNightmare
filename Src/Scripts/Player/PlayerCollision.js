
//Hitbox do Player
var cubeGeometry = new THREE.BoxGeometry(1,1,1,1,1,1);
var wireMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe:true } )
var PlayerHitbox = new THREE.Mesh( cubeGeometry, wireMaterial );

PlayerHitbox.position.set(-55,2,60)
if(debugMode == true){
    cena.add(PlayerHitbox)
}

//Hitbox de Debug (p/ testar colisão. Deve ser descartado depois)
var MonsterHitbox = new THREE.Mesh(new THREE.BoxGeometry(2,2,2), new THREE.MeshLambertMaterial({color: 0xff4000}));
MonsterHitbox.position.y = 2;
MonsterHitbox.position.x = -55;
MonsterHitbox.position.z = 48;
if(debugMode == true){
    cena.add(MonsterHitbox);
}

//Método de colisão entre duas "THREE.Mesh". NOTA: essa colisão NÃO leva em consideração o eixo Y.
function checkCollision(mesh1, mesh2){
    var m1Xposition = mesh1.position.x;
    var m1ZPosition = mesh1.position.z;
    var m1Width = mesh1.geometry.parameters.width;  //width — Width; the length of the edges parallel to the X axis.
    var m1Depth = mesh1.geometry.parameters.depth;  //depth — Depth; the length of the edges parallel to the Z axis.

    var m2Xposition = mesh2.position.x;
    var m2ZPosition = mesh2.position.z;
    var m2Width = mesh2.geometry.parameters.width;
    var m2Depth = mesh2.geometry.parameters.depth;
    
    return (m1Xposition-m1Width/2 < m2Xposition+m2Width/2 && m1Xposition+m1Width/2 >  m2Xposition-m2Width/2
        && m1ZPosition+m1Depth/2 > m2ZPosition-m2Depth/2 && m1ZPosition-m1Depth/2 < m2ZPosition+m2Depth/2 )
}

colisionLoaded = true;