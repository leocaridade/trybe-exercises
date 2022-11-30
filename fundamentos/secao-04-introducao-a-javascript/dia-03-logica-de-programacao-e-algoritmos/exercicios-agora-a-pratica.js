// //Crie um algoritmo que imprima na tela o fatorial de 10
// let fat = 1;

// for (let index = 10; index > 0; index -= 1) {
//     fat *= index;
// }

// console.log(fat);


// //Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.
// let word = 'tryber';
// let reverseWord = '';

// for (index = 0; index < word.length; index += 1) {
//     reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);


//Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];

//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
let biggestWord = array[0];
let smallestWord = array[0];

for(let index = 0; index < array.length; index += 1) {
    if (array[index].length > biggestWord.length) {
        biggestWord = array[index];
    }
}

for(index = 0; index < array.length; index += 1) {
    if (array[index].length < smallestWord.length) {
        smallestWord = array[index];
    }
}

console.log(biggestWord);
console.log(smallestWord);