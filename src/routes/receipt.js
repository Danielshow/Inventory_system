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
 * and can query by month sales
 * @returns - It returns a response
 */
router.get('/total', ReceiptController.getTotalByMonth);

router.get('/month', ReceiptController.getTotalSaleByProduct);
export default router;



