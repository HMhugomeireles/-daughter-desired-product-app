const ProductController = require('../controllers/ProductController')


function loadRoutes(app) {
  app.use("/product", ProductController);
}

module.exports = loadRoutes
