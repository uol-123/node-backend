

const model = require("../model/user");

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
