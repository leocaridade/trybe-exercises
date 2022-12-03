// const numerosRomanos = {
//     i: 1,
//     v: 5,
//     x: 10,
//     l: 50,
//     c: 100,
//     d: 500,
//     m: 1000,
// };

// function romanoParaDecimal(numero) {
//     numero = numero.toLowerCase();
//     const len = numero.length;
//     let soma = numerosRomanos[numero[len - 1]];
//     let atual = numerosRomanos[numero[len - 1]];

//     for (let index = 2; index <= len; index += 1) {
//         const prox = numerosRomanos[numero[len - index]];

//         if (atual <= prox) {
//             soma += prox;
//         } else {
//             soma -= prox;
//         }

//         atual = prox;
//     }

//     return soma;
// }

// console.log(romanoParaDecimal('MMXVIII'));
// console.log(romanoParaDecimal('VI'));
// console.log(romanoParaDecimal('IV'));


// //Exercicio 2
// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
// const arrayOfNumbers = vector => {
//     const result = [];
//     for (let index = 0; index < vector.length; index += 1) {
//         const numbers = vector[index];

//         for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
//             const current = numbers[indexSub];

//             if ((current % 2) === 0) {
//                 result.push(current);
//             }
//         }
//     }

//     return result;
// }
// console.log(arrayOfNumbers(vector));


//Exercicio 3
// const basket = [
//     'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//     'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//     'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//     'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//     'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//     'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//     'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//     'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//     'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//     'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//     'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//     'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//     'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//     'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//     'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//     'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//     'Banana', 'Pera', 'Abacate', 'Uva',
//   ];
  
//   const result = {};
  
//   for (let index = 0; index < basket.length; index += 1) {
//     const fruit = basket[index];
//     if (!result[fruit]) result[fruit] = 0;
//     result[fruit] += 1;
//   }
  
//   const summaries = [];
  
//   for (fruit in result) {
//     let message = `${result[fruit]} ${fruit}`;
//     if (result[fruit] > 1) message += 's';
//     summaries.push(message);
//   }
  
//   console.log(`Sua cesta possui: ${summaries.join(', ')}.`);



  //Exercicio 4
  let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  let moradoresBlocoDois = moradores.blocoDois;

  let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];

  console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois.nome + ' ' + ultimoMoradorBlocoDois.sobrenome + ' mora no ' + ultimoMoradorBlocoDois.andar + '° andar, apartamento ' + ultimoMoradorBlocoDois.apartamento);

  for (let index = 0; index < moradores.blocoUm.length; index += 1) {
    console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
  }
  
  for (let index = 0; index < moradores.blocoDois.length; index++) {
    console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
  }