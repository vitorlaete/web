/*
 * A missão aqui é aplicar a cor de fundo do body nos parágrafos e setar a cor do texto de branco. 
 */

const allPs = document.querySelectorAll('p');// seleciona todos os elementos indicados

const allStylesOfTheBody = getComputedStyle(document.body);// seleciona todos os estilos aplicados em determinado elemento.

const backgroundColorBody = allStylesOfTheBody.backgroundColor;

for (let effect of allPs) {
    effect.style.backgroundColor = `${backgroundColorBody}`;
    effect.style.color = '#ffffff';
    effect.style.textShadow = '1px 1px 2px #000000';
    effect.style.padding = '10px';
}

// console.log(backgroundColorBody);