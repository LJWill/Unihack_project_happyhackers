var router = require('express').Router();
var controller = require('../controllers/controller');

router.get("/", function (req, res) {
    res.redirect('/index');
});
router.get('/index', controller.indexPage);



//Sign up
router.get('/signup', controller.signupPage);
// router.post('/signup', passport.authenticate('local-signup', {
//     successRedirect: '/index', // redirect to the secure profile section
//     failureRedirect: '/signup', // redirect back to the signup page if there is an error
//     failureFlash: true // allow flash messages
// }));


// Log in
router.get('/login', controller.loginPage);
// router.post('/login', passport.authenticate('local-login', {
//     successRedirect: '/index', // redirect to the secure profile section
//     failureRedirect: '/login', // redirect back to the signup page if there is an error
//     failureFlash: true // allow flash messages
// }));

module.exports = router;

