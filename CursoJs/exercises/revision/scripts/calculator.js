
function calculate () {

    const weight = document.querySelector('#weight');
    const heigth = document.querySelector('#height');
    const textInDiv = document.querySelector('.pResult');

    textInDiv.innerHTML = '';

    if (weight.value.length === 0 && heigth.value.length === 0) {
        
        weight.focus();
        textInDiv.classList.add('redAlert');// Comando que adiciona uma class em um elemento.
        return textInDiv.innerHTML = 'Campos inválidos.';

    } else if (weight.value < 2 && heigth.value < 0.30){

        heigth.focus();
        textInDiv.classList.add('redAlert');
        return textInDiv.innerHTML = 'Peso e Altura inválidos.';

    }  else if (heigth.value.length === 0) {

        heigth.focus();
        textInDiv.classList.add('redAlert');
        return textInDiv.innerHTML = 'Altura inválida.';

    } else if (weight.value.length === 0) { 

        weight.focus();
        textInDiv.classList.add('redAlert');
        return textInDiv.innerHTML = 'Peso inválido.';

    } else if (weight.value < 2) {

        weight.focus();
        textInDiv.classList.add('redAlert');
        return textInDiv.innerHTML = 'Peso inválido! Valor abaixo do comum.';
        
    } else if (heigth.value < 0.30) {

        heigth.focus();
        textInDiv.classList.add('redAlert');
        return textInDiv.innerHTML = 'Altura inválida.';

    } 

    textInDiv.innerHTML = `${imcTab(imcCalc(weight, heigth))}`;
    textInDiv.style.background = '#808080';
    textInDiv.style.color = '#000';
}


function imcCalc (weight, heigth) {

    const imc = Number(weight.value) / (Number(heigth.value)**2);

    return imc;
}


function imcTab (value) {

    if (value < 18.5) {
        return `Seu IMC é ${value.toFixed(2)} e você está abaixo do peso.`;
    } else if (value <= 24.9) {
        return `Seu IMC é ${value.toFixed(2)} e você está no peso ideal.`;
    } else if (value <= 29.9) {
        return `Seu IMC é ${value.toFixed(2)} e você com sobrepeso.`;
    } else if (value <= 34.9) {
        return `Seu IMC é ${value.toFixed(2)} e você está com obesidade grau 1.`;
    } else if (value <= 39.9) {
        return `Seu IMC é ${value.toFixed(2)} e você está com obesidade grau 2.`;
    } else {
        return `Seu IMC é ${value.toFixed(2)} e você está com obesidade grau 3.`;
    }
}


function cleanBtn () {
    const weight = document.querySelector('#weight');
    const heigth = document.querySelector('#height');
    const cleanP = document.querySelector('.pResult');

    cleanP.innerHTML = '';

    weight.value = '';
    heigth.value = '';
    weight.focus();
}
