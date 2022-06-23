const fs = require('fs').promises

const fileName = './simpsons.json'

async function getSimpsons() {
  const fileContent = await fs.readFile(fileName, 'utf-8')
  return JSON.parse(fileContent)
}

async function setSimpsons(newSimpsons) {
  const fileContent = await fs.writeFile(fileName, JSON.stringify(newSimpsons));
  return fileContent;
}

module.exports = { getSimpsons, setSimpsons }
