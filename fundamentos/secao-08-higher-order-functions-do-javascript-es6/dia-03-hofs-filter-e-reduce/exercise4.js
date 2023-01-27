const books = require("./biblioteca");

const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];
  
  const fantasyOrScienceFictionAuthors = () => books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia')
  .map((book) => book.author.name).sort();

  console.log(fantasyOrScienceFictionAuthors());