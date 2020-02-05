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
    console.log(name, amount, quantity, id)
    const receipt = new this.db({
      name,
      amount,
      quantity,
      productId: id,
      date: Date.now()
    })

    try {
      const data = await receipt.save()
      return data;
    } catch (err){
      next(err)
    }
  }
} 


export default new ReceiptService()
