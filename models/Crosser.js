const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');


// crosser schema

const crosserSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid Email Address'],
        required: 'Please Supply an email address'
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    school_address: {
        type: String
    },
    home_address: {
        type: String
    },
    phone_number: {
        type: Number
    },
    date_of_birth: {
        type: Date
    },
    department: {
        type: String
    },
    expected_year_of_graduation: {
        type: String
    },
    year_of_recruitment: {
        type: String
    },
    semester_of_recruitment: {
        type: String,
    }
});

crosserSchema.index({
    name: 'text'
})

crosserSchema.plugin(mongodbErrorHandler);
module.exports = mongoose.model('Crosser', crosserSchema);