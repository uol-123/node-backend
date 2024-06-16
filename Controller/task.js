const fs = require("fs");
const fileData = fs.readFileSync("./model/user.json", "utf8");
const model = require("../model/task");
const { json } = require("body-parser");
const Task = model.Task;

exports.createTask = async (req,res) =>{
    try{
        const task = new Task(req.body);
        let saveTask = await task.save();
        return res.status(200).json(saveTask);
    }
    catch(err){
        return res.status(400).json(err);
    }
  
}
exports.getTask = async (req,res) =>{
    try{
        let task = await Task.findById(req.params.id);
        return res.status(200).json(task);
    }
    catch(err){
        return res.status(400).json(err);
    }
  
}
exports.getAllTasks = async (req,res) =>{
    try{
        let allTasks = await Task.find();
        return res.status(200).json(allTasks);
    }
    catch(err){
        return res.status(400).json(err);
    }
  
}

exports.updateTask = async (req,res) =>{
    try{
        let id = req.params.id
        let updateTask = await Task.findOneAndReplace({_id:id},req.body,{new:true});
        return res.status(200).json(updateTask);
    }
    catch(err){
        return res.status(400).json(err);
    }
  
}

exports.deleteTask = async (req,res) =>{
    try{
        let deleteTask = await Task.findByIdAndDelete(id);
        return res.status(200).json(deleteTask);
    }
    catch(err){
        return res.status(400).json(err);
    }
  
}