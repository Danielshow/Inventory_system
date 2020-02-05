import Receipt from '../models/receipt'


class ReceiptService {
  constructor(){
    this.db = Receipt;
  }


  getReceiptOnPurchase(req, res, next){
    // find product
    // is it availabe
    
    this.db.insertOne(data)
  }
} 


export default new ReceiptService()
