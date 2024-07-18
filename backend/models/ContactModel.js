// Import and create a new schema
const { Schema, model } = require('../connection')

const contactSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    textarea:{
        type:String,
        required:true
    },    
   
})

module.exports = model('contact', contactSchema) // Export the model with the schema