const { Router } = require('express')
const { ProductService } = require('../services')

const routerProduct = Router()

routerProduct.get('/', 
  async (req, res) => {
    try {
      // TODO need create pagination
      const products = await ProductService.getAllProductSearch();

      res.json({
        success: true,
        totalProducts: products.length,
        products
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

routerProduct.post('/search/',
  async (req, res) => {
    try {
      const { productName } = req.body;

      const result = await ProductService.searchProduct(productName)
      
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