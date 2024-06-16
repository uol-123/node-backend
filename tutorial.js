
//const indexHtml = require('/index.html')
const express = require("express")
require('dotenv').config()
const bodyParse = require('body-parser')
const server = express()
const fs = require('fs')
const morgan = require("morgan")
const { getAllUsers, getUser, updateUser, deleteUser } = require("./Controller/user")
const resData = [
    { id:2,name: "kinza", age : 23},
    { id:7,name: "fatima", age : 24},
    { id:10,name: "eman", age : 23}
]
//const index = fs.readFileSync('index.html','utf-8')
const UsersRouter = express.Router()
let port = process.env.PORT || 2000;
//with express js

server.use(express.json())
// const server = app.get('/user',async (req,res) => {

//     //res.setHeader('content-type','application/json')
//    // let getUser = resData.filter(item => item.id == req.query.id)
//     res.json(resData);
//     //res.end(JSON.stringify(getUser))

// })

server.use("/api",UsersRouter)
UsersRouter
   .get("/getAllUsers",getAllUsers)
   .get("/getUser/:id" , getUser)
   .put("/updateUser/:id" , updateUser)
   .delete("/deleteUser/:id" , deleteUser)
 // without express js
// const server = app.get((req,res) => {

       // switch(req.url){
       //     case '/':
       //         res.setHeader('content-type','text/html')
       //         res.end(index)
       //         break;
       //     case '/api':
       //         res.setHeader('content-type','application/json')
       //         res.end(JSON.stringify(resData))
       //         break;
       //     case '/user':
       //         res.setHeader('content-type','text/html')
       //         const modifyIndex = index.replace("**name**",resData.name)
       //         res.end(modifyIndex)
       //         break;
       //     case `/user?id=`:
       //         res.setHeader('content-type','application/json')
       //         let getUser = resData.filter(item => item.id == req.query.id)
       //         res.end(JSON.stringify(getUser))
       //         break;
              
       //     default:
       //         res.writeHead(404)
       //         res.end()
       //         break;
       // }
   
//    })

// const requestTime = function (req, res, next) {
//     req.requestTime = Date.now()
//     next()
//   }
  
//   app.use(requestTime)
  
//   app.get('/', (req, res) => {
//     let responseText = 'Hello World!<br>'
//     responseText += `<small>Requested at: ${req.requestTime}</small>`
//     res.send(responseText)
//   })

//document.cookie="testCookie=329"



//custom middleware
// const auth =(req,res,next) => {
//  if(req.body.password == "123"){
//   next()
//  }
//  else {
//   res.sendStatus(401)
//  }

// }

//third party middlewares
//app.use(morgan("dev")) //access information about api 

// built in middlewares
//app.use(express.static('public')) // fetch static file from public folder and display on main page



// app.get('/set',(req,res) => {
//   res.cookie("testCookie","12345")
//   // res.send(req.cookies);
// })
// app.get("/",(req, res) => {

//     res.send("Hi its our main page");
 
// });


// fs.writeFile('test.txt', 'Hello Kinza Shahzadi!','utf8', function (err) { 
//     if (err)
//         console.log(err);
//     else
//         console.log('Write operation complete.');
// });


// fs.appendFile('test.txt', 'How are you?', function (err) { 
//   if (err)
// console.log(err);
//   else
// console.log('Append operation complete.');
// });
// server.listen(port,()=>{
//     console.log("Server Started at",`http://localhost:${port}`);
// })


//nodemon package : monitoring the code changes on every save automaticalty
//node index.js : in this command we need to again run the command for changes.
//globaly install use npm i -g <package-name>

//Mongo DB
// create db with 'use dbName' command in mongoshell
/*
read db file command ./mongosh
create collection in db , 
  db.products.insertOne({"title":"iphone", "model":"LLA","price":"24000"})
  'db' is a reserved word

  read collection data command db.products.find() => always return array of objects.

  insert multiple records use db.products.insertMany([{},{}]
  filter of find specific collection data command db.products.findOne({})

Update collection in DB
db.products.updateOne({'id':1},{$set:{'price':999}});
$set => when update record
$gt => filter for greater than

replaceOne use when you want to same the objectId , but replace the whole document/record, somehow its a 
dangerous operation,

$set only replace that sepecifce property, but the replaceOne replace whole document

Delete command : db.products.deleteOne({'id':4})

*/

// MongoDB Atlas
/*
cloud based database.
connect mongo Atlas with mongoDb Compass

Now connect mongo with your code

dotenv is a library to create .env files to store your environment variables for node.

Mongoose:
javascript libarary 
object modeling for node js. 
looks modifying the js object but in real you are updating tha database
how to connect mongoos?

everything in mongoose start with scheme:
we defined schema for collections and then convert them into models.

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});
const Blog = mongoose.model('Blog', blogSchema);
 PUT: Modifies a record's information and creates a new record if one is not available.
 PATCH: Updates a resource without sending the entire body in the request.

findByIdAndReplace: replace whole object and delete previous one;
findByIdAndUpdate: replace only that value, its safe

you need to merge react into node js to make MERN Project.
*/
