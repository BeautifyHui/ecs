var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users');
});
router.get('/normal',function(req,res,next){
	res.render('normal')
})
module.exports = router;
