// function verificaPalindrome(word) {
//     for(index in word) {
//         if (word[index] != word[(word.length - 1) - index]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(verificaPalindrome('ovo'));

function verificaPalindrome(string) {
    let reverse = string.split('').reverse().join('');
    if (reverse === string) {
        return true;
    } else {
        return false;
    }
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('bicicleta'));