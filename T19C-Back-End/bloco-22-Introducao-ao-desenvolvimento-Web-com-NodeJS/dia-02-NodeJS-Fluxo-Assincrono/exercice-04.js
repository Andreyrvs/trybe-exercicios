const { json } = require('stream/consumers');

const fs = require('fs').promises;

function readAll() {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => {
      const simpsons = JSON.parse(fileContent)
      const strings = simpsons.map(({ id, name }) => `${id} - ${name}`)

      strings.forEach((string) => console.log(string));
    })
}


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

function main() {
  // const simpson = await getSimpsonById(1)
  // console.log(simpson);
  filterSimpsons()
  readAll()
}

main()

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')

  const simpsons = JSON.parse(fileContent)

  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id)

  if (!chosenSimpson) {
    throw new Error('id não encontrado')
  }
  return chosenSimpson
}

async function filterSimpsons() {
  const fileContent = await fs
  .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6')

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray))
}