import superagent from 'superagent';

const API = 'http://localhost:3000';
const responseBody = (res: any) => {
  return res.body;
};

const httpHeaders = (req: any) => {
  req.set('Accept', 'application/json');
};

const requests = {
  del: (url: string) => superagent.del(`${API}${url}`).use(httpHeaders).then(responseBody),
  get: (url: string) => superagent.get(`${API}${url}`).withCredentials().use(httpHeaders).then(responseBody),
  put: (url: string, body: any) => superagent.put(`${API}${url}`, body).use(httpHeaders).then(responseBody),
  post: (url: string, body: any) => superagent.post(`${API}${url}`, body).withCredentials().use(httpHeaders).then(responseBody)
};

const Crawler = {
  crawl: (url: any) => requests.post('/crawler/crawl', { url }),
  getHistory: (page: number, pageSize: number) => requests.get(`/crawler/history?page=${page}&pageSize=${pageSize}`),
  deletePage: (id: string) => requests.del(`/crawler/${id}`)
};

export default {
  Crawler
};
