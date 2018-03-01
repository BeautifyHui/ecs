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
	"sale":7
}];
um.save(function(err){
	 if(err){
	 	console.log("用户数据错误")
	 }
})


//获取用户名密码进行比对，页面跳转
router.get('/login',function(req,res){
	var name=req.query.username;
	var pwd=req.query.pwd;
	log.find({"name":name,"pwd":pwd},function(err,num){
		if(!err && num.length > 0){
			console.log("欢迎回来");
			res.send("true")
		}else{
			console.log("用户名或密码错误");
			res.send("false");
		}
	})
})
//添加新商品到数据库
router.post("/add/goods",function(req,res){
	um.good.push(JSON.parse(req.body.addG));
	um.save(function(err){
		if(err){
			res.send("数据库错误")
		}else{
			res.send("成功上传新商品到数据库")
		}
	})
})
//获取数据库内商品情况
router.get('/goods',function(req,res){
	console.log(um.good)
	var good = um.good;
	res.send(good);
})
module.exports = router;
