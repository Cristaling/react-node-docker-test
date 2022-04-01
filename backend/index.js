const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const middleware = require('./middleware/auth.middleware')
const cors = require('cors')
const csurf = require('csurf')
const app = express()
const port = process.env.PORT || 3001;

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

const csrfProtection = csurf({
  cookie: true
});
app.use(csrfProtection);
app.get('/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken()});
});

const userController = require('./controllers/user.controller');
app.post('/login', userController.login);

app.get('/logout', middleware.loggedIn, (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.get('/', middleware.loggedIn, (req, res) => {
    res.json({ message: 'Hello World!' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log(`Started app`)