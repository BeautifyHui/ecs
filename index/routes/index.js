var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/list', function(req, res, next) {
  res.render('list');
});
router.get('/add',function(req,res,next){
	res.render('add')
})
router.get('/normal',function(req,res,next){
	res.render('normal')
})
//获取用户名密码进行比对，页面跳转
router.post('/login',function(req,res){
	var name=req.body.username;
	var pwd=req.body.pwd;
	if(name==1){
		res.render('users')
	}
})
module.exports = router;
