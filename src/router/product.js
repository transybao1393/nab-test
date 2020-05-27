import express from 'express';
import {
    ProductController
} from '../controllers/index';
import MGeneralValidate from '../middleware/MGeneralValidate';
import {
    trackingActivities
} from '../services/userInfo';

const router = express.Router();

//- show all product
router.get('/', ProductController.showAllProduct);

//- filter product
router.get('/price/:orderType', ProductController.sortByPrice);

//- search like
router.get('/any', ProductController.searchAny);

//- filter price range
router.get('/range', [MGeneralValidate.checkIfNumeric], ProductController.filterPriceRange);

//- publish message using rabbitmq
router.get('/rabbitmq/pub', (req, res) => {
    trackingActivities(req);
    res.json({message: 'Sent'});
});

export default router;