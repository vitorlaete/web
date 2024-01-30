const typedNumber = Number(prompt('Digite um número: '));

const header1 = document.createElement('h1');
document.querySelector('body').appendChild(header1);

header1.innerHTML = `Seu número é ${typedNumber}`;

const firstP = document.createElement('p');
document.querySelector('body').appendChild(firstP);

firstP.innerHTML += `Raiz quadrada: ${typedNumber ** 0.5}.<br>`;
firstP.innerHTML += `${typedNumber} é inteiro: ${Number.isInteger(typedNumber)}.<br>`;
firstP.innerHTML += `É NaN: ${Number.isNaN(typedNumber)}.<br>`;
firstP.innerHTML += `Arredondado para baixo: ${Math.floor(typedNumber)}.<br>`;
firstP.innerHTML += `Arredondado para cima: ${Math.ceil(typedNumber)}.<br>`;
firstP.innerHTML += `Com duas casas decimais: ${typedNumber.toFixed(2)}.<br>`;

