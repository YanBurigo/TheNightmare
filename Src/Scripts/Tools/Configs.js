var startSound = false;                 //Remove o erro do som no inicio (manter como false)
var colisionLoaded = false;             //Remove o erro do playerCollision (manter como false)
var cubeLoaded = false;                 //Remove o erro do cubo (manter como false)
var monsterLoaded = false;              //Remove o erro do monsterHitbox2 (manter como false)
var orbitControlsEnable = false;        //Liga e desliga o orbit controls
var debugMode = false;                  //Liga e desliga o debug mode
var smokeEnable = false;                 //Liga e desliga a fumaça
var jumpscareEnable = false;             //Liga e desliga os jumpscare
var vel = 2;                            //Velocidade do jogador(padrão 2, quando maior mais rápido)
var velMonster = 5;                     //Velocidade do monstro(padrão 5, quando menor mais rápido)
var velMonsterAfterKey = 1              //Velocidade do monstro após pegar a chave(padrão 1, quando menor mais rápido)
var showMonsterInitialPosition = false  //Monstra a posição inicial do monstro e seu vérice
var globalLighting = 2                  //Nivel de iluminação global(padrão 2, quando maior mais claro)