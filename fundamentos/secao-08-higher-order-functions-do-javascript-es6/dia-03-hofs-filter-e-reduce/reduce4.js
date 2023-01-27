const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
const expectedResult = 20;
  
const lettersArray = names.join('').toLowerCase().split('');

const countA = () => {
  // retorne seu código aqui
  return lettersArray.reduce((acc, curr) => curr === 'a' ? acc += 1 : acc, 0)
}

console.log(countA());