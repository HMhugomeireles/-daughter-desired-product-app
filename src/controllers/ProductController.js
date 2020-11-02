const { Router } = require('express')
const { ProductService } = require('../services')

const routerProduct = Router()

routerProduct.get('/search/:product',
  async (req, res) => {
    const { product } = req.params;

    const result = await ProductService.searchProduct(product)

    if (result) {
      res.json({
        status: 'ok',
        products: result
      })
      return
    }

    res.json({
      status: 'error',
      message: 'Error on search'
    })
  }
)


module.exports = routerProduct