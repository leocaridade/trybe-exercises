const books = require("./biblioteca");

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];
  
const currentYear = new Date().getFullYear();

const oldBooks = () => books.filter((book) => currentYear - book.releaseYear >= 60).map((book) => book.name); 

console.log(oldBooks());