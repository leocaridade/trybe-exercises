// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//       console.log('Idade dentro do for:', idade)
//     }
//     //console.log('Idade fora do for:', idade) // retire essa linha ao implementar o tipo de variável correta.
//   }
//   imprimeIdade()


    // // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
    // const pessoa = {
    //     nome: 'Henri',
    //     idade: 20
    //   }
    //   pessoa.nome = 'Luna';
    //   pessoa.idade = 19;
        
    //   console.log('Nome:', pessoa.nome);
    //   console.log('Idade:', pessoa.idade);



    // let favoriteFood = 'Lasanha';
    // favoriteFood = 'Hamburguer';
    // console.log(favoriteFood);



    // //Modifique as concatenações para template literals.
    // const name = 'Adriana';
    // const lastName = 'Soares';
    // console.log(`Olá, ${name} ${lastName}!`);
    // function soma(a,b) {
    //   let resultado = a + b;
    //   return resultado;
    // }
    // let a = 3;
    // let b = 5;
    // console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);


    // //Exercicio 5
    // const numeroAleatorio = () => Math.random()

    //   console.log(numeroAleatorio());


    // //Exercicio 6
    // const hello = (nome) => `Olá, ${nome}!`
    //   let nome = 'Ivan';
    //   console.log(hello(nome));


    // //Exercicio 7
    // const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
    //   let nome = 'Ivan';
    //   let sobrenome = 'Pires';
    //   console.log(nomeCompleto(nome, sobrenome));


    //Exercicio 8
    let speed = 70;
    const speedCar = (speed) => (
        speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`
    );
    console.log(speedCar(speed));