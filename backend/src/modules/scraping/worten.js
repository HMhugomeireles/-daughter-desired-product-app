const puppeteer = require('puppeteer')
const { autoScroll } = require('./util')

function wortenSearchURL(product) {
  return `https://www.worten.pt/search?query=${product}&sortBy=relevance&hitsPerPage=48&page=1`;
}

async function scrapingWorten(product) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(wortenSearchURL(product))
    await autoScroll(page)

    const data = await page.evaluate(() => {
      return Array.from(document.querySelector('#products-list-block').children)
        .map(element => ({
          img: element.querySelector('.lazy.loaded').src,
          name: element.querySelector('.w-product__title').innerText,
          priceToShow: element.querySelector('.iss-current-price').innerText,
          link: element.querySelector('a').href
        })
        )
    })

    await browser.close();
    return data;

  } catch (error) {
    console.log("[Worten scrapping] ->", error)
  }
}

module.exports = {
  scrapingWorten
}
