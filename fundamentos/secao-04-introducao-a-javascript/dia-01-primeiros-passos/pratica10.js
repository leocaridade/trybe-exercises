// const valorCusto = 20;
// const valorVenda = 100;
// let valorCustoTotal = valorCusto * 1.20;
// let lucro = (valorVenda - valorCustoTotal) * 1000;

// if (valorCusto < 0 || valorVenda < 0) {
//     console.log('ERRO, valor informado abaixo de zero');
// } else {
//     console.log(lucro);
// }


const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 || saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};
