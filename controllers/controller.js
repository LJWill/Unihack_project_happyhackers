



module.exports = {
    indexPage: function (req, res) {
        res.render('index.ejs', {
            // user: req.user,
        });
    }
}