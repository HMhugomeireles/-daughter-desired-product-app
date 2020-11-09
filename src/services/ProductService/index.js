const ScrapingService = require('../ScapingService')
const ProductModel = require('../../database/schemas/Product')

async function searchProduct(product) {
  try {
    return await ScrapingService.searchProduct(product);
  
  } catch (error) {
    throw new Error("[ProductService::searchProduct]::", error)
  }
}


async function getAllProductSearch() {
  try {
    return await ProductModel.find({});

  } catch (error) {
    throw new Error("[ProductService::getAllProductSearch]::", error)
  }
}

module.exports = {
  searchProduct,
  getAllProductSearch
}