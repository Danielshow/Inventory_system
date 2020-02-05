import rservices from '../services/receipt'
import Joi from 'joi'

const schema = Joi.object().keys({ 
 month: Joi.string().min(3).max(20).required(),
}); 

const product_schema = Joi.object().keys({ 
 product: Joi.string().alphanum().min(3).max(30).required(),
}); 



class ReceiptController {
  /**
   *
   * @desc - get a product and compute the receipt
   */
  static async purchase(req, res, next) {
    const result = await rservices.getReceiptOnPurchase(req, res, next);
    return res.status(200).json({
        message: "purchase successful",
        receipt: result
    })

  }

  /**
   *
   * @desc - get total by month from the database
   *
   */
  static async getTotalByMonth(req, res, next) {
    if (!req.query.month){
      return res.status(400).json({
        error: "month query params is not passed"
      })
    }
    const result_val = Joi.validate({month: req.query.month}, schema)
    if (result_val.error){
      return res.status(400).json({
        message: 'some error where found',
        error: result_val.error
      })
    }
    const result = await rservices.getTotalByMonth(req, res, next);
    res.status(200).json({
      message: "total by month returned successfully",
      result: result
    })
  }


  /**
   * @desc - get total sale by different product
   *
   */
  static async getTotalSaleByProduct(req, res, next) {
    if (!req.query.product){
      return res.status(400).json({
        error: "product query params is not passed"
      })
    }
    const result_val = Joi.validate({product: req.query.product}, product_schema)
    if (result_val.error){
      return res.status(400).json({
        message: 'some error where found',
        error: result_val.error
      })
    }
    const result = await rservices.getMonthlySaleByProduct(req, res, next)
    res.status(200).json({
      message: "monthly sale by product returned successfully",
      result: result
    })
  }
}

export default ReceiptController;
