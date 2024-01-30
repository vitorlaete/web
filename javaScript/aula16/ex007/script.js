//arrays globais que armazenarão os dados passados.
var numbers = [] ;
var major = 0;
var minor = 0;
var sum = 0;
var average = 0;

/*Essa função deve escutar o clique e executar a função Add*/
function button () {
    let button = document.querySelector('#Add');
    button.addEventListener('click', main);
}

//Função responsável por chamar as demais.
function main () {

    Add();

    let finishButton = document.querySelector('#Finish');
    finishButton.addEventListener('click', finish);

}

/*Essa função tem o dever de adicionar um número no campo selection e verificar se o botão "Finalizar" foi clicado. Se o botão "Finalizar" tiver sido clicado ela deve chamar a função que 'finish'.*/
function Add () {
    
    document.querySelector('#info').innerHTML = '';
    sum = 0;
    average = 0;

    let typed = document.querySelector('#number');//selecionar o número inserido
    let numberConvert = Number(typed.value);//converter string para número
    
    //Se o campo de número estiver vazio, solicita o preenchimento
    if (typed.value == '') {
        alert('Preencha o campo de forma correta.');
    }
    else if (numberConvert < 1 || numberConvert > 100) {
        alert('Digite um número entre 1 e 100');
        typed.value = '';
        typed.focus();
    }
    else if (numbers.indexOf(numberConvert) != -1) {//indexOf pesquisa um número dentro de uma array
        alert('Este número já existe, digite outro número.');
        typed.value = '';
        typed.focus();
    }
    else {
        let select = document.querySelector('#dados');//seleciona selection
        let option = document.createElement('option');//criar elemento option
        option.setAttribute('value', `${numbers.length}`);//adiciona um value para o option de acordo com o tamanho do array
        select.appendChild(option);//insere o option dentro do select com o appendChild
        option.text = `Valor ${numberConvert} adicionado.`;//insere um texto referente ao valor adicionado
        numbers.push(numberConvert);//empura o número digitado para a array
        typed.value = '';
        typed.focus();//foca no field value
    }
}

/*Ao ser chamada, essa função diz quantos números foram cadastrados, qual é o maior valor, qual é o menor valor, diz a soma dos valores e a média dos valores digitados.*/
function finish () {

    let information = document.querySelector('#info');
    information.innerHTML = '----------------------------------------------------------<br>';
    if (numbers.length == 1) {
        information.innerHTML += `Apenas ${numbers.length} número foi cadastrado;<br>`;
    }
    else {
        information.innerHTML += `Foram cadastrados ${numbers.length} números;<br>`;
    }

    sortAndSeparate();
    sumNumbers();
    averageNumbers();


    information.innerHTML += `O maior número é ${major};<br>`;
    information.innerHTML += `O menor número é ${minor};<br>`;
    information.innerHTML += `A soma dos números é ${sum};<br>`;
    information.innerHTML += `A média dos números é ${average}.`
}

function sortAndSeparate () {
    numbers.sort();

    minor = numbers[0];
    
    for (c in numbers) {
        if (numbers[c] > major) {
            major = numbers[c];
        }
    }
}

function sumNumbers () {
    for (c in numbers) {
        sum += numbers[c];
    }
}

function averageNumbers () {
    for (c in numbers) {
        average = sum / numbers.length;
    }
}
