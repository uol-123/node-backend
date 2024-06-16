const mongoose = require('mongoose');
const { Schema } = mongoose;
   
   // Schema of collection
   //Product Scheme
   const productSchema = new Schema({
    title: { type:String, required:true },
    description: String,
    price: { type:Number, required:true },
    discount: { type:Number, min:[0,"minimum discount 0"],max:[50,"maximum discount 50%"] },
    rating: { type:Number, min:[0,"minimum rating 0"],max:[5,"maximum rating 5"] },
    brand: { type:String, required:true },
    category: { type:String, required:true },
    thumbnail:{ type:String, required:true },
    images:[ String ]
});

// Schema convert into model. 
exports.Product = mongoose.model('Product',productSchema);
