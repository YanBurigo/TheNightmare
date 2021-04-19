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
      loader.load('Src/Objects/External/monster.gltf', (gltfMonster) => {
        gltfMonster.scene.traverse(c => {
          c.castShadow = true;
          c.receiveShadow = true;
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

class PineLoader{
  constructor() {
      this._Initialize();
  }
  _Initialize() {
  this._LoadModel();
  }
  _LoadModel() {
      const loader = new GLTFLoader();
      loader.load('Src/Objects/External/pine.gltf', (gltfPine) => {
        gltfPine.scene.traverse(c => {
          c.castShadow = true;
          c.receiveShadow = true;
          gltfPine.scene.scale.set(2,2,2)
        });
        gltfPine.scene.position.x = 15;
        gltfPine.scene.position.z = -65;
        cena.add(gltfPine.scene)
      });

  }
}

class MoonLoader{
  constructor() {
      this._Initialize();
  }
  _Initialize() {
  this._LoadModel();
  }
  _LoadModel() {
      const loader = new GLTFLoader();
      loader.load('Src/Objects/External/moon.gltf', (gltfmoon) => {
        gltfmoon.scene.traverse(c => {
          c.castShadow = true;
          c.receiveShadow = true;
          gltfmoon.scene.scale.set(10,10,10)
        });
        gltfmoon.scene.position.x = -90;
        gltfmoon.scene.position.y = 36;
        gltfmoon.scene.position.z = 80;
        cena.add(gltfmoon.scene)
      });

  }
}

class LampLoader{
  constructor() {
      this._Initialize();
  }
  _Initialize() {
  this._LoadModel();
  }
  _LoadModel() {
      const loader = new GLTFLoader();
      loader.load('Src/Objects/External/lamp.gltf', (gltflamp) => {
        gltflamp.scene.traverse(c => {
          c.castShadow = true;
        });
        gltflamp.scene.position.x = -6.5;
        gltflamp.scene.position.z = -60;
        cena.add(gltflamp.scene)
      });
  }
}

let _Chave = null;
let _Monster = null;
let _Pine = null;
let _Moon = null;
let _Lamp = null;

window.addEventListener('DOMContentLoaded', () => {
    _Chave = new ObjectLoader();
    _Monster = new MonsterLoader();
    _Pine = new PineLoader();
    _Moon = new MoonLoader();
    _Lamp = new LampLoader();
});
