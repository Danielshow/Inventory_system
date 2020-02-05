import Product from '../models/product'
import Joi from 'joi'

import { productSchema } from '../controller/product'

class ProductService {
  constructor(){
    this.db = Product;
  }


  /**
   * @desc - get all products
   *
   */
  async getAllProducts(req,res, next){
    try {
      const products = await this.db.find()
      return products;
    } catch (err){
       return next(err)   
    }
  }

  /**
   * @desc - add a product
   *
   */
  async addProduct(req, res, next){
    const { name, amount, quantity } = req.body;
    const product = new this.db({
      name: name.toLowerCase(),
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
  
  /**
   *
   * @desc - delete a product from the database
   */
  async deleteProduct(req, res, next){
    try {
      const { id } = req.params;
      return await this.db.remove({ _id: id});
    } catch(err) {
      next(err)
    }
  }

  /**
   * @desc - find one product in the database
   *
   */
  async findOne(req, res){
    try {
      const { id } = req.params;
      const result = await this.db.findOne({_id: id})
      return result; 
    } catch (err){
      return null
    }
  }


  /**
   *
   * @desc - update a product in the database
   */
  async updateProduct(req, res, next){
    try {
      const { id } = req.params;
      const result = await this.findOne(req, res);
      const name = req.body.name || result.name
      const amount = req.body.amount || result.amount
      const quantity = req.body.quantity || result.quantity

      const payload = {name, amount, quantity}
      const joi_result = Joi.validate(payload, productSchema)
      if (joi_result.error){
        return res.status(400).json({
          message: 'some errors where found',
          error: joi_result.error
        })
      }

      await this.db.updateOne({_id: id}, payload)
      return payload;
    } catch(err){
      next(err)
    }
  }


} 

export default new ProductService();
