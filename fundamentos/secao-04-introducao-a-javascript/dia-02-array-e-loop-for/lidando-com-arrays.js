// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     soma = (soma + numbers[index]);
// }
// console.log(soma);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// let media = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     soma = (soma + numbers[index]);
// }
// media = (soma / numbers.length);
// console.log(media);
// if (media > 20) {
//     console.log('Valor maior que 20');
// } else {
//     console.log('Valor menor ou igual a 20');
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let higherNumber = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] > higherNumber) {
//         higherNumber = numbers[index];
//     }
// }
// console.log(higherNumber);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1) {
        odd += 1;
    }
}

if (odd === 0) {
    console.log('Nenhum valor ímpar encontrado!');
} else {
    console.log(odd);
}