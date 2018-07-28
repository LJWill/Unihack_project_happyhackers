



module.exports = {
    // Index Page
    indexPage: function (req, res) {
        res.render('index.ejs', {
            // user: req.user,
        });
    },
    // Login Page
    loginPage: function (req, res) {
        res.render('login.ejs', {
            // message: req.flash('loginMessage'),
        });
    },
}