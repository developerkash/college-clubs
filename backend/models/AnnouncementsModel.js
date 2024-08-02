const { Schema, model } = require('../connection')

const announcementsSchema = new Schema ({
    title:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    created_on:{
        type:Date,
        default:Date.now
    },
})

module.exports = model('announcements', announcementsSchema) 