const fs = require('fs').promises

const fileName = './simpsons.json'

async function getSimpsons() {
  const fileContent = await fs.readFile(fileName, 'utf-8')
  return JSON.parse(fileContent)
}

async function setSimpsons(newSimpsons) {
  return await fs.writeFile(fileName, JSON.stringify(newSimpsons))
}

module.exports = { getSimpsons, setSimpsons }
