const { Router } = require('express')
const { ProductService } = require('../services')

const routerProdut = Router()

routerProdut.get('/search/:product',
  async (req, res) => {

    //const { product } = request;

    //const result = await ProductService.searchProduct(product)

    /* if (result) {
      res.json({
        status: 'ok',
        products: result
      })
      return
    }

    res.json({
      status: 'error',
      message: 'Error on search'
    }) */
    res.json({ msg: 'ok' })
  }
)


module.exports = routerProdut