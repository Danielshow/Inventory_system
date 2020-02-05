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

  async deleteProduct(req, res, next){
    try {
      const { id } = req.params;
      await this.db.remove({ _id: id});
      res.status(200).json({
        message: 'Product deleted successfully'
      })
    } catch(err) {
      next(err)
    }
  }


  async updateProduct(req, res, next){
    try {
      const { id } = req.params;
      const result = await this.db.findOne({_id: id})
      const name = req.body.name || result.name
      const amount = req.body.amount || result.amount
      const quantity = req.body.quantity || result.quantity

      const payload = {name, amount, quantity}
      const data = await this.db.updateOne({_id: id}, payload)
      res.status(200).json({
        message: "Product updated successfully",
        data: payload
      })
    } catch(err){
      next(err)
    }
  }


} 

export default new ProductService();
