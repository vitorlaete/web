function tabBotao () {
    let botao = document.querySelector('#buttonCheck');
    botao.addEventListener('click', tabuada);
}//Função que executa uma função após clique no botão.

function tabuada () {
    let entry = document.querySelector('#tab');//seleciona o input
    let entryNumber = Number(entry.value);//converte a entrada em número

    document.querySelector('#tabuada').innerHTML = '';

    if (entry.value == '') {
        alert('O campo precisa ser preenchido');
    } else {
        for (let cont = 0; cont <= 10; cont++) {
            let select = document.querySelector('#tabuada');//seleciona o select
            let option = document.createElement('option');//cria um option
            option.setAttribute('value', `${cont}`);//adiciona em value o número do contador
            select.appendChild(option);//insere o child option referente ao select
            option.text = `${entryNumber}x${cont}=${entryNumber*cont}`;//cria a saída da tabuada
        }//for que cria entradas do tipo option
    }

    
}