const { getProductFromWorten } = require('./modules/scraping/worten')

async function main() {
  try {
    const product = await getProductFromWorten("macbook pro");
    console.log(product)

  } catch (error) {
    console.error("[App]::", error)
  }
}

main()