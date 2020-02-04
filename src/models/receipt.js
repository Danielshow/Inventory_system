const mongoose = require('mongoose')

const receiptSchema = new mongoose.Schema({
 amount: {
      type: Number,
      required: true,
      validate: (value) => {
          return validate.isNumeric(value.trim())
      }
  },
  quantity: {
    type: Number,
    required: true,
      validate: (value) => {
          return validate.isNumeric(value.trim())
      }
  },
  date: Date
})

module.exports = mongoose.model('Receipt', receiptSchema)