const fs = require('fs').promises

const simpsonsJs = './simpsons.js'

async function getSimpsons() {
  const fileContent = await fs.readFile(simpsonsJs, 'utf-8');
  return JSON.parse(fileContent);

}

async function setSimpsons(newSimpsons) {
  const fileContent = await fs.writeFile(simpsonsJs, JSON.stringify(newSimpsons));
  return fileContent;
}

module.exports = { getSimpsons, setSimpsons }