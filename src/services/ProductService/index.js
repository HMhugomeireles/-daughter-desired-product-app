const ScrapingService = require('../ScapingService')

async function searchProduct(product) {
  try {
    const result = await ScrapingService.searchProduct(product);

    return result
  } catch (error) {
    console.error("[ProductService::searchProduct]::", error)
  }
}


module.exports = {
  searchProduct
}