import mongoose, { Schema } from 'mongoose';

const crawledPageSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  pageTitle: {
    type: String
  },
  description: {
    type: String
  },
  h1Headings: [{ h1: String }],
  h2Headings: [{ h2: String }],
  links: [{ a: String }],
  creationDate: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('CrawledPage', crawledPageSchema);
