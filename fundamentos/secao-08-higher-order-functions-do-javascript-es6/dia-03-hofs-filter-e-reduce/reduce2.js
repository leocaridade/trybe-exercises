const countries = require("./countries");

const expectedResult = 4311757;

const getTotalArea = () => countries.reduce((acc, curr) => acc + curr.area, 0);

console.log(getTotalArea());