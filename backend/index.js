const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3001;

app.use(bodyParser.json())

const userController = require('./controllers/user.controller');
app.post('/login', userController.login);

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log(`Started app`)