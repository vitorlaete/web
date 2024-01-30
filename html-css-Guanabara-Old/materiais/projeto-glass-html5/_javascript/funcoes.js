function changeImage (foto) {
    document.querySelector('#icone').src = (foto);
}

function calcTotal () {
    let qnt = Number(document.querySelector('#cQnt').value);
    tot = qnt*1500;
    document.querySelector('#cPrice').value = `${tot},00`;
}