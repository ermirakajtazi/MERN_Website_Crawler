import CrawledPage from '../models/CrawledPageModel';
const crawlAndSaveToMongo = require('./crawlAndSaveToMongo');
export const crawl = async (req, res) => {
  const { url } = req.body;
  crawlAndSaveToMongo(url);
  return res.json({ url });
};

//load history using mongoose -> https://mongoosejs.com/
export const getHistory = (req, res) => {
  CrawledPage.find({}, (error, pages) => {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const startIndex = (page - 1) * pageSize;
    const endIndex = page * pageSize;

    const paginatedItems = pages.slice(startIndex, endIndex);
    if (error) {
      return res.status(400).json(error);
    }

    res.json({
      data: paginatedItems,
      currentPage: page,
      totalItems: pages.length
    });
  });
};

export const deletePage = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedData = await CrawledPage.findByIdAndRemove(id);

    if (!deletedData) {
      return res.status(404).json({ message: 'Data not found' });
    }

    return res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
