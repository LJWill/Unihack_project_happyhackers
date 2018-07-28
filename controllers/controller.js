

var Doctor = require("../models/doctor_model");
var Patient = require("../models/patient_model");
var Game = require("../models/game_model");

module.exports = {
    indexPage: function (req, res) {
        res.render('index.ejs', {
            // user: req.user,
        });
        var newDoctor = new Doctor();
        newDoctor.doctorID = "0001";
        newDoctor.email = "123";
        newDoctor.name = "Jack";
        newDoctor.phone = "000";
        newDoctor.password = "123";
        newDoctor.patients = "[]";
        newDoctor.save(function(err, save) {
            if (err)
                return done(err);
            return done(null, newDoctor);
        });
    }
}