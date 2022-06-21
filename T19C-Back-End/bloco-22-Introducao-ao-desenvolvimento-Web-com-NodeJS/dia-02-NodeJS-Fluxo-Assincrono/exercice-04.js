const fs = require('fs').promises;

function readAll() {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      const simpsons = JSON.parse(fileContent)
      const strings = simpsons.map(({ id, name }) => `${id} - ${name}`)

      strings.forEach((string) => console.log(string));
    })
}

function main() {
  readAll()
}

main()

/* Extra: com `async/await` a função `readAll` ficaria assim:
async function readAllComAsyncAwait() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

  strings.forEach((string) => console.log(string));
}

function main() {
  readAllComAsyncAwait();
}
...
*/