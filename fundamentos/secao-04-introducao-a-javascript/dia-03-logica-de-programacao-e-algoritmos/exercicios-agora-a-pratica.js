// //Crie um algoritmo que imprima na tela o fatorial de 10
// let fat = 1;

// for (let index = 10; index > 0; index -= 1) {
//     fat *= index;
// }

// console.log(fat);


//Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.
let word = 'tryber';
let reverseWord = '';

for (index = 0; index < word.length; index += 1) {
    reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);