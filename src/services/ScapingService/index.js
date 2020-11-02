//const ProductModel = require('../../database/schemas')
const getWebScapingFind = require('../../modules/scraping')


async function searchProduct(product) {
  try {
    const result = await getWebScapingFind(product)
    console.log("[Results]", result)

    return 'ok'
  } catch (error) {
    throw new Error("[ScrapingService::searching]::", error)
  }
}

module.exports = {
  searchProduct
}