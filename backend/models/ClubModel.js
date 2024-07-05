// Import and create a new schema
const { Schema, model } = require('../connection')

const clubSchema = new Schema({
    clubname:{
        type:String,
        required:true
    },
    clubtype:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

module.exports = model('club', clubSchema) // Export the model with the schema