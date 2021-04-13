var caminhoPercorrido = [];
var posicaoInicial = "p1" //+ getRandomInt(0,266);
caminhoPercorrido[0] = chamar("p0");
caminhoPercorrido[1] = chamar(posicaoInicial);
var valor;
var cont;
var aux;

var intervalo = setInterval(() => {
    valor = getRandomInt(0,caminhoPercorrido[1].prox.length);
    if(caminhoPercorrido[1].prox.length == 1){
        caminhoPercorrido[0]=caminhoPercorrido[1];
        caminhoPercorrido[1]=chamar(caminhoPercorrido[1].prox[0]);

        if(caminhoPercorrido[1].x != MonsterHitbox.position.x){
            cont=0;
            aux = MonsterHitbox.position.x;
            var andar = setInterval(() => {
                MonsterHitbox.position.x += (caminhoPercorrido[1].x-aux)/1000;
                cont++;
                if(cont==1000){
                    clearInterval(andar);
                    MonsterHitbox.position.x = Math.round(MonsterHitbox.position.x);
                }
            }, 10);
        }

        else if(caminhoPercorrido[1].z != MonsterHitbox.position.z){
            cont=0;
            aux = MonsterHitbox.position.z;
            var andar = setInterval(() => {
                MonsterHitbox.position.z += (caminhoPercorrido[1].z-aux)/1000;
                cont++;
                if(cont==1000){
                    clearInterval(andar);
                    MonsterHitbox.position.z = Math.round(MonsterHitbox.position.z);
                }
            }, 10);
        }
    }
    else if(caminhoPercorrido[0].valor!=caminhoPercorrido[1].prox[valor]){
        caminhoPercorrido[0]=caminhoPercorrido[1];
        caminhoPercorrido[1]=chamar(caminhoPercorrido[1].prox[valor]);

        if(caminhoPercorrido[1].x != MonsterHitbox.position.x){
            cont=0;
            aux = MonsterHitbox.position.x;
            var andar = setInterval(() => {
                MonsterHitbox.position.x += (caminhoPercorrido[1].x-aux)/1000;
                cont++;
                if(cont==1000){
                    clearInterval(andar);
                    MonsterHitbox.position.x = Math.round(MonsterHitbox.position.x);
                }
            }, 10);
        }

        else if(caminhoPercorrido[1].z != MonsterHitbox.position.z){
            cont=0;
            aux = MonsterHitbox.position.z;
            var andar = setInterval(() => {
                MonsterHitbox.position.z += (caminhoPercorrido[1].z-aux)/1000;
                cont++;
                if(cont==1000){
                    clearInterval(andar);
                    MonsterHitbox.position.z = Math.round(MonsterHitbox.position.z);
                }
            }, 10);
        }
    }
    else if(caminhoPercorrido[0].valor==caminhoPercorrido[1].prox[valor]){
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
            var andar = setInterval(() => {
                MonsterHitbox.position.x += (caminhoPercorrido[1].x-aux)/1000;
                cont++;
                if(cont==1000){
                    clearInterval(andar);
                    MonsterHitbox.position.x = Math.round(MonsterHitbox.position.x);
                }
            }, 10);
        }

        else if(caminhoPercorrido[1].z != MonsterHitbox.position.z){
            cont=0;
            aux = MonsterHitbox.position.z;
            var andar = setInterval(() => {
                MonsterHitbox.position.z += (caminhoPercorrido[1].z-aux)/1000;
                cont++;
                if(cont==1000){
                    clearInterval(andar);
                    MonsterHitbox.position.z = Math.round(MonsterHitbox.position.z);
                }
            }, 10);
        }
    }
}, 12000);