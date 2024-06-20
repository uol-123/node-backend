
const fs = require("fs");
const fileData = fs.readFileSync("./model/user.json", "utf8");
const model = require("../model/product");
const { json } = require("body-parser");
const Product = model.Product;
const users = JSON.parse(fileData)
exports.getAllProducts = async (req,res) => {
  const products =await Product.find(); //price greater then 500 query
  res.send(products);
}

exports.getProduct = async (req,res) => {
  let id = req.params.id;
  let product =  await Product.findById(id);
  res.send(JSON.stringify(product));
}

exports.createProduct = (req,res) => {
  const product = new Product(req.body);
  product.save().then(savedDoc => {
    console.log("savedDoc",savedDoc)
    return res.status(200).json(savedDoc)
    
  }).catch(err=>{
    return res.status(401).json(err)
  });
 
}

exports.updateProduct = async (req,res) => {
 try{
   let id = req.params.id;
   const updateProd = await Product.findOneAndReplace({_id:id}, req.body);
   return res.status(200).json(updateProd);
 }
 catch(err){
   return res.status(400).json(err);
 }
}

exports.deleteProduct = async (req,res) => {
  try{
    let id = req.params.id;
    const deleteProd = await Product.findOneAndDelete({_id:id});
    return res.status(200).json(deleteProd);
  }
  catch(err){
    return res.status(400).json(err);
  }
}
