const express = require('express')
const bodyParser = require('body-parser')

const { getSimpsons, setSimpsons } = require('./simpsons.js')

const app = express()
app.use(bodyParser.json());

const port = 3031

app.get('/simpsons', async (_req, res) => {
  try {
    const simpsons = await getSimpsons();

    res.status(200).json(simpsons)
  } catch (error) {
    return res.status(500).end()
  }
})

app.get('/simpsons/:id', async (req, res) => {
  try {
    const { id: paramsID } = req.params
    const simpsonsUtils = await getSimpsons()
    const findSimpson = simpsonsUtils.find(
      ({ id }) => id === paramsID)

    if (!findSimpson) {
      return res.status(404).json({ message: 'simpson not found' })
    }
    return res.status(200).json(findSimpson)

  } catch (error) {
    return res.status(500).end();
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))