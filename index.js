
const express = require("express");
require('dotenv').config();
const cors = require('cors')
const server = express();
const path = require("path")
// const fs = require('fs');
 const mongoose = require('mongoose');
// const logModule = require("./model/log.js");
// //mongoose.connect('mongodb://127.0.0.1:27017/test'); //protocol://localhost:defaultport/dbName
// const { getAllUsers, getUser, updateUser, deleteUser, createUser } = require("./Controller/user");

// MongoDb Connection

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("database connected")

}

// const UsersRouter = express.Router();
const productRouter = express.Router();
// const appRouter = express.Router();
var bodyParser = require("body-parser");
const { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct } = require("./Controller/product.js");
const { createTask, getAllTasks, getTask, updateTask, deleteTask } = require("./Controller/task.js");
const { createUser } = require("./Controller/user.js");
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
let port = process.env.PORT || 2000 ;
server.use(express.json());
// //server.use("/api",UsersRouter)
// //server.use("/web",appRouter)
// console.log("hi")
//server.use(express.static(process.env.PUBLIC_DIR))
// server.use('/', (req, res) => {

//   res.sendFile(path.resolve(__dirname,"public",".next","server","app","index.html"))
// })
appRouter.get("/",(req,res)=>{
    console.log("Form")
    res.send('hello node app')
})
// appRouter.post('/submit-student-data', function (req, res) {
//     var name = req.body.firstName + ' ' + req.body.lastName;
    
//     res.send(name + ' Submitted Successfully!');
// })

// server.get("/getAllUsers",getAllUsers);
// server.get("/getUser/:id" , getUser);
server.post("/createUser",createUser)
// server.patch("/updateUser/:id" , updateUser)
// server.delete("/deleteUser/:id" , deleteUser)

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
//    fs.open('test.txt', 'r', function (err, fd) {
//     debugger
    
//     if (err) {
//         return console.error(err);
//     }
    
//     var buffr = new Buffer.alloc(1024);
    
//     fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytes) {
       
//     if (err) throw err;
            
//     // Print only read bytes to avoid junk.
//     if (bytes > 0) {
//         console.log("read",buffr.slice(0, bytes).toString());
//     }
        
//     // Close the opened file.
//     fs.close(fd, function (err) {
//         if (err) throw err;
//     });
//     });
// });

server.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
})


