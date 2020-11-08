require('dotenv').config();
const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const passport = require('passport')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const { mongoConnection } = require('./database')
const serverErrors = require('./middlewares/ErrorHandler')
const loadRoutes = require('./middlewares/routes')
require('./middlewares/auth/passport-setup');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())

app.use(cookieSession({
    name: 'kid-app-session',
    keys: ['key1', 'key2']
}))

loadRoutes(app)

mongoConnection()

app.use(serverErrors.notFound)
app.use(serverErrors.errorHandler)

const PORT = process.env.PORT || 9001
app.listen(PORT, () => console.log("Running in port:", PORT))
