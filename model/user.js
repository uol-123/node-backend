const mongoose = require('mongoose');
const { Schema } = mongoose;
   
   // Schema of collection
   const addressSchema = new Schema({ 
    pincode: {type: Number, required:true},
    street: {type: String, required:true},
    phone: {type: Number, length:[10]}
 });

   //User Schema
   const userSchema = new Schema({
    firstName: { type:String, required:[true,"first Name is required"] ,minlength: [8,"minimum lenth is 8"], maxlength: [16,"maximum lenth is 16"]},
    lastName: {type: String, required:true, minlength: [8,"minimum lenth is 8"], maxlength: [16,"maximum lenth is 16"]},
    age: { type:Number, required:true },
    email: { type:String, minlength:[0,"minimum discount 0"],maxlength:[50,"maximum discount 50%"] },
    address:  addressSchema
});



// Schema convert into model. 
exports.User = mongoose.model('User',userSchema);