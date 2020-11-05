const { Router } = require('express')
const { ProductService } = require('../services')

const routerProduct = Router()

routerProduct.get('/search/:product',
  async (req, res) => {
    try {
      const { product } = req.params;

      const result = await ProductService.searchProduct(product)
      
      if (!result) {
        throw new Error('Same error append');
      }
      
      res.json({
        success: true,
        products: result
      })
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
        stack: error
      })  
    }



    
  }
)


module.exports = routerProduct