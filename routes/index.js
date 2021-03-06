var express = require('express');
var router = express.Router();
const db = require("../models/index");
/* GET home page. */

router.get('/', async function (req, res, next) {
  res.render('home', { course: await db.course.findAll() });
});
router.get('/signUp', function (req, res, next) {
  res.render('signUp');
});
router.get('/login', function (req, res, next) {
  res.render('login');
});

module.exports = router;
