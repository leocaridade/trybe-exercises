// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(7, 3));


// function sub(a, b) {
//     return a - b;
// }
// console.log(sub(14, 5));


// function mult(a, b) {
//     return a * b;
// }
// console.log(mult(8, 3));


// function div(a, b) {
//     return a / b;
// }
// console.log(div(36, 6));


// function mod(a, b) {
//     return a % b;
// }
// console.log(mod(15, 5));


// function biggest(a, b) {
//     if (a > b) {
//         return a + ' é maior do que ' + b;
//     } else if (a < b) {
//         return b + ' é maior do que ' + a;
//     } else {
//         return 'Os números são iguais'
//     }
// }
// console.log(biggest(22, 22));


// function biggest(a, b, c) {
//     if (a > b && a > c) {
//         return a + ' é o maior número'
//     } else if (b > a && b > c) {
//         return b + ' é o maior número'
//     } else if (c > a && c > b) {
//         return c + ' é o maior número'
//     }
// }
// console.log(biggest(23, 22, 18));


// function positivoNegativo (num) {
//     if (num > 0) {
//         return 'positive';
//     } else if (num < 0) {
//         return 'negative';
//     } else {
//         return 'zero';
//     }
// }
// console.log(positivoNegativo(0));


function triang (a, b, c) {
    if (a + b + c === 180 && a > 0 && b > 0 && c > 0) {
        return true;
    } else {
        return false;
    }
}
console.log(triang(60, 30, 90));