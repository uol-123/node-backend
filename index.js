
const express = require("express");
require('dotenv').config();
const cors = require('cors');
const server = express();
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected");

}

var bodyParser = require("body-parser");
const { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct } = require("./Controller/product.js");
const { createTask, getAllTasks, getTask, updateTask, deleteTask } = require("./Controller/task.js");
const { createUser } = require("./Controller/user.js");
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
let port = process.env.PORT || 2000 ;
server.use(express.json());
server.get("/",(req,res)=>{
    res.sendFile('D:/nodejs-backend/node-backend/index.html');
})
server.post("/createUser",createUser)

server.post("/products",createProduct)
server.get("/allProducts",getAllProducts)
server.get("/product/:id",getProduct)
server.put("/updateProduct/:id",updateProduct)
server.delete("/deleteProduct/:id",deleteProduct)

server.post("/task",createTask)
server.get("/allTasks",getAllTasks)
server.get("/task/:id",getTask)
server.put("/updateTask/:id",updateTask)
server.delete("/deleteTask/:id",deleteTask)

server.listen(8080,()=>{
    console.log(`server started at http://localhost:${port}`)
})


