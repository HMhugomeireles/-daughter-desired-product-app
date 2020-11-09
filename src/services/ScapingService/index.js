//const ProductModel = require('../../database/schemas')
const getWebScapingFind = require('../../modules/scraping')
const CreditService = require('../CreditService')
const ProductModel = require('../../database/schemas/Product')

async function searchProduct(product) {
  try {
    const allSearchProduct = await ProductModel.find({ keySearch: product });

    if (allSearchProduct.length !== 0) {
      return allSearchProduct
    }

    const result = await getWebScapingFind(product)

    if (!result) {
      throw new Error('Result not found')
    }

    const productCalculated = calculatePrices(result, product);
    
    await ProductModel.insertMany(productCalculated);

    return productCalculated;
    
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
    const credits = CreditService.calculateCreditsBaseOnProductPrice(priceConvert);

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