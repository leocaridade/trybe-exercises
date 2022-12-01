// const circleArea = raio => {
//     const pi = 3.14;
//     let area = pi * raio ** 2;

//     console.log(`Essa é a área do círculo: ${area}`);
// }

// circleArea(3);
// circleArea(5);



//Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
const longestWord = (text) => {
    const wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
    return result;
}

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));