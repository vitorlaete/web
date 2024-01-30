// setInterval executa uma determinada função de tempos em tempos.
// Ex:

function mostraHora () {
    const data = new Date();

    return data.toLocaleTimeString('pt-BR', { hour12: false}); // hour12: false = tirar o forma de 12h e inserir o formato 24h
}

let time = setInterval (function () { // função anônima
    console.log(mostraHora());
}, 1000); // executa uma função de 1 em 1 segundo (é medido em milésimos)

setTimeout (function () {
    clearInterval(time);
}, 5000); // setTimeout, seta um tempo para realizar determinado comando após x tempo. No caso, eu determinei um clearInterval (limpa intervalo) para a função time, após 5 segundos. 