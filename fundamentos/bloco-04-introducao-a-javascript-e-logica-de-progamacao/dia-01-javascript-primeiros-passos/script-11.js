let salarioBruto = 3000;
let aliquota8 = salarioBruto / 100 * 8;
let aliquota9 = salarioBruto / 100 * 9;
let aliquota11 = salarioBruto / 100 * 11;
let aliquotaMaxima = 570.88;
let inss;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto - aliquota8;  
  
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  inss = salarioBruto - aliquota9;
  
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  inss = salarioBruto - aliquota11;
  
} else if (salarioBruto >= 5189.82) {
  inss = salarioBruto - aliquotaMaxima;
  
}

let ir;
let salarioLiquido;

let parcela1 = 142.80;
let parcela2 = 354.80;
let parcela3 = 636.13;
let parcela4 = 869.36;

let aliquotaIr7 = inss / 100 * 7.5;
let aliquotaIr15 = inss / 100 * 15;
let aliquotaIr22 = inss / 100 * 22.5;
let aliquotair27 = inss / 100 * 27.5;

if (inss <= 1903.98) {
  console.log(ir);
}else if (inss >= 1903.99 && inss <= 2826.65) {
  ir = aliquotaIr7 - parcela1;
  salarioLiquido = inss - ir;
  console.log(salarioLiquido);
} else if (inss >= 2826.66 && inss <= 3751.05 ) {
  ir = aliquotaIr15 - parcela2;
  salarioLiquido = inss - ir;
  console.log(salarioLiquido);
} else if (inss >= 3751.06 && inss <= 4664.98) {
  ir = aliquotaIr22 - parcela3;
  salarioLiquido = inss - ir;
  console.log(salarioLiquido);
} else if (inss >= 4664.98) {
  ir = aliquotaIr27 - parcela4;
  salarioLiquido = inss - ir;
  console.log(salarioLiquido);
}