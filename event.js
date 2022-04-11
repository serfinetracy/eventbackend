const mongoose = require('mongoose')

const Event = mongoose.model('Event', {
    title: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },

    address: {
        country: {
            type: String,
            required: true,
            trim: true,
        },

        city: {
            type: String,
            required: true,
            trim: true,
        }
    },
});

module.exports = Event;