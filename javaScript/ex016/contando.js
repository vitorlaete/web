//função que escuta o botão 'contar'
function contarBotao () {
    const btn = document.querySelector('#buttonCheck');//seleciona o botão
    btn.addEventListener('click', contando);//cria um evento para escutar o botão
}

function contando () {
    let n1 = document.querySelector('#start');
    let n1Valid = n1.value;
    let startInput = Number(n1.value);
    //seleciona o input e captura o valor

    let n2 = document.querySelector('#end');
    let n2Valid = n2.value;
    let endInput = Number(n2.value);
    //seleciona o input e captura o valor

    let n3 = document.querySelector('#step');
    let n3Valid = n3.value;
    let stepInput = Number(n3.value);
    //seleciona o input e captura o valor

    let div = document.querySelector('#sDiv');

    if (n1Valid == '' || n2Valid == '' || n3Valid == '') {
        alert('Preencha todos os campos.');   
    }//verifica se há campos em branco

    if (stepInput == 0){
        alert('Passo inválido, mínimo de 1.');
    }

    if (startInput >= endInput) {
        for (startInput; startInput >= endInput; startInput -= stepInput) {
            div.innerHTML += `${startInput} - `;
        }
    } else if (startInput <= endInput) {
        for (startInput; startInput <= endInput; startInput += stepInput) {
            div.innerHTML += `${startInput} - `;
        }
    }
    div.innerHTML += '🏴';
    //faz a contagem do maior para o menor
}