const mongoose = require('mongoose')
const validator = require('validator')

const ObjectId = mongoose.Schema.ObjectId;

const receiptSchema = new mongoose.Schema({
  product_id: ObjectId,
  amount: { Type: Number, default: 0 },
  quantity: { Type: Number, default: 0 },
  date: Date
})

module.exports = mongoose.model('Receipt', receiptSchema)
