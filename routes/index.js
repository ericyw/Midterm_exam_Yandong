var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('landing', { title: 'Welcome to My Favourite People' });
});
/* GET product page. */
router.get('/people', function (req, res, next) {
    res.render('people', { title: 'My Favourite People' });
});
/* GET services page. */
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services' });
});
/* GET about page. */
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'About' });
});
/* GET contact page. */
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});
module.exports = router;
