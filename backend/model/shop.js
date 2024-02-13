const { default: mongoose } = require("mongoose");

const shopSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TopProduct'
    }
});


const Shop = mongoose.model('Shop' , shopSchema);
exports.Shop = Shop