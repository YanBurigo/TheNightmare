function gerarSuperficiePlana(lar = 1, alt = 1, p = 1) {
    var pontos = [];
    for (var x = -lar / 2; x < lar / 2; x += lar / p) {
        for (var y = alt / 2; y > -alt / 2; y -= alt / p) {
            pontos.push(new THREE.Vector3(x, 0, y));
            pontos.push(new THREE.Vector3(x, 0, y - alt / p));
            pontos.push(new THREE.Vector3(x + lar / p, 0, y - alt / p));
            pontos.push(new THREE.Vector3(x, 0, y));
            pontos.push(new THREE.Vector3(x + lar / p, 0, y - alt / p));
            pontos.push(new THREE.Vector3(x + lar / p, 0, y));
        }
    }
    return new THREE.BufferGeometry().setFromPoints(pontos);
}

//Adicionando plano
var forma = new THREE.Mesh(
    gerarSuperficiePlana(115, 115, 5),
    new THREE.LineBasicMaterial({ color: 0x333333 })
);
//forma.material.wireframe = true;
//forma.material.side = THREE.DoubleSide;

var planTexture = new THREE.TextureLoader().load("Assets/Images/Texture/texturaChao.webp");
var materialChao = new THREE.MeshLambertMaterial({ color: 0x333333, map: planTexture });

var geometriaChao = new THREE.BoxGeometry(115, 0.1, 115);
var chao = new THREE.Mesh(geometriaChao, materialChao);
chao.receiveShadow = true;
cena.add(chao);
cena.add(forma);