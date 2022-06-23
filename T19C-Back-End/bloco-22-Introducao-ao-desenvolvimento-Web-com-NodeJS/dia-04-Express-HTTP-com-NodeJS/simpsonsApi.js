const express = require('express')
const bodyParser = require('body-parser')

const {getSimpsons, setSimpsons} = require('./simpsons.js')

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



app.listen(port, () => console.log(`Example app listening on port ${port}!`))