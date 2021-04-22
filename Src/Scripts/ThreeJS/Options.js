function high(){
    if(localStorage.getItem("selectedGraphic")!= "true"){
        localStorage.setItem("selectedGraphic", "true");
        var graphics = document.getElementById("graphics");
        graphicsOption.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; cursor: pointer;" onclick="low()">LOW</p><div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; cursor: pointer;" onclick="high()">⋙HIGH⋘</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; cursor: pointer;" onclick="backGraphicScreen()">BACK</p>';
        smokeEnable = true;
    }
}
function low(){
    if(localStorage.getItem("selectedGraphic")!= "false"){
        localStorage.setItem("selectedGraphic", "false");
        var graphics = document.getElementById("graphics");
        graphicsOption.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; cursor: pointer;" onclick="low()">⋙LOW⋘</p><div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; cursor: pointer;" onclick="high()">HIGH</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; cursor: pointer;" onclick="backGraphicScreen()">BACK</p>';
        smokeEnable = false;
    }
}
function graphic(){
    var selectedGraphic;
    if(localStorage.getItem("selectedGraphic") == "null"){
        localStorage.setItem("selectedGraphic", "true");
        selectedGraphic = true;
    }
    if (localStorage.getItem("selectedGraphic") == "true") {
        selectedGraphic = true;
    } else if(localStorage.getItem("selectedGraphic") == "false") {
        selectedGraphic = false;
    }
    var graphics = document.getElementById("graphics");
    graphics.innerHTML = '<p id="graphics"></p>'
    var graphicsOption = document.getElementById("graphicsOption");
    if(selectedGraphic || selectedGraphic==null){
        graphicsOption.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; cursor: pointer;" onclick="low()">LOW</p><div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; cursor: pointer;" onclick="high()">⋙HIGH⋘</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; cursor: pointer;" onclick="backGraphicScreen()">BACK</p>';
    }
    else{
        graphicsOption.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; cursor: pointer;" onclick="low()">⋙LOW⋘</p><div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; cursor: pointer;" onclick="high()">HIGH</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; cursor: pointer;" onclick="backGraphicScreen()">BACK</p>';
    }
    
}
function back(){
    var graphics = document.getElementById("graphics");
    var play = document.getElementById("play").style.display = "block";
    var escolhas = document.getElementById("escolhas").style.display = "block";
    graphics.innerHTML = '<p id="graphics"></p>'
}
function backGraphicScreen(){
    var graphicsOption = document.getElementById("graphicsOption");
    graphicsOption.innerHTML = '<p id="graphicsOption"></p>'
    var graphics = document.getElementById("graphics");
    graphics.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="graphic()">GRAPHICS</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="sensibility()">SENSIBILITY</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="dificulty()">DIFICULTY</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="back()">BACK</p></div>'
}
function backSensibilityScreen(){
    var sensibilityOption = document.getElementById("sensibilityOption");
    sensibilityOption.innerHTML = '<p id="sensibilityOption"></p>'
    var graphics = document.getElementById("graphics");
    graphics.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="graphic()">GRAPHICS</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="sensibility()">SENSIBILITY</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="dificulty()">DIFICULTY</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="back()">BACK</p></div>'
}
function sensibility(){
    var sensibilityOption = document.getElementById("sensibilityOption");
    var graphics = document.getElementById("graphics");
    graphics.innerHTML = '<p id="graphics"></p>'
    if(localStorage.getItem("selectedSensibility") == null){
        localStorage.setItem("selectedSensibility", 0);
    }
    if(localStorage.getItem("selectedSensibility") == 0){
        sensibilityOption.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="slow()">⋘SLOW⋙</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="normal()">NORMAL</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="fast()">FAST</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="backSensibilityScreen()">BACK</p></div>'
    }
    else if(localStorage.getItem("selectedSensibility") == 1){
        sensibilityOption.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="slow()">SLOW</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="normal()">⋘NORMAL⋙</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="fast()">FAST</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="backSensibilityScreen()">BACK</p></div>'
    }
    else if(localStorage.getItem("selectedSensibility") == 2){
        sensibilityOption.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="slow()">SLOW</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="normal()">NORMAL</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="fast()">⋘FAST⋙</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="backSensibilityScreen()">BACK</p></div>'
    }
    
}
function slow(){
    var sensibilityOption = document.getElementById("sensibilityOption");
    sensibilityOption.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="slow()">⋘SLOW⋙</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="normal()">NORMAL</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="fast()">FAST</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="backSensibilityScreen()">BACK</p></div>'
    localStorage.setItem("selectedSensibility", 0);
    velMouse = 500;
}
function normal(){
    var sensibilityOption = document.getElementById("sensibilityOption");
    sensibilityOption.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="slow()">SLOW</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="normal()">⋘NORMAL⋙</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="fast()">FAST</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="backSensibilityScreen()">BACK</p></div>'
    localStorage.setItem("selectedSensibility", 1);
    velMouse = 300;
}
function fast(){
    var sensibilityOption = document.getElementById("sensibilityOption");
    sensibilityOption.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="slow()">SLOW</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="normal()">NORMAL</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="fast()">⋘FAST⋙</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="backSensibilityScreen()">BACK</p></div>'
    localStorage.setItem("selectedSensibility", 2);
    velMouse = 150;
}
function dificulty(){
    var dificultyOption = document.getElementById("dificultyOption");
    var graphics = document.getElementById("graphics");
    graphics.innerHTML = '<p id="graphics"></p>'
    if((localStorage.getItem("dificulty")==null)||(localStorage.getItem("dificulty")=="normal")){
        dificultyOption.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(0)">EASY</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(1)">⋘NORMAL⋙</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(2)">HARD</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(3)">NIGHTMARE</p></div>'
    }
    else if(localStorage.getItem("dificulty")=="easy"){
        dificultyOption.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(0)">⋘EASY⋙</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(1)">NORMAL</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(2)">HARD</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(3)">NIGHTMARE</p></div>'
    }
    else if(localStorage.getItem("dificulty")=="hard"){
        dificultyOption.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(0)">EASY</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(1)">NORMAL</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(2)">⋘HARD⋙</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(3)">NIGHTMARE</p></div>'
    }
    else if(localStorage.getItem("dificulty")=="nightmare"){
        dificultyOption.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(0)">EASY</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(1)">NORMAL</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(2)">HARD</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="selectDificulty(3)">⋘NIGHTMARE⋙</p></div>'
    }
}
function selectDificulty(dificuldade){
    if(dificuldade == 0){
        localStorage.setItem("dificulty", "easy");
    }
    else if(dificuldade == 1){
        localStorage.setItem("dificulty", "normal");
    } 
    else if(dificuldade == 2){
        localStorage.setItem("dificulty", "hard");
    }
    else {
        localStorage.setItem("dificulty", "nightmare");
    }
    var dificultyOption = document.getElementById("dificultyOption");
    dificultyOption.innerHTML = '<p id="dificultyOption"></p>'
    var graphics = document.getElementById("graphics");
    graphics.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="graphic()">GRAPHICS</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="sensibility()">SENSIBILITY</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="dificulty()">DIFICULTY</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="back()">BACK</p></div>'
}

function option(){
    var play = document.getElementById("play").style.display = "none";
    var escolhas = document.getElementById("escolhas").style.display = "none";
    var graphics = document.getElementById("graphics");
    graphics.innerHTML = '<div><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="graphic()">GRAPHICS</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="sensibility()">SENSIBILITY</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="dificulty()">DIFICULTY</p><p style="background-color: rgba(22, 22, 22, 0.6); padding-right: 5%; margin-top: -20px; cursor: pointer;" onclick="back()">BACK</p></div>'
}

function restart(){
    location.reload();
}