const ProductController = require('../controllers/ProductController')
const Auth = require('./auth/auth-routes');


function loadRoutes(app) {
  app.use("/product", ProductController);
  app.use("/auth", Auth);
}

module.exports = loadRoutes
