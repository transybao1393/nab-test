import express from 'express';
import {
    ProductController
} from '../controllers/index';
import MGeneralValidate from '../middleware/MGeneralValidate';

const router = express.Router();

//- show all product
router.get('/', ProductController.showAllProduct);

//- show product by Id
router.get('/i/:pId', ProductController.showProductById);

//- filter product
router.get('/price/:orderType', ProductController.sortByPrice);

//- search like
router.get('/any', ProductController.searchAny);

//- filter price range
router.get('/range', [MGeneralValidate.checkIfNumeric], ProductController.filterPriceRange);

//- show by branch
router.get('/branch', ProductController.searchByBranch);

//- show by category id
router.get('/category/:categoryId', ProductController.showProductByCategoryId);

export default router;