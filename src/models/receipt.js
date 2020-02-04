const mongoose = require('mongoose')
const validator = require('validator')

const ObjectId = mongoose.Schema.ObjectId;

const receiptSchema = new mongoose.Schema({
  product_id: ObjectId,
  amount: Number,
  quantity: Number,
  date: Date
})

module.exports = mongoose.model('Receipt', receiptSchema)
