const puppeteer = require('puppeteer');
async function crawlPage(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(url);

  const title = await page.evaluate(() => document.title);

  const description = await page.evaluate(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    return metaDescription ? metaDescription.getAttribute('content') : null;
  });

  const h1Elements = await page.evaluate(() => {
    const h1s = Array.from(document.querySelectorAll('h1'));
    return h1s.map(item => ({
      h1: item.textContent
    }));
  });

  const h2Elements = await page.evaluate(() => {
    const h2s = Array.from(document.querySelectorAll('h2'));
    return h2s.map(item => ({
      h2: item.textContent
    }));
  });

  const links = await page.evaluate(() => {
    const anchorElements = document.querySelectorAll('a');
    const linkArray = [];
    anchorElements.forEach(anchor => {
      linkArray.push({ a: anchor.href });
    });
    return linkArray;
  });

  await browser.close();
  return {
    title,
    description,
    h1Elements,
    h2Elements,
    links
  };
}

module.exports = crawlPage;
