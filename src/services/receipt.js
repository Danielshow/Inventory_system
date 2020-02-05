import Receipt from '../models/receipt'
import Product from '../services/product'


class ReceiptService {
  constructor(){
    this.db = Receipt;
    this.product = Product;
  }


  async getReceiptOnPurchase(req, res, next){
    // find product
    try {
      const product = await this.product.findOne(req, res)
      if (product) {
        req.amount = Number(product.amount) * Number(req.body.quantity)
        req.name = product.name
        const result = await this.generateReceipt(req, res, next) 
        return result;
      } else {
        return res.status(404).json({
          message: "Product is not available"
        })
      }
    } catch (err){
      next(err)
    }
  }

  async generateReceipt(req, res, next){
    const { id } = req.params;
    const { name, amount } = req;
    const { quantity } = req.body;
    const receipt = new this.db({
      name,
      amount,
      quantity,
      productId: id,
      date: Date.now(),
      month: this.getMonth()
    })

    try {
      const data = await receipt.save()
      return data;
    } catch (err){
      next(err)
    }
  }

  async getTotalByMonth(req, res, next) {
    try {
    const result = await this.db.aggregate(
      [
        {$match: {month: req.query.month.toLowerCase()}},
        {$group: {_id: "$name", quantity: {$sum: "$quantity"}, total: {$sum: "$amount"}}}
      ]
    )

    return result;
    } catch (err){
      next(err)
    }
  }


  async getMonthlySaleByProduct(req, res, next){
    try {
    const result = await this.db.aggregate(
      [
        {$match: {name: req.query.product.toLowerCase()}},
        {$group: {_id: "$name", quantity: {$sum: "$quantity"}, total: {$sum: "$amount"}}}

      ]
    )
    return result; 
    } catch (err){
      next(err)
    }
  }

  getMonth(){
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Septempber",
      "October",
      "November",
      "December"

  ];
  return months[new Date().getMonth()].toLowerCase();
  }
} 


export default new ReceiptService()
