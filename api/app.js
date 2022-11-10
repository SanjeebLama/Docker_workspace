const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"Rule 101",
      "title":"Here and Now; Breathe and Relax"
    },
    {
      "id":"2",
      "title":"Yay !!!!!! It's working. Volume is working"
    },
    {
      "id":"3",
      "title":"Show Review: Alice in Borderland"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})