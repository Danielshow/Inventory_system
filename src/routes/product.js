import { Router } from 'express';
import ProductController from '../controller/product';


const router = Router();

/**
 * @description - Route is use to get all products
 * @returns - It returns a response
 */
router.get('/products', ProductController.getProduct);

/**
 * @description - Route is use to add a product
 * @returns - It returns a response
 */
router.post('/products/add', ProductController.addProduct;

/**
 * @description - Route is use to delete a product
 * @returns - It returns a response
 */
router.delete('/products/:id', ProductController.deleteProduct);

/**
 * @description - Route is use to edit a product
 * @returns - It returns a response
 */
router.put('/products/:id', ProductController.updateProduct);


export default router;



