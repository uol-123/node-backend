const express = require("express")
require('dotenv').config()
const server = express()
server.use(express.static('public'))
let port = process.env.PORT || 2000;
const { getAllUsers } = require("../Controller/user");

const getAllUsers = ('/getAllUsers',getAllUsers)

console.log("port")
server.listen(port,()=>{
    console.log("Server Started at",`http://localhost:${port}`);
})