//const express = require('express')
/* const logger = require('morgan')
require('dotenv').config();
const helmet = require('helmet')
const cors = require('cors')
const { mongoConnection } = require('./database')
const serverErrors = require('./middlewares/ErrorHandler')
const bodyParser = require('body-parser')
const loadRoutes = require('./middlewares/routes') */


//const app = express();

//app.use(logger('dev'));
//app.use(bodyParser.json())
//app.use(helmet())
//app.use(cors())

//loadRoutes(app)
/* app.get('/', (req, res) => {
  console.log("kkk")
  res.send('ok')
}) */

//mongoConnection()

//app.use(serverErrors.notFound)
//app.use(serverErrors.errorHandler)

/* const PORT = process.env.PORT || 3000
app.listen(4000, () => console.log("Running in port:", PORT)) */


const express = require('express')
const app = express()
const port = 9001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})