let materialArray = [];
let texture_ft = new THREE.TextureLoader().load('Assets/space_ft.png');
let texture_bk = new THREE.TextureLoader().load('Assets/space_bk.png');
let texture_up = new THREE.TextureLoader().load('Assets/space_up.png');
let texture_dn = new THREE.TextureLoader().load('Assets/space_dn.png');
let texture_rt = new THREE.TextureLoader().load('Assets/space_rt.png');
let texture_lf = new THREE.TextureLoader().load('Assets/space_lf.png');

materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }));
materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }));

for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.BackSide;

let skyboxGeo = new THREE.BoxGeometry(700, 700, 700);
let skybox = new THREE.Mesh(skyboxGeo, materialArray);
cena.add(skybox);