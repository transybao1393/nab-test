import {
    ProductModel
} from '../model/index';
import status from 'statuses';

class ProductController {

    async showProductById(req, res) {
        try {
            let productId = req.params.pId;
            let productList = await ProductModel.find({
                _id: productId
            }).populate('categoryId', 'pcName');
            res.status(200).json({
                error: false,
                message: status.message[200],
                data: productList || []
            });
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

    async showProductByCategoryId(req, res) {
        try {
            let categoryId = req.params.categoryId;
            let productList = await ProductModel.find({
                categoryId: categoryId
            });
            res.status(200).json({
                error: false,
                message: status.message[200],
                data: productList || []
            });
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

    async showAllProduct(req, res){
        try {
            let productList = await ProductModel.find().populate('categoryId', 'pcName');
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

    async sortByPrice(req, res) {
        let orderType = req.params.orderType; //- asc, desc, by date, alphabet
        let conditions;
        try {
            if(orderType === 'asc') {
                conditions = {'pPrice': 1};
            }else if(orderType === 'desc') {
                conditions = {'pPrice': -1};
            }else if(orderType === 'byDate') {
                conditions = {'created_at': 1};
            }else if(orderType === 'alphabet') {
                conditions = {'pName': 1};
            }
            let sortedProductList = await ProductModel.find().populate('categoryId', 'pcName').sort(conditions);
            res.status(200).json({
                error: false,
                message: status.message[200],
                data: sortedProductList || []
            });
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

    async filterPriceRange(req, res) {
        try {
            let priceFrom = req.query.priceFrom;
            let priceTo = req.query.priceTo;

            let productList = await ProductModel.find({
                pPrice: {$gt: priceFrom, $lt: priceTo}
            }).populate('categoryId', 'pcName');
            res.status(200).json({
                error: false,
                message: status.message[200],
                data: productList || []
            });
        } catch (error) {
            //- throw error
            console.error(error);
            res.status(error.code).json({
                error: true,
                message: error.message,
                data: error
            });
        }
    }

    async searchAny(req, res) {
        //- search like any name, color, branch
        let searchValue = req.query.searchValue;
        console.log('search value', searchValue);
        let regexObj = { $regex: "^" + searchValue, $options: "m" };
        try {
            let productList = await ProductModel.find(
                {
                    $or: [
                        { 'pName': regexObj},
                        { 'pColor': regexObj},
                        { 'pBranch': regexObj},
                    ]
                }).populate('categoryId', 'pcName');
            res.status(200).json({
                error: false,
                message: status.message[200],
                data: productList || []
            });
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

    async searchByBranch(req, res) {
        let branchValue = req.query.branchValue;
        console.log('search value', branchValue);
        let regexObj = { $regex: "^" + branchValue + "$", $options: "m" };
        try {
            let productList = await ProductModel.find({ 'pBranch': regexObj}).populate('categoryId', 'pcName');
            res.status(200).json({
                error: false,
                message: status.message[200],
                data: productList || []
            });
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

export default new ProductController();
