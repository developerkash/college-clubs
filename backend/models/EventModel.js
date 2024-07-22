const { Schema, event, model } = require('mongoose');

const eventSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    club_type: {
        type: String,
        required: true
    },
    club_name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },

    venue: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    rsvpLink: {
        type: String,
        required: true
    },
    maxCapacity: {
        type: Number,
        required: true
    },
    organizer: {
        type: String,
        required: true
    },
    agenda: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    contactPhone: {
        type: Number,
        required: true
    },
    visibility: {
        type: String,
        required: true
    },
    approvalStatus: {
        type: String,
        required: true
    },
    eventStatus: {
        type: String,
        required: true
    },
    adminNotes: {
        type: String,
        required: true
    },
})

module.exports = model('event', eventSchema)