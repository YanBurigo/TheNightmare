var posX = []
var posZ = []
var tam = []
var precolisao = false
var colisao = 0
var posX2 = []
var posZ2 = []
var tam2 = []
var precolisao2 = false
var colisao2 = 0
var dist = 1;

var intervalo = setInterval(() => {
    for(var i=0; i<posX.length;i++){
        if (posX[i] >= camera.position.x-1 && posX[i] <= camera.position.x+1 && posZ[i]+(tam[i]/2) >= camera.position.z-0.5 && posZ[i]-(tam[i]/2) <= camera.position.z+0.5) {
            precolisao = true
            colisao = i;
        }
        else{
            if(i==0)
            precolisao = false
        }
    }
}, 0.1);

var intervalo = setInterval(() => {
    for(var i=0; i<posX2.length;i++){
        
        if (posZ2[i] >= camera.position.z-1 && posZ2[i] <= camera.position.z+1 && posX2[i]+(tam2[i]/2) >= camera.position.x-1 && posX2[i]-(tam2[i]/2) <= camera.position.x+1) {
            precolisao2 = true
            colisao2 = i;
        }
        else{
            if(i==0)
            precolisao2 = false
        }
    }
}, 0.1);

function sairParede(button){
    var fakeCameraX;
    var fakeCameraZ;
    if(button == 87){
        fakeCameraX = camera.position.x - vel * Math.sin(camera.rotation.y)/100;
        fakeCameraZ = camera.position.z - vel * Math.cos(camera.rotation.y)/100;
    }
    else if(button == 83){
        fakeCameraX = camera.position.x + vel * Math.sin(camera.rotation.y)/100;
        fakeCameraZ = camera.position.z + vel * Math.cos(camera.rotation.y)/100;
    }
    else if(button == 65){
        fakeCameraZ = camera.position.z + vel * Math.sin(camera.rotation.y)/100;
        fakeCameraX = camera.position.x - vel * Math.cos(camera.rotation.y)/100;
    }
    else if(button == 68){
        fakeCameraZ = camera.position.z - vel * Math.sin(camera.rotation.y)/100;
        fakeCameraX = camera.position.x + vel * Math.cos(camera.rotation.y)/100;
    }
    if(!((posX[colisao] > fakeCameraX-dist && posX[colisao] < fakeCameraX+dist 
        && posZ[colisao]+(tam[colisao]/2) > fakeCameraZ-dist && posZ[colisao]-(tam[colisao]/2) < fakeCameraZ+dist)
        ||(posZ2[colisao2] > fakeCameraZ-dist && posZ2[colisao2] < fakeCameraZ+dist 
            && posX2[colisao2]+(tam2[colisao2]/2) > fakeCameraX-dist && posX2[colisao2]-(tam2[colisao2]/2) < fakeCameraX+dist))){
        if(button == 87){
            camera.position.x -= vel * Math.sin(camera.rotation.y)/100;
            camera.position.z -= vel * Math.cos(camera.rotation.y)/100;
            dist = 1;
        }
        else if(button == 83){
            camera.position.z += vel * Math.cos(camera.rotation.y)/100;
            camera.position.x += vel * Math.sin(camera.rotation.y)/100;
            dist = 1;
        }
        else if(button == 65){
            camera.position.z += vel * Math.sin(camera.rotation.y)/100;
            camera.position.x -= vel * Math.cos(camera.rotation.y)/100;
            dist = 1;
        }
        else if(button == 68){
            camera.position.z -= vel * Math.sin(camera.rotation.y)/100;
            camera.position.x += vel * Math.cos(camera.rotation.y)/100;
            dist = 1;
        }
    }
    else{
        var presoPraCima = !((posX[colisao] > (camera.position.x - vel * Math.sin(camera.rotation.y)/100)-dist && posX[colisao] < (camera.position.x - vel * Math.sin(camera.rotation.y)/100)+dist && posZ[colisao]+(tam[colisao]/2) > (camera.position.z - vel * Math.cos(camera.rotation.y)/100)-dist && posZ[colisao]-(tam[colisao]/2) < (camera.position.z - vel * Math.cos(camera.rotation.y)/100)+dist)||(posZ2[colisao2] > (camera.position.z - vel * Math.cos(camera.rotation.y)/100)-dist && posZ2[colisao2] < (camera.position.z - vel * Math.cos(camera.rotation.y)/100)+dist && posX2[colisao2]+(tam2[colisao2]/2) > (camera.position.x - vel * Math.sin(camera.rotation.y)/100)-dist && posX2[colisao2]-(tam2[colisao2]/2) < (camera.position.x - vel * Math.sin(camera.rotation.y)/100)+dist))
        var presoPraTras = !((posX[colisao] > (camera.position.x + vel * Math.sin(camera.rotation.y)/100)-dist && posX[colisao] < (camera.position.x + vel * Math.sin(camera.rotation.y)/100)+dist && posZ[colisao]+(tam[colisao]/2) > (camera.position.z + vel * Math.cos(camera.rotation.y)/100)-dist && posZ[colisao]-(tam[colisao]/2) < (camera.position.z + vel * Math.cos(camera.rotation.y)/100)+dist)||(posZ2[colisao2] > (camera.position.z + vel * Math.cos(camera.rotation.y)/100)-dist && posZ2[colisao2] < (camera.position.z + vel * Math.cos(camera.rotation.y)/100)+dist && posX2[colisao2]+(tam2[colisao2]/2) > (camera.position.x + vel * Math.sin(camera.rotation.y)/100)-dist && posX2[colisao2]-(tam2[colisao2]/2) < (camera.position.x + vel * Math.sin(camera.rotation.y)/100)+dist))
        var presoPraEsquerda = !((posX[colisao] > (camera.position.x - vel * Math.cos(camera.rotation.y)/100)-dist && posX[colisao] < (camera.position.x - vel * Math.cos(camera.rotation.y)/100)+dist && posZ[colisao]+(tam[colisao]/2) > (camera.position.z + vel * Math.sin(camera.rotation.y)/100)-dist && posZ[colisao]-(tam[colisao]/2) < (camera.position.z + vel * Math.sin(camera.rotation.y)/100)+dist)||(posZ2[colisao2] > (camera.position.z + vel * Math.sin(camera.rotation.y)/100)-dist && posZ2[colisao2] < (camera.position.z + vel * Math.sin(camera.rotation.y)/100)+dist && posX2[colisao2]+(tam2[colisao2]/2) > (camera.position.x - vel * Math.cos(camera.rotation.y)/100)-dist && posX2[colisao2]-(tam2[colisao2]/2) < (camera.position.x - vel * Math.cos(camera.rotation.y)/100)+dist))
        var presoPraDireita = !((posX[colisao] > (camera.position.x + vel * Math.cos(camera.rotation.y)/100)-dist && posX[colisao] < (camera.position.x + vel * Math.cos(camera.rotation.y)/100)+dist && posZ[colisao]+(tam[colisao]/2) > (camera.position.z - vel * Math.sin(camera.rotation.y)/100)-dist && posZ[colisao]-(tam[colisao]/2) < (camera.position.z - vel * Math.sin(camera.rotation.y)/100)+dist)||(posZ2[colisao2] > (camera.position.z - vel * Math.sin(camera.rotation.y)/100)-dist && posZ2[colisao2] < (camera.position.z - vel * Math.sin(camera.rotation.y)/100)+dist && posX2[colisao2]+(tam2[colisao2]/2) > (camera.position.x + vel * Math.cos(camera.rotation.y)/100)-dist && posX2[colisao2]-(tam2[colisao2]/2) < (camera.position.x + vel * Math.cos(camera.rotation.y)/100)+dist))
        if(!presoPraCima && !presoPraTras && !presoPraEsquerda && !presoPraDireita){
            dist -= 0.1
        }
    }
}