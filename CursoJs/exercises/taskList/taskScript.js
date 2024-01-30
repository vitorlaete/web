const div = document.querySelector('#secondDiv');

const input = document.querySelector('#items');

const button = document.querySelector('#addButton');

const list = document.querySelector('#list');

let count = 0;

document.addEventListener('click', function (element) {

    if (!input.value && element.target === button) {
        alert('Valor inválido.')
    } else if (element.target === button){
        addElement();
    }
});

input.addEventListener('keypress', function (element) {
    if (!input.value && element.keyCode === 13) {
        alert('Valor inválido.');
    } else if (element.keyCode === 13) {
        addElement();
    } 

});

function createLi () {
    const li = document.createElement('li');
    li.setAttribute('id', count++);
    return li;
}

function createDeleteButton () {
    const deleteButton = document.createElement('input');
    deleteButton.setAttribute('value', 'apagar');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('id', count++);

    return deleteButton;
}

function addElement () {
    const li = createLi();
    const buttonDelete = createDeleteButton();

    list.appendChild(li);
    li.innerText = input.value;
    li.appendChild(buttonDelete);
    
    cleanInput();
}

function cleanInput () {
    input.focus();
    input.value = "";
}

function deleteElement () {

}