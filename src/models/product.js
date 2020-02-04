const mongoose = require('mongoose')
const validator = require('validator')

const productSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  quantity: Number,
  date: Date
})

module.exports = mongoose.model('Product', productSchema)
