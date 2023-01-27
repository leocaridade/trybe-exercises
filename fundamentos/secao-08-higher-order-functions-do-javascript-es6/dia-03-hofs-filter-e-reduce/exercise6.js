const books = require("./biblioteca");

const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => books.filter((book) => book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.').map((book) => book.name);

console.log(authorWith3DotsOnName());
