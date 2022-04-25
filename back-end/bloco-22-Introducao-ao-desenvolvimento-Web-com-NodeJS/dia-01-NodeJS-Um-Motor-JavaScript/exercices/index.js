const readline = require('readline-sync')

const scripts = [
  {name: 'Imc' , script: './imc' },
  {name: 'Velocidade' , script: './velocidade' },
  {name: 'Sorteio', script: './sorteio' },
]

let mensagem = scripts.map((script, index) => `${index + 1} - ${script.name}`)

mensagem.unshift('Escolha um número para executar o script correspondente');

mensagem = mensagem.join('\n');

const scriptNumber = readline.questionInt(mensagem) - 1;


const script = scripts[scriptNumber];

if (!script) {
  return console.log('Número inválido. Saindo')
};

require(script.script);