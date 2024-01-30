/*
O exercício deve ter uma página HTML com nome, sobrenome, peso e altura. Esses dados serão enviados e capturados por objetos que serão criados. 
#Nenhum dado deve ser apagado.
 */
const store = [];

function main () {

    gettingData();

    store.push(gettingData())

    divText(`${gettingData().name}, ${gettingData().lastName}, ${gettingData().weight}, ${gettingData().height}`);
    console.log(store);
}

function gettingData() {
    const name = document.querySelector('#name').value;
    const lastName = document.querySelector('#lastName').value;
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;

    return{
        name, lastName, weight, height
    }
}


function divText (data) {
    const text = document.querySelector('#confirm');
    text.innerHTML += `${data}<br>`;
}