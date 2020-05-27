import mongoose from 'mongoose';

let Schema = mongoose.Schema;
let ProductCategorySchema = new Schema({

    pcName: {type: String, index: true},
    pcDescription: {type: String, required: false}
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const ProductCategory = mongoose.model('ProductCategory', ProductCategorySchema);
export default ProductCategory;
