const mongoose = require('mongoose')
const validator = require('validator')

const receiptSchema = new mongoose.Schema({
  product_id: ObjectId,
  amount: Number,
  quantity: Number,
  date: Date
})

module.exports = mongoose.model('Receipt', receiptSchema)
