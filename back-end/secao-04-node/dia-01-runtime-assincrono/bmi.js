const readline = require('readline-sync');

const bmiSituation = (bmi) => {
  switch (true) {
    case bmi < 18.5: console.log('Abaixo do peso (magreza)');
    break;
    case bmi >= 18.5 && bmi <= 24.9: console.log('Peso normal');
    break;
    case bmi >= 25 && bmi <= 29.9: console.log('Acima do peso (sobrepeso)');
    break;
    case bmi >= 30 && bmi <= 34.9: console.log('Obesidade grau I');
    break;
    case bmi >= 35 && bmi <= 39.9: console.log('Obesidade grau II');
    break;
    case bmi >= 40: console.log('Obesidade graus III e IV');
    break;
    default: console.log('Erro');
    break;
  }
};

const bmi = () => {
  const weight = readline.questionFloat('What\'s your weight? ');
  const height = readline.questionInt('What\'s your height? ');
  const bmi = weight / (height ** 2);

  console.log(bmi);
  console.log(bmiSituation(bmi));
};

bmi();