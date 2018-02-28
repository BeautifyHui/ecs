var express = require('express');
var router = express.Router();
var log = require("../modle/login")
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
//写入用户名及密码
var um = new log();
um.name = "123";
um.pwd = "asd";
//写入一个商品进行测试
um.good = [{
	"goodcode":001,
	"goodname":"长裙",
	"goodnum":010202103098,
	"goodprice":799,
	"sort":09,
	"date":98,
	"sale":7,
}]
um.save(function(err){
	 if(err){
	 	console.log("用户数据错误")
	 }
})


//获取用户名密码进行比对，页面跳转
router.post('/login',function(req,res){
	var name=req.body.username;
	var pwd=req.body.pwd;
	log.find({"name":name,"pwd":pwd},function(err,num){
		if(!err && num.length > 0){
			console.log("欢迎回来");
			res.render("users")
		}else{
			console.log("用户名或密码错误");
			res.render("index")
		}
	})
})

//获取数据库内商品情况
router.get('/goods',function(req,res){
	var good = res.query.good;
	res.send(good);
})
module.exports = router;
