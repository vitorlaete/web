// Se for executar algum código que possa vir a apresentar algum erro no programa, execute-o dentro do bloco try.

try {// executa um determinado bloco
    console.log(calculate)
} catch { // trata os erros
    console.log('variable calculate trated.')
} finally { // sempre é executado independente se deu erro ou não.
    console.log('Sempre executa')
}

//procurar entender melhor sobre a função throw 