// Import and create a new schema
const { Schema, model } = require('../connection')

const clubSchema = new Schema({
    club_name:{
        type:String,
        required:true
    },
    club_type:{
        type:String,
        required:true
    },
    club_cordinator:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    created_on:{
        type:Date,
        default:Date.now
    
    }
})

module.exports = model('club', clubSchema) // Export the model with the schema