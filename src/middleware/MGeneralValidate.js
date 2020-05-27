
import status from 'statuses';

class MGeneralValidate {
    checkIfNumeric(req, res, next) {
        let priceFrom = req.query.priceFrom;
        let priceTo = req.query.priceTo;
        let numericAndPositive = /^\d+$/;
        try {
            if(priceFrom.match(numericAndPositive) && priceTo.match(numericAndPositive)){
                //valid integer (only positive)
                next();
            }else{
                res.status(400).json({
                    error: true,
                    message: status.message[400],
                    data: null
                });
            }
        } catch (error) {
            res.status(error.code).json({
                error: true,
                message: error.message,
                data: error
            });
        }

    }

}

export default new MGeneralValidate();
