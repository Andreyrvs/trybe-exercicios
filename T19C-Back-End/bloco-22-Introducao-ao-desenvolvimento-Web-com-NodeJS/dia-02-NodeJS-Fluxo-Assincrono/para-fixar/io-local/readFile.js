const fs = require('fs');

const nomeDoAquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoAquivo, 'utf-8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoAquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo:  ${data}`);
});