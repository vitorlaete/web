const elements = [
    {tag: 'div', texto: 'A div'},
    {tag: 'section', texto: 'A section'},
    {tag: 'p', texto: 'A p'},
    {tag: 'footer', texto: 'A footer'},
];

function createElement (element) {
    const anElement = document.createElement(element);
    return anElement;
}

function main () {
    const tagBody = document.querySelector('body');
    let getElements;
    let insertTexts;

    const firstDiv = createElement(elements[0].tag);
    firstDiv.setAttribute('id', 'theFirstDiv');
    tagBody.appendChild(firstDiv);

    for (let i = 0; i < elements.length; i++) {
        getElements = createElement(elements[i].tag);
        firstDiv.appendChild(getElements);
        getElements.setAttribute('id', `element${i}`);
        insertTexts = document.querySelector(`#element${i}`);
        insertTexts.innerText = elements[i].texto;
    }
}
