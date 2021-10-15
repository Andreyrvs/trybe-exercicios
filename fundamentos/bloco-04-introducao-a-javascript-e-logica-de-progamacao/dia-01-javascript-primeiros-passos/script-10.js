const custoProduto = 320;
const valorDeVenda = 540;

let impostoProduto = custoProduto / 100 * 20;
let valorCustoTotal;
let lucro;

if (custoProduto < 0 || valorDeVenda < 0 ) {
  console.log('Valor negativo')
} else {
  valorCustoTotal = custoProduto + impostoProduto;
  lucro = valorDeVenda - valorCustoTotal;
  console.log(lucro * 1000);
}
// console.log(impostoProduto)