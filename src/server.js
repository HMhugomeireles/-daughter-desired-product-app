require('dotenv').config();
const express = require('express')
const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const { mongoConnection } = require('./database')
const serverErrors = require('./middlewares/ErrorHandler')
const bodyParser = require('body-parser')
const loadRoutes = require('./middlewares/routes')


const app = express();

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

loadRoutes(app)

//mongoConnection()

app.use(serverErrors.notFound)
app.use(serverErrors.errorHandler)

const PORT = process.env.PORT || 9001
app.listen(PORT, () => console.log("Running in port:", PORT))
