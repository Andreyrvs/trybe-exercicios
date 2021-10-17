function salaryWithoutTax(grossSalary) {
  
  let baseSalary;
  let netSalary;
  let aliquotINSS = {
    aliquot8PercentINSS: aliquot8PercentINSS = grossSalary / 100 * 8,
    aliquot9PercentINSS: aliquot9PercentINSS = grossSalary / 100 * 9,
    aliquot11PercentINSS: aliquot11PercentINSS = grossSalary / 100 * 11,
    aliquotMaxINSS: aliquotMaxINSS = 570.88,

  } 

  if (grossSalary <= 1556.94) {
    baseSalary = grossSalary - aliquotINSS.aliquot8PercentINSS;

  } else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
    baseSalary = grossSalary - aliquotINSS.aliquot9PercentINSS;

  } else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
    baseSalary = grossSalary - aliquotINSS.aliquot11PercentINSS;

  } else if (grossSalary >= 5189.82) {
    baseSalary = grossSalary - aliquotINSS.aliquotMaxINSS;
  }
  
  let portionIR = {
    portionIR7: 142.80,
    portionIR15: 354.80,
    portionIR22: 636.13,
    portionIR27: 869.36,
  } 
  let aliquotIR = {
    aliquotIR7: (baseSalary / 100 * 7.5) - portionIR.portionIR7,
    aliquotIR15: (baseSalary / 100 * 15) - portionIR.portionIR15,
    aliquotIR22: (baseSalary / 100 * 22.5) - portionIR.portionIR22,
    aliquotIR27: (baseSalary / 100 * 27.5) - portionIR.portionIR27,

  } 

  if (baseSalary <= 1903.98) {
    netSalary = baseSalary;
    console.log('R$' + netSalary + ' -> Isento de imposto de renda')
  } else if (baseSalary > 1903.99 && baseSalary <= 2826.65) {
    netSalary = baseSalary - aliquotIR.aliquotIR7;

    console.log('R$' + netSalary)
  } else if (baseSalary > 2826.66 && baseSalary <= 3751.05) {
    netSalary = baseSalary - aliquotIR.aliquotIR15;

    console.log('R$' + netSalary)
  } else if (baseSalary > 3751.06 && baseSalary <= 4664.68) {
    netSalary = baseSalary - aliquotIR.aliquotIR22;

    console.log('R$' + netSalary)
  } else if (baseSalary > 4664.68) {
    netSalary = baseSalary - aliquotIR.aliquotIR27;
    console.log('R$' + netSalary)
  }
  
}

salaryWithoutTax(3000)