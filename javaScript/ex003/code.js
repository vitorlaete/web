function button () {
    let botao = document.querySelector('input#button');//seleciona o botão
    botao.addEventListener('click', idade);//adicionar um listener para o clique
}//botão que chama a funcão idade

function idade () {
    let systemDate = new Date();//pega data completa do sistema
    let systemYear = systemDate.getFullYear();//pegar apenas o ano do sistema

    let nasc = document.querySelector('input#aNascimento');//seleciona o campo de ano de nascimento
    let nascValue = Number(nasc.value);//converte o valor em número
    let age = systemYear - nascValue;//subtrai ano de nascimento do ano atual

    let radio = document.querySelectorAll('input[name="sexo"]');//seleciona o input radio
    let radioValue;

    //for que checar se radio está checado
    for (radio of radio){
        //se checado atribui o valor a uma variável
        if (radio.checked) {
            radioValue = radio.value;
            break;//atribuindo, sai.
        }
    }
    //alert(radioValue);
    let ano;

    (age <= 1) ? ano = 'ano': ano = 'anos';

    if (age < 3 && radioValue == 'M') {
            radioValue = 'Masculino';
            let text = document.querySelector('p#yourAge');
        
            text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;

            let img = document.querySelector('img#image');
            img.src = "imagens/homem1ano-pq.png";
    } else if (age < 5 && radioValue == 'M') {
            radioValue = 'Masculino';
            let text = document.querySelector('p#yourAge');
        
            text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
            
            let img = document.querySelector('img#image');
            img.src = "imagens/homem3anos-pq.png";
        } else if (age < 10 && radioValue == 'M') {
                radioValue = 'Masculino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/homem5anos-pq.png";
            } else if (age < 15 && radioValue == 'M') {
                radioValue = 'Masculino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/homem10anos-pq.png";
            } else if (age < 20 && radioValue == 'M') {
                radioValue = 'Masculino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/homem15anos-pq.png";
            } else if (age < 40 && radioValue == 'M') {
                radioValue = 'Masculino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/homem20anos-pq.png";
            } else if (age < 60 && radioValue == 'M') {
                radioValue = 'Masculino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/homem40anos-pq.png";
            } else if (age < 80 && radioValue == 'M') {
                radioValue = 'Masculino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/homem60anos-pq.png";
            } else if (age < 100 && radioValue == 'M') {
                radioValue = 'Masculino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/homem80anos-pq.png";
            } else if (age < 3 && radioValue == "F") {
                radioValue = 'Feminino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/mulher1ano-pq.png";
            } else if (age < 5 && radioValue == 'F') {
                radioValue = 'Feminino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/mulher3anos-pq.png";
            } else if (age < 10 && radioValue == 'F') {
                radioValue = 'Feminino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/mulher5anos-pq.png";
            } else if (age < 15 && radioValue == 'F') {
                radioValue = 'Feminino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/mulher10anos-pq.png";
            } else if (age < 20 && radioValue == 'F') {
                radioValue = 'Feminino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/mulher15anos-pq.png";
            } else if (age < 30 && radioValue == 'F') {
                radioValue = 'Feminino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/mulher20anos-pq.png";
            } else if (age < 40 && radioValue == 'F') {
                radioValue = 'Feminino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/mulher30anos-pq.png";
            } else if (age < 60 && radioValue == 'F') {
                radioValue = 'Feminino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/mulher40anos-pq.png";
            } else if (age < 80 && radioValue == 'F') {
                radioValue = 'Feminino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/mulher60anos-pq.png";
            } else if (age < 100 && radioValue == 'F') {
                radioValue = 'Feminino';
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Detectado sexo ${radioValue} com ${age} ${ano} de  idade.`;
                
                let img = document.querySelector('img#image');
                img.src = "imagens/mulher80anos-pq.png";
            } else{
                let text = document.querySelector('p#yourAge');
            
                text.innerHTML = `Esse estava fazendo hora extra...`;

                let img = document.querySelector('img#image');
                img.src = "imagens/morte-pq.png";
            }

}
