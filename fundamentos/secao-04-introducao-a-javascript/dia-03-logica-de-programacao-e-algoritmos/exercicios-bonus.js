// //Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os programas abaixo:

// // Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
// let n = 7;
// let symbol = '*';
// let inputLine = '';

// for (let index = 0; index < n; index += 1) {
//     inputLine = inputLine + symbol;
// }

// for (let index = 0; index < n; index += 1) {
//     console.log(inputLine);
// }



//Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
let n = 5;
let symbol = '*';
let inputLine = '';

for (let index = 0; index < n; index += 1) {
    inputLine += symbol;
    console.log(inputLine);
}
