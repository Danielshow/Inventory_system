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
    const result = await rservices.getTotalByMonth(req, res, next);
  }
}

export default ReceiptController;
