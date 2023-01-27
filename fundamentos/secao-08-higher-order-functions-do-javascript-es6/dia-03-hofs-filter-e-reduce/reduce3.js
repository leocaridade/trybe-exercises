const countries = require("./countries")

const expectedResult = {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  }
  
  const longestName = () => countries.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);

  console.log(longestName());