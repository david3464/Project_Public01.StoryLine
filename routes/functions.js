var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('functions/1PhotoAnimation/Photo_Story', { layout: 'hero_layout' });
});

module.exports = router;
