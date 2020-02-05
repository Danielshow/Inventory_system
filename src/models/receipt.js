const mongoose = require('mongoose')
const validator = require('validator')

const ObjectId = mongoose.Schema.ObjectId;

const receiptSchema = new mongoose.Schema({
  name: String,
  product_id: String,
  amount: Number,
  quantity: Number,
  date: Date,
  month: String
})

module.exports = mongoose.model('Receipt', receiptSchema)
