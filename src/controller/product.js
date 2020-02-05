import pservices from '../services/product'

class ProductController {
  static getProduct (req, res, next) {
    pservices.getAllProducts(req, res, next)
  }


  static addProduct(req, res, next) { 
    pservices.addProduct(req, res, next)
  }

  static deleteProduct(req, res, next) {
    pservices.deleteProduct(req, res, next);
  }

  static updateProduct(req, res, next) {
    pservices.updateProduct(req, res, next)
  }
}

export default ProductController;
