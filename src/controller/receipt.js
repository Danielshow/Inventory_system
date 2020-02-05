import rservices from '../services/receipt'

class ReceiptController {
  static async purchase(req, res, next) {
    const result = await rservices.getReceiptOnPurchase(req, res, next);
    return res.status(200).json({
        message: "purchase successful",
        receipt: result
    })

  }


  static async getTotalByMonth(req, res, next) {
    if (!req.query.month){
      return res.status(400).json({
        error: "month query params is not passed"
      })
    }
    const result = await rservices.getTotalByMonth(req, res, next);
    res.status(200).json({
      message: "total by month returned successfully",
      result: result
    })
  }


  static async getTotalSaleByProduct(req, res, next) {
    if (!req.query.product){
      return res.status(400).json({
        error: "product query params is not passed"
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
