import pservices from '../services/product'

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
