import Product from '../models/product'


class ProductService {
  constructor(){
    this.db = Product;
  }


  async getAllProducts(req,res, next){
    try {
      const products = await this.db.find()
      return products;
    } catch (err){
       return next(err)   
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
      return data;
    } catch (err){
      next(err)
    }
  }

  async deleteProduct(req, res, next){
    try {
      const { id } = req.params;
      return await this.db.remove({ _id: id});
    } catch(err) {
      next(err)
    }
  }

  async findOne(req, res, next){
    try {
      const { id } = req.params;
      const result = await this.db.findOne({_id: id})
      return result;
    } catch(err){
      return next(err);
    }
  }


  async updateProduct(req, res, next){
    try {
      const { id } = req.params;
      const result = await this.findOne(req, res, next);
      const name = req.body.name || result.name
      const amount = req.body.amount || result.amount
      const quantity = req.body.quantity || result.quantity

      const payload = {name, amount, quantity}
      await this.db.updateOne({_id: id}, payload)
      return payload;
    } catch(err){
      next(err)
    }
  }


} 

export default new ProductService();
