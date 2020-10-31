const puppeteer = require('puppeteer')

function wortenSearchURL(product) {
  return `https://www.worten.pt/search?query=${product}&sortBy=relevance&hitsPerPage=48&page=1`;
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      var totalHeight = 0;
      var distance = 100;
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

async function getRawData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //await page.goto(URL, { waitUntil: "networkidle2" })
  await page.goto(wortenSearchURL("macbook pro"))

  await autoScroll(page)

  const data = await page.evaluate(() => {
    return Array.from(document.querySelector('#products-list-block').children)
      .map(element => {
        const img = element.querySelector('.lazy.loaded').src
        const title = element.querySelector('.w-product__title').innerText
        /* const currentPrice = {
          main: parseInt(element.querySelector('.iss-current-price > .w-product-price__main').innerText),
          dec: parseInt(element.querySelector('.iss-current-price >  .w-product-price__dec').innerText),
          priceTOShow: element.querySelector('.iss-current-price').innerText
        } */

        return {
          img,
          title,
          priceTOShow: element.querySelector('.iss-current-price').innerText,
          /* price: {
            currentPrice
          }, */
          createAt: Date.now()
        }
      })
  })
    .catch(err => console.log("Error:: ->", err))

  console.log("data", { total: data.length, data })

  await browser.close();
}

async function filterRawData(rawData) {

}


async function main() {
  const rawData = await getRawData();
  //const dataFilted = filterRawData(rawData);
  //console.log(dataFilted)
}

main()