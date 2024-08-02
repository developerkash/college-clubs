const { Schema, model } = require('mongoose');

const joinclubSchema = new Schema({
    
    user_name: {
        type: Number,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    
})

module.exports = model('joinclub', joinclubSchema)