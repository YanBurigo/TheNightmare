var caminhoPercorrido = [];
var posicaoInicial = "p"+ getRandomInt(1,267);
caminhoPercorrido[0] = chamar("p0");
caminhoPercorrido[1] = chamar(posicaoInicial);
MonsterHitbox.position.x = caminhoPercorrido[1].x;
MonsterHitbox.position.z = caminhoPercorrido[1].z;
MonsterHitbox2 = new THREE.Mesh(new THREE.BoxGeometry(2,1,2), new THREE.MeshLambertMaterial({color: 0xff0000}));
var valor;
var cont = 0;
var aux;
var picketKey = true;

if(showMonsterInitialPosition){
    alert("X: " + MonsterHitbox.position.x + "\nZ: " + MonsterHitbox.position.z + "\nVérice: " + caminhoPercorrido[1].valor)
}

function startMonster(){
    var movimentacaoMonster = setInterval(() => {
        if(pegouChave && picketKey){
            clearInterval(movimentacaoMonster);
            velMonster = velMonsterAfterKey;
            picketKey = false
            setInterval(() => {
                movimentMonster();
            }, 1200 * velMonster);
        }
        movimentMonster();
    }, (1200 * velMonster));
}

function movimentMonster(){
    valor = getRandomInt(0,caminhoPercorrido[1].prox.length);
    if(caminhoPercorrido[1].prox.length == 1 && cont==0){
        caminhoPercorrido[0]=caminhoPercorrido[1];
        caminhoPercorrido[1]=chamar(caminhoPercorrido[1].prox[0]);
        if(caminhoPercorrido[1].x != MonsterHitbox.position.x){
            cont=0;
            aux = MonsterHitbox.position.x;
            if(debugMode == true){
                cena.remove(MonsterHitbox2)
            }
            MonsterHitbox2 = new THREE.Mesh(new THREE.BoxGeometry(caminhoPercorrido[1].x-aux,1,2), new THREE.MeshLambertMaterial({color: 0xff0000}));
            MonsterHitbox2.position.y = 2;
            MonsterHitbox2.position.x = (caminhoPercorrido[0].x + caminhoPercorrido[1].x)/2
            MonsterHitbox2.position.z = MonsterHitbox.position.z
            if(caminhoPercorrido[1].x-aux > 0)
                monster.rotation.y = Math.PI/2
            else if(caminhoPercorrido[1].x-aux < 0)
                monster.rotation.y = -Math.PI/2
            if(debugMode == true){
                cena.add(MonsterHitbox2)
            }
            var andar = setInterval(() => {
                MonsterHitbox.position.x += (caminhoPercorrido[1].x-aux)/(100 * velMonster);
                if(caminhoPercorrido[1].x-aux > 0){
                    monster.position.x = MonsterHitbox.position.x;
                    monster.position.z = MonsterHitbox.position.z + 1.2; 
                }else if(caminhoPercorrido[1].x-aux < 0){
                    monster.position.x = MonsterHitbox.position.x;
                    monster.position.z = MonsterHitbox.position.z - 1.2; 
                }
                cont++;
                if(cont==(100 * velMonster)){
                    clearInterval(andar);
                    MonsterHitbox.position.x = Math.round(MonsterHitbox.position.x);
                    cont=0;
                }
            }, 10);
        }

        else if(caminhoPercorrido[1].z != MonsterHitbox.position.z){
            cont=0;
            aux = MonsterHitbox.position.z;
            if(debugMode == true){
                cena.remove(MonsterHitbox2)
            }
            MonsterHitbox2 = new THREE.Mesh(new THREE.BoxGeometry(2,1,caminhoPercorrido[1].z-aux), new THREE.MeshLambertMaterial({color: 0xff0000}));
            MonsterHitbox2.position.y = 2;
            MonsterHitbox2.position.x = MonsterHitbox.position.x
            MonsterHitbox2.position.z = (caminhoPercorrido[0].z + caminhoPercorrido[1].z)/2
            if(caminhoPercorrido[1].z-aux < 0)
                monster.rotation.y = Math.PI
            else if(caminhoPercorrido[1].z-aux > 0)
                monster.rotation.y = 0
            if(debugMode == true){
                cena.add(MonsterHitbox2)
            }
            var andar = setInterval(() => {
                MonsterHitbox.position.z += (caminhoPercorrido[1].z-aux)/(100 * velMonster);
                if(caminhoPercorrido[1].z-aux < 0){
                    monster.position.x = MonsterHitbox.position.x + 1.2;
                    monster.position.z = MonsterHitbox.position.z;
                }else if(caminhoPercorrido[1].z-aux > 0){
                    monster.position.x = MonsterHitbox.position.x - 1.2;
                    monster.position.z = MonsterHitbox.position.z;
                }
                cont++;
                if(cont==(100 * velMonster)){
                    clearInterval(andar);
                    MonsterHitbox.position.z = Math.round(MonsterHitbox.position.z);
                    cont=0;
                }
            }, 10);
        }
    }
    else if(caminhoPercorrido[0].valor!=caminhoPercorrido[1].prox[valor] && cont==0){
        caminhoPercorrido[0]=caminhoPercorrido[1];
        caminhoPercorrido[1]=chamar(caminhoPercorrido[1].prox[valor]);

        if(caminhoPercorrido[1].x != MonsterHitbox.position.x){
            cont=0;
            aux = MonsterHitbox.position.x;
            if(debugMode == true){
                cena.remove(MonsterHitbox2)
            }
            MonsterHitbox2 = new THREE.Mesh(new THREE.BoxGeometry(caminhoPercorrido[1].x-aux,1,2), new THREE.MeshLambertMaterial({color: 0xff0000}));
            MonsterHitbox2.position.y = 2;
            MonsterHitbox2.position.x = (caminhoPercorrido[0].x + caminhoPercorrido[1].x)/2
            MonsterHitbox2.position.z = MonsterHitbox.position.z
            if(caminhoPercorrido[1].x-aux > 0)
                monster.rotation.y = Math.PI/2
            else if(caminhoPercorrido[1].x-aux < 0)
                monster.rotation.y = -Math.PI/2
            if(debugMode == true){
                cena.add(MonsterHitbox2)
            }
            var andar = setInterval(() => {
                MonsterHitbox.position.x += (caminhoPercorrido[1].x-aux)/(100 * velMonster);
                if(caminhoPercorrido[1].x-aux > 0){
                    monster.position.x = MonsterHitbox.position.x;
                    monster.position.z = MonsterHitbox.position.z + 1.2; 
                }else if(caminhoPercorrido[1].x-aux < 0){
                    monster.position.x = MonsterHitbox.position.x;
                    monster.position.z = MonsterHitbox.position.z - 1.2; 
                }
                cont++;
                if(cont==(100 * velMonster)){
                    clearInterval(andar);
                    MonsterHitbox.position.x = Math.round(MonsterHitbox.position.x);
                    cont=0;
                }
            }, 10);
        }

        else if(caminhoPercorrido[1].z != MonsterHitbox.position.z){
            cont=0;
            aux = MonsterHitbox.position.z;
            if(debugMode == true){
                cena.remove(MonsterHitbox2)
            }
            MonsterHitbox2 = new THREE.Mesh(new THREE.BoxGeometry(2,1,caminhoPercorrido[1].z-aux), new THREE.MeshLambertMaterial({color: 0xff0000}));
            MonsterHitbox2.position.y = 2;
            MonsterHitbox2.position.x = MonsterHitbox.position.x
            MonsterHitbox2.position.z = (caminhoPercorrido[0].z + caminhoPercorrido[1].z)/2
            if(caminhoPercorrido[1].z-aux < 0)
                monster.rotation.y = Math.PI
            else if(caminhoPercorrido[1].z-aux > 0)
                monster.rotation.y = 0
            if(debugMode == true){
                cena.add(MonsterHitbox2)
            }
            var andar = setInterval(() => {
                MonsterHitbox.position.z += (caminhoPercorrido[1].z-aux)/(100 * velMonster);
                if(caminhoPercorrido[1].z-aux < 0){
                    monster.position.x = MonsterHitbox.position.x + 1.2;
                    monster.position.z = MonsterHitbox.position.z;
                }else if(caminhoPercorrido[1].z-aux > 0){
                    monster.position.x = MonsterHitbox.position.x - 1.2;
                    monster.position.z = MonsterHitbox.position.z;
                }
                cont++;
                if(cont==(100 * velMonster)){
                    clearInterval(andar);
                    MonsterHitbox.position.z = Math.round(MonsterHitbox.position.z);
                    cont=0;
                }
            }, 10);
        }
    }
    else if(caminhoPercorrido[0].valor==caminhoPercorrido[1].prox[valor] && cont==0){
        if(valor == 0){
            valor = 1;
        }
        else{
            valor = 0;
        }
        caminhoPercorrido[0]=caminhoPercorrido[1];
        caminhoPercorrido[1]=chamar(caminhoPercorrido[1].prox[valor]);

        if(caminhoPercorrido[1].x != MonsterHitbox.position.x){
            cont=0;
            aux = MonsterHitbox.position.x;
            if(debugMode == true){
                cena.remove(MonsterHitbox2)
            }
            MonsterHitbox2 = new THREE.Mesh(new THREE.BoxGeometry(caminhoPercorrido[1].x-aux,1,2), new THREE.MeshLambertMaterial({color: 0xff0000}));
            MonsterHitbox2.position.y = 2;
            MonsterHitbox2.position.x = (caminhoPercorrido[0].x + caminhoPercorrido[1].x)/2
            MonsterHitbox2.position.z = MonsterHitbox.position.z
            if(caminhoPercorrido[1].x-aux > 0)
                monster.rotation.y = Math.PI/2
            else if(caminhoPercorrido[1].x-aux < 0)
                monster.rotation.y = -Math.PI/2
            if(debugMode == true){
                cena.add(MonsterHitbox2)
            }
            var andar = setInterval(() => {
                MonsterHitbox.position.x += (caminhoPercorrido[1].x-aux)/(100 * velMonster);
                if(caminhoPercorrido[1].x-aux > 0){
                    monster.position.x = MonsterHitbox.position.x;
                    monster.position.z = MonsterHitbox.position.z + 1.2; 
                }else if(caminhoPercorrido[1].x-aux < 0){
                    monster.position.x = MonsterHitbox.position.x;
                    monster.position.z = MonsterHitbox.position.z - 1.2; 
                }
                cont++;
                if(cont==(100 * velMonster)){
                    clearInterval(andar);
                    MonsterHitbox.position.x = Math.round(MonsterHitbox.position.x);
                    cont=0;
                }
            }, 10);
        }

        else if(caminhoPercorrido[1].z != MonsterHitbox.position.z){
            cont=0;
            aux = MonsterHitbox.position.z;
            if(debugMode == true){
                cena.remove(MonsterHitbox2)
            }
            MonsterHitbox2 = new THREE.Mesh(new THREE.BoxGeometry(2,1,caminhoPercorrido[1].z-aux), new THREE.MeshLambertMaterial({color: 0xff0000}));
            MonsterHitbox2.position.y = 2;
            MonsterHitbox2.position.x = MonsterHitbox.position.x
            MonsterHitbox2.position.z = (caminhoPercorrido[0].z + caminhoPercorrido[1].z)/2
            if(caminhoPercorrido[1].z-aux < 0)
                monster.rotation.y = Math.PI
            else if(caminhoPercorrido[1].z-aux > 0)
                monster.rotation.y = 0
            if(debugMode == true){
                cena.add(MonsterHitbox2)
            }
            var andar = setInterval(() => {
                MonsterHitbox.position.z += (caminhoPercorrido[1].z-aux)/(100 * velMonster);
                if(caminhoPercorrido[1].z-aux < 0){
                    monster.position.x = MonsterHitbox.position.x + 1.2;
                    monster.position.z = MonsterHitbox.position.z;
                }else if(caminhoPercorrido[1].z-aux > 0){
                    monster.position.x = MonsterHitbox.position.x - 1.2;
                    monster.position.z = MonsterHitbox.position.z;
                }
                cont++;
                if(cont==(100 * velMonster)){
                    clearInterval(andar);
                    MonsterHitbox.position.z = Math.round(MonsterHitbox.position.z);
                    cont=0;
                }
            }, 10);
        }
    }
}

monsterLoaded = true;