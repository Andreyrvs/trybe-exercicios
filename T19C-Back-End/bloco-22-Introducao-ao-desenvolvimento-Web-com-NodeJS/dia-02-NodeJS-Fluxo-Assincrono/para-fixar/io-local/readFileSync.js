const fs = require('fs');

const nomeDoAquivo = 'meu-arquivo.txt';

try {
  const data = fs.readFileSync(nomeDoAquivo, 'utf-8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}