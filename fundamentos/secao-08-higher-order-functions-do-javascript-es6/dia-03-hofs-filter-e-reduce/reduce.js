const numbers = [50, 85, -30, 3, 15];

let maior = numbers.reduce((acc, curr) => acc > curr ? acc : curr);
console.log(maior);

const numbers2 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const pares = numbers2.reduce((acc, curr) => {});

// const isEven = (number) => number % 2 === 0;
// const sum = (accumulator, number) => accumulator + number;

// const sumNumbers = (array) => array.filter(isEven).reduce(sum); // Olhe que código pequeno e conciso!

// console.log(sumNumbers(numbers2)); // 152

const sum = (accumulator, number) => (
  (number % 2 === 0) ? accumulator + number : accumulator
);

const sumNumbers = (array) => array.reduce(sum, 0);

console.log(sumNumbers(numbers2)); // 152