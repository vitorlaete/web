//-------------------------------------------------------------
    // O jeito que pensei parte do código
//-------------------------------------------------------------



// const buttonStart = document.querySelector('#buttonStart');
// buttonStart.addEventListener("click", function () {
//     clearInterval(timer);
//     start();
// });

// const buttonPause = document.querySelector('#buttonPause');
// buttonPause.addEventListener("click", pause);

// const buttonReset = document.querySelector('#buttonReset');
// buttonReset.addEventListener("click", reset);

// function start () {
//     timer = setInterval (function () {
//         divOfTheTimer.timer.innerText = handlingTheTimer(seconds);
//         seconds++;
//     }, 1000);
//     black();
// }

// function pause () {
//     clearInterval(timer);
//     red();
// }

// function reset () {
//     seconds = 0;
//     divOfTheTimer.timer.innerText = handlingTheTimer(seconds);
//     black();
// }
//--------------------------------------------------------------
// Como ficou =>

let seconds = 0;
let timer;

// set timer
function handlingTheTimer (seconds) {// função que manipular o timer
    const timeOfTheTimer = new Date(seconds * 1000); //passa os segundos * 1000
    return timeOfTheTimer.toLocaleTimeString('pt-BR', {// seta o timer para 24h e insere o timeZone inicial (unix).
        hour12: false, timeZone: 'UTC'
    })
}

// objetos que receberam estilo
const divOfTheTimer = { 
    timer: document.querySelector('#countTimer'),
    h1: document.querySelector('#h1Timer'),
    body: document.querySelector('body')
}

// estilos 
function red () {
    divOfTheTimer.timer.style.color = "red";
    divOfTheTimer.h1.style.color = "red";
    divOfTheTimer.body.style.background = "#ff000075    ";
}

function black () {
    divOfTheTimer.timer.style.color = "black";
    divOfTheTimer.h1.style.color = "black";
    divOfTheTimer.body.style.background = "#808080";
}

// code
document.addEventListener("click", function (element) {// verificar elementos que recebem 'click'.
    const capElement = element.target;// captura os 'clicks'.
    clearInterval(timer);
    if (capElement.value === 'Iniciar') {
        timer = setInterval (function () {
            divOfTheTimer.timer.innerText = handlingTheTimer(seconds);
            seconds++;
        }, 1000);
        black();
    } else if (capElement.value === 'Pausar') {
        clearInterval(timer);
        red();
    } else if (capElement.value === 'Zerar') {
        seconds = 0;
        divOfTheTimer.timer.innerText = handlingTheTimer(seconds);
        black();
    }
})
