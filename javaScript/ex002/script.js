

function horaDia() {
    var date = new Date ();
    var horario = date.getHours(); 
    var hora = document.querySelector('div#hour');
    hora.innerHTML = `Agora são ${horario} horas.`;
    //parte do comando que define as horas.
    var image = document.querySelector('img#image');
    var body = document.querySelector('body#main');

    if (horario < 12){
        image.src = "./imagens/morning-300.png"
        body.style.background = "#7fffd493";
    } else if (horario < 18) {
        image.src = "./imagens/tarde-300.png";
        body.style.background = "#ffa60071";
    }
    else {
        image.src = "./imagens/Citynight-300.png";
        body.style.background = "#03032eb4";
    }
}