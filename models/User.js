const { model, Schema } = require('mongoose')

// schema is the overall layout of the data //
// model is the the collection //

const User = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }, 
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
}, { timestamps: true })

module.exports = model('User', User)