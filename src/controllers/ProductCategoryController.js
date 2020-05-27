import {
    ProductCategoryModel
} from '../model/index';
import status from 'statuses';

class ProductCategoryController {

    async showProductByCategory(req, res) {
        try {
            let productId = req.query.pId;
            let productList = await ProductModel.find({
                _id: productId
            });
            res.status(200).json({
                error: false,
                message: status.message[200],
                data: productList || []
            });
            //- TODO: optimize error handling and response message, duplicate too much
        } catch (error) {
            //- throw error
            console.error(error);
            res.status(500).json({
                error: true,
                message: error.message,
                data: error
            });
        }
    }

}

export default new ProductCategoryController();
