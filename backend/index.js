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

const dataController = require('./controllers/data.controller');
app.get('/chart', middleware.loggedIn, dataController.getData)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log(`Started app`)