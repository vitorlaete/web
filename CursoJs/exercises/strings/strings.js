/*
*Digitar nome completo;
*Seu nome é;
*Seu nome tem x letras;
*A segunda letra do seu nome é;
*O primeira índice das letras do seu nome é;
*O último índice das letras do seu nome é;
*As últimas 3 letras do seu nome são;
*As palavras do seu nome são;
*Seu nome com letras maíusculas;
*Seu nome com letras minúsculas;
*/

const wholeName = prompt('Digite seu nome inteiro: ');
const textInBody = document.querySelector('body');
const countLetters = wholeName.split(' ').join('').length;// .join('') agrupou os caracteres e os contou

textInBody.innerHTML += `Seu nome completo é ${wholeName}.<br>`;
//textInBody.innerHTML += `Seu nome completo tem ${wholeName.length - (countLetters.length - 1 )} letras.<br>`;
textInBody.innerHTML += `Seu nome completo tem ${countLetters} letras (sem contas os espaços).<br>`
textInBody.innerHTML += `A segunda letra do seu nome é '${wholeName[1]}'.<br>`;
textInBody.innerHTML += `O primeiro índice da letra 'a' do seu nome é: ${wholeName.indexOf('a')}.<br>`;
textInBody.innerHTML += `O último índice da letra 'a' do seu nome é: ${wholeName.lastIndexOf('a')}.<br>`;
textInBody.innerHTML += `As últimas 3 letras do seu nome são: ${wholeName.slice(-3)}.<br>`;
textInBody.innerHTML += `As palavras do seu nome são: ${wholeName.split(' ')}.<br>`;
textInBody.innerHTML += `Seu nome em letras maíusculas é: ${wholeName.toUpperCase()}.<br>`;
textInBody.innerHTML += `Seu nome em letras minúscilas é: ${wholeName.toLowerCase()}.<br>`;