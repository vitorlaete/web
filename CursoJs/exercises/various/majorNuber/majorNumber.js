// Escreva uma função que recebe 2 números e retorne o maior deles.

function calcButton () {
    const button = document.querySelector('#button');
    button.addEventListener('click', calc);
}

function calc () {
    const one = getNumberOne();
    const two = getNumberTwo();

    const resultCalc = document.querySelector('#result');

    return (one > two) ? resultCalc.value = one : resultCalc.value = two;
}

function getNumberOne () {
    const firstNumber = Number(document.querySelector('#numberOne').value);

    return firstNumber;
}

function getNumberTwo () {
    const secondNumber = Number(document.querySelector('#numberTwo').value);

    return secondNumber;
}