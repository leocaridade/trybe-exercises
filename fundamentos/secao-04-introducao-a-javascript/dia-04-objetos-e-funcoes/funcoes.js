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


function biggest(a, b) {
    if (a > b) {
        return a + ' é maior do que ' + b;
    } else if (a < b) {
        return b + ' é maior do que ' + a;
    } else {
        return 'Os números são iguais'
    }
}
console.log(biggest(22, 22));