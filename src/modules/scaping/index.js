const { scapingWorten } = require('./worten')

async function getWebScapingFind(product) {
  try {
    const scapingData = await scapingWorten(product);

    return scapingData;
  } catch (error) {
    throw new Error("[App::Scaping]::", error)
  }
}

module.exports = getWebScapingFind