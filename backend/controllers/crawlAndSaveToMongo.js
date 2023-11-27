const crawlPage = require('./crawlPage');
const CrawledPage = require('../models/CrawledPageModel');
async function crawlAndSaveToMongo(url) {

  const crawledData = await crawlPage(url);
  const urlData = new CrawledPage({
    url: url,
    pageTitle: crawledData.title,
    description: crawledData.description,
    h1Headings: crawledData.h1Elements,
    h2Headings: crawledData.h2Elements,
    links: crawledData.links
  });
  await urlData.save();
}

module.exports = crawlAndSaveToMongo;
