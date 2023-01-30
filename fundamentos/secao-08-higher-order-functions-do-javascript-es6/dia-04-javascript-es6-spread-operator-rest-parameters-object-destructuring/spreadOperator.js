// Faça uma lista com as suas frutas favoritas
const specialFruit = ['kiwi', 'banana', 'melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['melão', 'morango', 'uva'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit, 'suco de laranja', ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));