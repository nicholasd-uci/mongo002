const { model, Schema } = require('mongoose')

// schema is the overall layout of the data //
// model is the the collection //

const Item = new Schema({
    text: {
        type: String,
        unique: true,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true
    }
})

module.exports = model('Item', Item)