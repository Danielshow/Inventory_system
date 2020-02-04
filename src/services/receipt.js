import Receipt from '../models/receipt'


class ReceiptService {
  constructor(){
    this.db = Receipt;
  }


  addProduct(data){
    this.db.insertOne(data)
  }

  deleteProduct(data){
    try {
      this.db.deleteOne(data);
    } catch(err) {
      throw(err)
    }
  }


  updateProduct(data){
    try {
      this.db.updateOne(data)
    } catch(err){
      throw(err)
    }
  }
} 
