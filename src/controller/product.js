import pservices from '../services/product'
import Joi from 'joi'

export const productSchema = Joi.object().keys({ 
 name: Joi.string().alphanum().min(3).max(30).required(),
 amount: Joi.number().integer().min(1).max(1000000).required(), 
}); 

class ProductController {
  /**
   *
   * @desc get all product from the database
   */
  static async getProduct (req, res, next) {
   const products = await pservices.getAllProducts(req, res, next)
    res.status(200).json({
      data: products,
      message: 'Products returned successfully'
    })
  }

  /**
   *
   * @desc add a product to the database
   */
  static async addProduct(req, res, next) { 
    const values = {
      name: req.body.name,
      amount: req.body.amount,
    }
   const result = Joi.validate(values, productSchema)
    if (result.error){
      return res.status(400).json({
        message: "some errors where found",
        error: result.error
      }) 
    }
   const data = await pservices.addProduct(req, res, next)
    res.status(201).json({
        data: data,
        message: 'Product added successfully'
      })
  }

  /**
   *
   * @desc delete a product from the database
   */
  static async deleteProduct(req, res, next) {
    await pservices.deleteProduct(req, res, next);
    res.status(200).json({
        message: 'Product deleted successfully'
    })
  }

  /**
   *
   * @desc update a product
   */
  static async updateProduct(req, res, next) {
   const payload = await pservices.updateProduct(req, res, next)
   res.status(200).json({
        message: "Product updated successfully",
        data: payload
    })
  }
}

export default ProductController;
