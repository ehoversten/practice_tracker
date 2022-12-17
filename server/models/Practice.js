const { Schema, model } = require('mongoose');


// const Schema = mongoose.Schema;

const practiceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    worked_on: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Practice', practiceSchema);