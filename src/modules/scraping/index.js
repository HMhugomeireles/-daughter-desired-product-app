const { scrapingWorten } = require('./worten')

async function getWebScapingFind(product) {
  try {
    const scapingData = await scrapingWorten(product);

    return scapingData;
  } catch (error) {
    throw new Error("[Scraping::getWebScapingFind]::", error)
  }
}

module.exports = getWebScapingFind