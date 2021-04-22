var startSound = false;                 //Remove o erro do som no inicio (manter como false)
var colisionLoaded = false;             //Remove o erro do playerCollision (manter como false)
var cubeLoaded = false;                 //Remove o erro do cubo (manter como false)
var monsterLoaded = false;              //Remove o erro do monsterHitbox2 (manter como false)
var orbitControlsEnable = false;        //Liga e desliga o orbit controls
var debugMode = false;                  //Liga e desliga o debug mode
var smokeEnable = true;                 //Liga e desliga a fumaça
var jumpscareEnable = true;             //Liga e desliga os jumpscare
var velMouse = 150;                     //Velocidade do mouse(padrão 150, quando menor mais rápido)
var velPlayer = 3;                      //Velocidade do jogador(padrão 2, quando maior mais rápido)
var velRun = 5;                         //Velocidade do jogador ao correr(padrão 3.5, quando maior mais rápido)
var velMonster = 4;                     //Velocidade do monstro(padrão 5, quando menor mais rápido)
var velMonsterAfterKey = 1              //Velocidade do monstro após pegar a chave(padrão 2, quando menor mais rápido)
var showMonsterInitialPosition = false  //Monstra a posição inicial do monstro e seu vérice
var globalLighting = 2                  //Nivel de iluminação global(padrão 2, quando maior mais claro)

function afterLoad(){
    if(localStorage.getItem("selectedSensibility") == 0){
        velMouse = 500;
    }
    else if(localStorage.getItem("selectedSensibility") == 1){
        velMouse = 300;
    }
    else{
        velMouse = 150;
    }
    if(localStorage.getItem("selectedGraphic")=="true"){
        smokeEnable = true;
    }
    else if(localStorage.getItem("selectedGraphic")=="false"){
        smokeEnable = false;
    }
}

afterLoad();