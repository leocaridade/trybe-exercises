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



// //Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let index = 0; index < n; index += 1) {
//     inputLine += symbol;
//     console.log(inputLine);
// }


// //Agora inverta o lado do triângulo.
// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n - 1;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//     for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
//         if(columnIndex < inputPosition) {
//             inputLine += ' ';
//         } else {
//             inputLine += symbol;
//         }
//     }
//     console.log(inputLine);
//     inputLine = '';
//     inputPosition -= 1;
// }

// //Depois, faça uma pirâmide com n asteriscos de base:
// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//     for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//         if(columnIndex > controlLeft && columnIndex < controlRight) {
//             inputLine += symbol;
//         } else {
//             inputLine += ' ';
//         }
//     }
//     console.log(inputLine);
//     inputLine = '';
//     controlRight += 1;
//     controlLeft -= 1;
// }




//Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
let n = 9;
let symbol = '*';
let inputLine = '';
let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 1; lineIndex <= midOfMatrix; lineIndex += 1) {
    let outputLine = '';
    for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
        if(columnIndex == controlLeft || columnIndex == controlRight || lineIndex == midOfMatrix) {
            outputLine += symbol;
        } else {
            outputLine += ' ';
        }
    }
    controlRight += 1;
    controlLeft -= 1;
    console.log(outputLine);
}