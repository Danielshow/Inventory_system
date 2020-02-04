import { Router } from 'express';


const router = Router();

/**
 * @description - Route is use to get all products
 * @returns - It returns a response
 */
router.get('/products',null);

/**
 * @description - Route is use to add a product
 * @returns - It returns a response
 */
router.post('/products/add',null);

/**
 * @description - Route is use to delete a product
 * @returns - It returns a response
 */
router.delete('/products/:id',null);

/**
 * @description - Route is use to edit a product
 * @returns - It returns a response
 */
router.put('/products/:id',null);


export default router;



