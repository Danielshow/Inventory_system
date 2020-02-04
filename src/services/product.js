import Product from '../models/product'


class ProductService {
  constructor(){
    this.db = Product;
  }


  async getAllProducts(req, res, next){
    try {
      const products = await this.db.find()
        res.status(200).json({
          data: products,
          message: 'Products returned successfully'
       })
    } catch (err){
       next(err)   
    }
  }


  async addProduct(req, res, next){
    const { name, amount, quantity } = req.body;
    const product = new this.db({
      name,
      amount,
      quantity,
    })

    try {
      const data = await product.save()
      res.status(201).json({
        data: data,
        message: 'Product added successfully'
      })
    } catch (err){
      next(err)
    }
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

export default new ProductService();
