const ProductModel = require('../../database/schemas')
const getWebScapingFind = require('../../modules/scaping')


async function searchProduct(product) {
  try {
    const result = await getWebScapingFind(product)
    console.log("[Results]", result)

    return 'ok'
  } catch (error) {
    console.log("ERROR::", error)
  }
}

module.exports = {
  searchProduct
}