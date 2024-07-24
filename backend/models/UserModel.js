const {Schema, model} = require('../connection'); // Importing the schema and model from the connection.js file.

// Defining the schema for the user model.
const userSchema = new Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        default: "user"
    }
})

module.exports =  model('user', userSchema);