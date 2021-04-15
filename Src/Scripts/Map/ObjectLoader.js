import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';

class ObjectLoader{
    constructor() {
        this._Initialize();
    }
    _Initialize() {
    this._LoadModel();
    }
    _LoadModel() {
        const loader = new GLTFLoader();
        loader.load('Src/Objects/External/key.gltf', (gltf) => {
          gltf.scene.traverse(c => {
            c.castShadow = true;
          });
          gltf.scene.position.x = 0;
          gltf.scene.position.y = 1.5
          gltf.scene.position.z = 39;
          chave = gltf.scene;
          cena.add(gltf.scene);
        });

    }
}

class MonsterLoader{
  constructor() {
      this._Initialize();
  }
  _Initialize() {
  this._LoadModel();
  }
  _LoadModel() {
      const loader = new GLTFLoader();
      loader.load('Src/Objects/External/Monster.gltf', (gltfMonster) => {
        gltfMonster.scene.traverse(c => {
          c.castShadow = true;
          gltfMonster.scene.position.z = MonsterHitbox.position.z
          gltfMonster.scene.position.y = 0
          gltfMonster.scene.position.x = MonsterHitbox.position.x
          gltfMonster.scene.scale.set(0.7,0.7,0.7)
        });
        monster = gltfMonster.scene
        cena.add(gltfMonster.scene);
      });

  }
}

let _Chave = null;
let _Monster = null;

window.addEventListener('DOMContentLoaded', () => {
    _Chave = new ObjectLoader();
    _Monster = new MonsterLoader();
});
