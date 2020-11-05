//const ProductModel = require('../../database/schemas')
const getWebScapingFind = require('../../modules/scraping')


async function searchProduct(product) {
  try {
    const result = await getWebScapingFind(product)

    if (!result) {
      throw new Error('Result not found')
    }
    console.log("###", result)

    return calculatePrices(result, product)
    
  } catch (error) {
    throw new Error("[ScrapingService::searching]::", error.message)
  }
}

module.exports = {
  searchProduct
}

function calculatePrices(products, productSearch) {
  return products.map(product => {
    const priceConvert = parseFloat(product.priceToShow.slice(1, product.priceToShow.length));
    const credits = Math.floor(priceConvert * 2.45 * 10)

    return {
      name: product.name,
      keySearch: productSearch,
      img: product.img,
      price: {
        priceToShow: product.priceToShow,
        euros: priceConvert,
        credits,
      }
    }
  })
}