// Função recebe um número e retorna se o número é divisível por 3 ou 5.
// Se for por 3, retorna Fizz; se for por 5, retorna Buzz; se for 3 e 5 retorna FizzBuzz.
// Se não for divisível retorna o número e se não for número, retorna o caractere.
// Usar um loop para gerar números de 0 a 100.

function threeOrFive (number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log('FizzBuzz');
    } else if (number % 3 === 0) {
        console.log('Fizz');
    } else if (number % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(number) // se utilizar typeOf pode-se barrar a entrada.
    }
}

for (let i = 0; i <= 100; i++){
    threeOrFive(i);
}