import express from 'express';
import { crawl, getHistory, deletePage } from '../controllers/crawlerController.js';
let crawlerRouter = express.Router();
// we protect the POST, PUT and DELETE methods
crawlerRouter.post('/crawl', crawl);

crawlerRouter.get('/history', getHistory);

crawlerRouter.delete('/:id', deletePage);

export default crawlerRouter;
