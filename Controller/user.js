
const fs = require("fs");
const fileData = fs.readFileSync("./model/user.json", "utf8")
const model = require("../model/user");
const { assert } = require("console");
const User = model.User;

exports.getAllUsers = (req,res) => {
  res.send(JSON.stringify(users));
}

exports.getUser = (req,res) => {
  let userDetail =  users.filter((user) =>{ return user.id == req.params.id } ) ;
  res.send(JSON.stringify(userDetail,this.deleteUser));
}


exports.createUser = async (req,res) => {
 
  try{
    const user = new User(req.body);
    let saveUser = await user.save();
    return res.status(200).json(saveUser);

}
catch(err){
  if(err)
    return res.status(400).json(err.errors);
}
}

exports.updateUser = (req,res) => {
    let userDetail =  users.findIndex((user) =>{ return user.id == req.params.id } ) ;
    let user = users[userDetail]
    users.splice(userDetail,1,{...user,...req.body})
    fs.writeFile("./model/user.json", Buffer.from(JSON.stringify(users)),err => {
      if (err) {
        console.log(err.message);
    
        throw err;
      }
    })
     res.send(users);
}

exports.deleteUser = (req,res) => {
  let index =  users.findIndex((user) =>{ return user.id == req.params.id } ) ;
  users.splice(index,1)
  fs.writeFile("./model/user.json", Buffer.from(JSON.stringify(users)),err => {
    if (err) {
      console.log(err.message);
  
      throw err;
    }
  })
   res.send(users);
}
