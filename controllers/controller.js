

var Patient = require("../models/patient_model");
var Game = require("../models/game_model");

module.exports = {
    // Index Page
    indexPage: function (req, res) {
        res.render('index.ejs', {
            user: req.user,
        });
    },

    // Sign up
    signupPage: function (req, res) {
        res.render('signup.ejs', {
            message: req.flash('signupMessage')
        });
    },

    // Log in
    loginPage: function (req, res) {
        res.render('login.ejs', {
            message: req.flash('loginMessage'),
        });
    },

    // Log out
    logout: function (req, res) {
        req.logout();
        res.redirect('/');
    },

    // Check login func
    isLoggedIn: function (req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/');
    }
}