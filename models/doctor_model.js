var mongoose = require('mongoose');
//var bcrypt = require('bcrypt-nodejs');

var doctorSchema = mongoose.Schema({
    doctorID: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    name: String,
    phone: String,
    password: {
        type: String,
        required: true
    },
    patients: [
        {patientID: String}
    ]
});

module.exports = mongoose.model("Doctor", doctorSchema);