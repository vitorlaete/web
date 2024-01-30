// Minha primeira solução para apresentar as horas.

// function showTheHour (day, date, month, year, hour, minute) {

//     const daysOfTheWeek = [
//         'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
//     ]

//     const months = [
//         'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
//     ]

//     return `${daysOfTheWeek[day]}, ${date} de ${months[month]} de ${year} às ${hour}:${minute}`;
// }

// function zeroLeftH (hour) {
//     return (hour >= 10) ? hour : `0${hour}`;
// }

// function zeroLeftM (minute) {
//     return (minute >= 10) ? minute : `0${minute}`;
// }

// const currentData = new Date();

// document.querySelector('#currentHour').innerHTML = showTheHour(currentData.getDay(), currentData.getDate(), currentData.getMonth(), currentData.getFullYear(), zeroLeftH(currentData.getHours()), zeroLeftM(currentData.getMinutes()));

// Melhor forma de apresentar as horas.

const currentData = new Date();
document.querySelector('#currentHour').innerHTML = currentData.toLocaleString("pt-BR", { dateStyle: 'full', timeStyle: 'short'});