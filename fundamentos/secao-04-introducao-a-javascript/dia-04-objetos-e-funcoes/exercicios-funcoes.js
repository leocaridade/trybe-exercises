//exercicio 1
// function verificaPalindrome(word) {
//     for(index in word) {
//         if (word[index] != word[(word.length - 1) - index]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(verificaPalindrome('ovo'));

// function verificaPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
//     if (reverse === string) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(verificaPalindrome('arara'));
// console.log(verificaPalindrome('bicicleta'));



// //exercicio 2
// function biggestIndex(numbers) {
//     let biggestIndex = 0;
//     for (let index in numbers) {
//         if (numbers[biggestIndex] < numbers[index]) {
//             biggestIndex = index;
//         }
//     }
//     return biggestIndex;
// }
// console.log(biggestIndex([2, 4, 7, 80, 42, 27]));


// //exercicio 3
// function smallestIndex(numbers) {
//     let smallestIndex = 0;
//     for (let index in numbers) {
//         if (numbers[smallestIndex] > numbers[index]) {
//             smallestIndex = index;
//         }
//     }
//     return smallestIndex;
// }
// console.log(smallestIndex([2, 4, 6, 7, 10, 0, -3]));


//exercicio 4
function longestName(names) {
    let longestName = names[0];
    for (let index in names) {
        if (longestName.length < names[index].length) {
            longestName = names[index];
        }
    }
    return longestName;
}
console.log(longestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));