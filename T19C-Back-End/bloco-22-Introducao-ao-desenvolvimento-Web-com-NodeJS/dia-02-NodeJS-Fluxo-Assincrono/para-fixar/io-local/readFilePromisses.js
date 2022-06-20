const fs = require('fs').promises;

const nomeDoAquivo = 'meu-arquivo.txt';

fs.readFile(nomeDoAquivo, 'utf-8')
  .then((data) => {
    console.log(`Conteúdo do arquivo: ${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possivel ler o arquivo ${nomeDoAquivo}\n Erro: ${err}`);
    process.exit(1);
  })
  