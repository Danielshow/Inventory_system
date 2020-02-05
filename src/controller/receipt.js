import rservices from '../services/receipt'

class ReceiptController {
  static async purchase(req, res, next) {
    const result = await rservices.getReceiptOnPurchase(req, res, next);
    return res.status(200).json({
        message: "purchase successful",
        receipt: result
    })

  }


  static getTotalByMonth(req, res) {

  }
}

export default ReceiptController;
