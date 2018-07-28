var router = require('express').Router();
var controller = require('../controllers/controller');

router.get("/", function (req, res) {
    res.redirect('/index');
});
router.get('/index', controller.indexPage);


module.exports = router;

