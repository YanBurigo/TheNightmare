var movimentFront = 0;
var movimentBack = 0;
var movimentLeft = 0;
var movimentRight = 0;
var lado = false;
var frente = true;
var lado2 = false;
var frente2 = true;
var isRuning = false;

if (!orbitControlsEnable) {
    document.onkeydown = function (evt) {
        if (start) {
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
    var intervalo = setInterval(() => {
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

    var verifyIfShiftIsPressed = document.onkeypress = function (evt) {
        if (evt.keyCode == 16)
            isRuning = true;
    }

    document.onkeyup = function (evt) {
        if (start) {
            if (evt.keyCode == 87) {
                movimentFront = 0;
                verifyIfShiftIsPressed();
            }
            if (evt.keyCode == 83) {
                movimentBack = 0;
                verifyIfShiftIsPressed();
            }
            if (evt.keyCode == 65) {
                movimentLeft = 0;
                verifyIfShiftIsPressed();
            }
            if (evt.keyCode == 68) {
                movimentRight = 0;
                verifyIfShiftIsPressed();
            }
            if (evt.keyCode == 16) {
                vel = velPlayer;
                isRuning = false;
            }
        }
    };

    document.onmousemove = function (evt) {
        if (start) {
            if (evt.movementX < 0)
                camera.rotation.y -= (evt.movementX / 150);

            else if (evt.movementX > 0)
                camera.rotation.y -= (evt.movementX / 150);
        }
    }
}