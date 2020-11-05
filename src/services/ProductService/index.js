const ScrapingService = require('../ScapingService')

async function searchProduct(product) {
  try {
    return await ScrapingService.searchProduct(product);
  
  } catch (error) {
    throw new Error("[ProductService::searchProduct]::", error)
  }
}


module.exports = {
  searchProduct
}