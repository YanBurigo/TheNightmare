let materialArray = [];
let texture_ft = new THREE.TextureLoader().load('Assets/Images/Skybox/space_ft.webp');
let texture_bk = new THREE.TextureLoader().load('Assets/Images/Skybox/space_bk.webp');
let texture_up = new THREE.TextureLoader().load('Assets/Images/Skybox/space_up.webp');
let texture_dn = new THREE.TextureLoader().load('Assets/Images/Skybox/space_dn.webp');
let texture_rt = new THREE.TextureLoader().load('Assets/Images/Skybox/space_rt.webp');
let texture_lf = new THREE.TextureLoader().load('Assets/Images/Skybox/space_lf.webp');

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