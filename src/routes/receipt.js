import { Router } from 'express';
import ReceiptController from '../controller/receipt'


const router = Router();

/**
 * @description - Route is use to make purchase
 * @returns - It returns a receipt
 */
router.post('/purchase/:id', ReceiptController.purchase);

/**
 * @description - Route is use to get the total in a month
 * 
 * @returns - It returns a response
 */
router.get('/total', ReceiptController.getTotalByMonth);

/**
 * @description - Route is use to get the total sale in a for a product
 *
 * @returns - It returns a response
 */

router.get('/month', ReceiptController.getTotalSaleByProduct);
export default router;



