const countries = require('./countries');

const expectedResult = 120797034;

const getPopulation = () => countries.reduce((acc, curr) => acc + curr.population, 0);

console.log(getPopulation());