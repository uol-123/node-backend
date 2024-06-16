const mongoose = require('mongoose');
const { Schema } = mongoose;

    //Task Scheme
    const taskSchema = new Schema({
    title: { type:String, required:true },
    description: String,
    status: Boolean,
    Date: {type: Date, default: Date.now() }
});

// Schema convert into model. 
exports.Task = mongoose.model('Task',taskSchema);