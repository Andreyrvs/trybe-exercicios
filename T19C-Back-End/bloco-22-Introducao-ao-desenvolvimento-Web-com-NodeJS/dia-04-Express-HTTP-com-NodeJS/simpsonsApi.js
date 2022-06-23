const express = require('express')
const bodyParser = require('body-parser')

const { getSimpsons, setSimpsons } = require('./simpsons.js')

const app = express()
app.use(bodyParser.json());

const port = 3031
const routeSimpsons = '/simpsons'

app.get(routeSimpsons, async (_req, res) => {
  try {
    const simpsons = await getSimpsons();

    res.status(200).json(simpsons)
  } catch (error) {
    return res.status(500).end()
  }
})

app.get(`${routeSimpsons}/:id`, async (req, res) => {
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

app.post(routeSimpsons, async (req, res) => {
  try {
    const { id, name } = req.body;
    const simpsons = await getSimpsons();

    // const test = simpsons.some(({id}) => id === idBody)
    if (simpsons.some((chacacter) => chacacter.id === id)) {
      return res.status(409).json({ message: 'id already exists' })
    }
    simpsons.push({ id, name });

    await setSimpsons(simpsons)

    return res.status(204).end()
  } catch (error) {

    return res.status(500).json(error).end()
  }

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))