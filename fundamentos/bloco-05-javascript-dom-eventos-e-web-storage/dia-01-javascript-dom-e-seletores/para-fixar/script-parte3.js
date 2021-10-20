const headerH1 = document.querySelector('header')
headerH1.style.backgroundColor = '#2FC18C'
// cor de funde da section
const urgente = document.querySelector('.emergency-tasks');
urgente.style.backgroundColor = "salmon";

// Cor da div dentro da classe no-emergency-tasks
const urgenteImportaneH3 = document.querySelectorAll('div > h3')[0]
urgenteImportaneH3.style.backgroundColor = 'purple';
// Cor da div dentro da classe emergency-tasks
const urgenteNaoimportanteH3 = document.querySelectorAll('div h3')[1];
urgenteNaoimportanteH3.style.backgroundColor = 'purple';
// cor de fundo section
const naoUrgente = document.querySelector('.no-emergency-tasks');
naoUrgente.style.backgroundColor = "gold";
//  Cor da div dentro da classe no-emergency-tasks
const naoUrgenteImportane = document.querySelectorAll('.no-emergency-tasks div h3')[0]
naoUrgenteImportane.style.backgroundColor = 'black';
// Cor da div dentro da classe no-emergency-tasks
const naoUrgenteNaoimportante = document.querySelectorAll('.no-emergency-tasks div h3')[1];
naoUrgenteNaoimportante.style.backgroundColor = 'black'

const footer = document.querySelector('footer');
footer.style.backgroundColor = 'darkgreen'