var movimentFront = 0;
var movimentBack = 0;
var movimentLeft = 0;
var movimentRight = 0;
var lado = false;
var frente = true;
var lado2 = false;
var frente2 = true;
var isRuning = false;
var golden = false;

if (!orbitControlsEnable) {
    document.onkeydown = function (evt) {
        if (start && victoryCont!=1) {
            switch (evt.keyCode) {
                case 87: //w
                    movimentFront = 1;
                    break;
                case 83: //s
                    movimentBack = 1;
                    break;
                case 65: //a
                    movimentLeft = 1;
                    break;
                case 68: //d
                    movimentRight = 1;
                    break;
                case 16: //shift
                    vel = velRun;
                    isRuning = true;
                    break;
            }
        }
    };
    var intervaloMove = setInterval(() => {
        if(victoryCont == 1){
            clearInterval(intervaloMove);
        }
        if((camera.position.z < -58 && (camera.position.x < - 8 || camera.position.x > 8)) || (camera.position.z > 58 && camera.position.x > -48) || camera.position.z > 66 || camera.position.z < -66 || camera.position.x < -58 || camera.position.x > 58){
            if(!golden){
                golden = true
                setTimeout(() => {
                    var jumpscareGolden = document.getElementById("jumpscare")
                    jumpscareGolden.innerHTML = '<img src="Assets/Images/Jumpscare/goldenJumpscare.gif" id="jumpscare" style="position:absolute; width:100%; height:100%"/>'
                }, 400);
                goldenJumpscare.play();
                setTimeout(() => {
                    victoryCont ++;
                    document.exitPointerLock();
                    alert("Dev: Don't leave the map!");
                    restart();
                }, 500);
            }
        }
        if (movimentFront == 1) {
            if (isRuning)
                playerruning.play();
            else
                playerwalking.play();

            if (!precolisao && posX[colisao] > camera.position.x - 1 && posX[colisao] < camera.position.x + 1)
                lado = true;

            else
                lado = !frente;

            if (!precolisao && posZ[colisao] + (tam[colisao] / 2) >= camera.position.z - 0.5 && posZ[colisao] - (tam[colisao] / 2) <= camera.position.z + 0.5)
                frente = true;

            else
                frente = !lado;


            if (!precolisao2 && posZ2[colisao2] > camera.position.z - 1 && posZ2[colisao2] < camera.position.z + 1)
                lado2 = true;

            else
                lado2 = !frente2;

            if (!precolisao2 && posX2[colisao2] + (tam2[colisao2] / 2) >= camera.position.x - 0.5 && posX2[colisao2] - (tam2[colisao2] / 2) <= camera.position.x + 0.5)
                frente2 = true;

            else
                frente2 = !lado2;


            if (!((lado2 && precolisao2 && posZ2[colisao2] > camera.position.z - 1 && posZ2[colisao2] < camera.position.z + 1) || (frente && precolisao && posX[colisao] > camera.position.x - 1 && posX[colisao] < camera.position.x + 1)))
                camera.position.x -= vel * Math.sin(camera.rotation.y) / 100;
            if (!((frente2 && precolisao2 && posX2[colisao2] + (tam2[colisao2] / 2) > camera.position.x - 1 && posX2[colisao2] - (tam2[colisao2] / 2) < camera.position.x + 1) || (lado && precolisao && posZ[colisao] + (tam[colisao] / 2) > camera.position.z - 1 && posZ[colisao] - (tam[colisao] / 2) < camera.position.z + 1)))
                camera.position.z -= vel * Math.cos(camera.rotation.y) / 100;
            if (precolisao || precolisao2)
                sairParede(87);


        }
        if (movimentBack == 1) {
            if (isRuning)
                playerruning.play();
            else
                playerwalking.play();

            if (!precolisao && posX[colisao] > camera.position.x - 1 && posX[colisao] < camera.position.x + 1)
                lado = true;

            else
                lado = !frente;

            if (!precolisao && posZ[colisao] + (tam[colisao] / 2) >= camera.position.z - 0.5 && posZ[colisao] - (tam[colisao] / 2) <= camera.position.z + 0.5)
                frente = true;

            else
                frente = !lado;


            if (!precolisao2 && posZ2[colisao2] > camera.position.z - 1 && posZ2[colisao2] < camera.position.z + 1)
                lado2 = true;

            else
                lado2 = !frente2;

            if (!precolisao2 && posX2[colisao2] + (tam2[colisao2] / 2) >= camera.position.x - 0.5 && posX2[colisao2] - (tam2[colisao2] / 2) <= camera.position.x + 0.5)
                frente2 = true;

            else
                frente2 = !lado2;


            if (!((lado2 && precolisao2 && posZ2[colisao2] > camera.position.z - 1 && posZ2[colisao2] < camera.position.z + 1) || (frente && precolisao && posX[colisao] > camera.position.x - 1 && posX[colisao] < camera.position.x + 1)))
                camera.position.x += vel * Math.sin(camera.rotation.y) / 100;
            if (!((frente2 && precolisao2 && posX2[colisao2] + (tam2[colisao2] / 2) > camera.position.x - 1 && posX2[colisao2] - (tam2[colisao2] / 2) < camera.position.x + 1) || (lado && precolisao && posZ[colisao] + (tam[colisao] / 2) > camera.position.z - 1 && posZ[colisao] - (tam[colisao] / 2) < camera.position.z + 1)))
                camera.position.z += vel * Math.cos(camera.rotation.y) / 100;
            if (precolisao || precolisao2) {
                sairParede(83);
            }
        }
        if (movimentLeft == 1) {
            if (isRuning)
                playerruning.play();
            else
                playerwalking.play();

            if (!precolisao && posX[colisao] > camera.position.x - 1 && posX[colisao] < camera.position.x + 1)
                lado = true;

            else
                lado = !frente;

            if (!precolisao && posZ[colisao] + (tam[colisao] / 2) >= camera.position.z - 0.5 && posZ[colisao] - (tam[colisao] / 2) <= camera.position.z + 0.5)
                frente = true;

            else
                frente = !lado;


            if (!precolisao2 && posZ2[colisao2] > camera.position.z - 1 && posZ2[colisao2] < camera.position.z + 1)
                lado2 = true;

            else
                lado2 = !frente2;

            if (!precolisao2 && posX2[colisao2] + (tam2[colisao2] / 2) >= camera.position.x - 0.5 && posX2[colisao2] - (tam2[colisao2] / 2) <= camera.position.x + 0.5)
                frente2 = true;

            else
                frente2 = !lado2;


            if (!((lado2 && precolisao2 && posZ2[colisao2] > camera.position.z - 1 && posZ2[colisao2] < camera.position.z + 1) || (frente && precolisao && posX[colisao] > camera.position.x - 1 && posX[colisao] < camera.position.x + 1)))
                camera.position.x -= vel * Math.cos(camera.rotation.y) / 100;
            if (!((frente2 && precolisao2 && posX2[colisao2] + (tam2[colisao2] / 2) > camera.position.x - 1 && posX2[colisao2] - (tam2[colisao2] / 2) < camera.position.x + 1) || (lado && precolisao && posZ[colisao] + (tam[colisao] / 2) > camera.position.z - 1 && posZ[colisao] - (tam[colisao] / 2) < camera.position.z + 1)))
                camera.position.z += vel * Math.sin(camera.rotation.y) / 100;
            if (precolisao || precolisao2)
                sairParede(65);

        }
        if (movimentRight == 1) {
            if (isRuning)
                playerruning.play();
            else
                playerwalking.play();

            if (!precolisao && posX[colisao] > camera.position.x - 1 && posX[colisao] < camera.position.x + 1)
                lado = true;

            else
                lado = !frente;

            if (!precolisao && posZ[colisao] + (tam[colisao] / 2) >= camera.position.z - 0.5 && posZ[colisao] - (tam[colisao] / 2) <= camera.position.z + 0.5)
                frente = true;

            else
                frente = !lado;


            if (!precolisao2 && posZ2[colisao2] > camera.position.z - 1 && posZ2[colisao2] < camera.position.z + 1)
                lado2 = true;

            else
                lado2 = !frente2;

            if (!precolisao2 && posX2[colisao2] + (tam2[colisao2] / 2) >= camera.position.x - 0.5 && posX2[colisao2] - (tam2[colisao2] / 2) <= camera.position.x + 0.5)
                frente2 = true;

            else
                frente2 = !lado2;


            if (!((lado2 && precolisao2 && posZ2[colisao2] > camera.position.z - 1 && posZ2[colisao2] < camera.position.z + 1) || (frente && precolisao && posX[colisao] > camera.position.x - 1 && posX[colisao] < camera.position.x + 1)))
                camera.position.x += vel * Math.cos(camera.rotation.y) / 100;
            if (!((frente2 && precolisao2 && posX2[colisao2] + (tam2[colisao2] / 2) > camera.position.x - 1 && posX2[colisao2] - (tam2[colisao2] / 2) < camera.position.x + 1) || (lado && precolisao && posZ[colisao] + (tam[colisao] / 2) > camera.position.z - 1 && posZ[colisao] - (tam[colisao] / 2) < camera.position.z + 1)))
                camera.position.z -= vel * Math.sin(camera.rotation.y) / 100;
            if (precolisao || precolisao2)
                sairParede(68);

        }
    }, 10);

    document.onkeypress = function (evt) {
        if (evt.keyCode == 16)
            isRuning = true;
    }

    document.onkeyup = function (evt) {
        if (start && victoryCont != 1) {
            if (evt.keyCode == 87) {
                movimentFront = 0;
            }
            if (evt.keyCode == 83) {
                movimentBack = 0;
            }
            if (evt.keyCode == 65) {
                movimentLeft = 0;
            }
            if (evt.keyCode == 68) {
                movimentRight = 0;
            }
            if (evt.keyCode == 16) {
                vel = velPlayer;
                isRuning = false;
            }
        }
        else if(victoryCont == 1){
            movimentFront = 0;
            movimentBack = 0;
            movimentLeft = 0;
            movimentRight = 0;
            isRuning = false;
        }
    };

    document.onmousemove = function (evt) {
        if (start && victoryCont != 1) {
            if (evt.movementX < 0)
                camera.rotation.y -= (evt.movementX / velMouse);

            else if (evt.movementX > 0)
                camera.rotation.y -= (evt.movementX / velMouse);
        }
    }
}