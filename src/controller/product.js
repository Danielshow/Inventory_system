import pservices from '../services/product'

class ProductController {
  static getProduct (req, res, next) {
    pservices.getAllProducts(req, res, next)
  }


  static addProduct(req, res, next) { 
    pservices.addProduct(req, res, next)
  }

  static deleteProduct(req, res) {

  }

  static updateProduct(req, res) {

  }
}

export default ProductController;
