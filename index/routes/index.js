var express = require('express');
var router = express.Router();
var log = require("../modle/login");
var user = require("../modle/user");
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

//获取数据库内商品情况
router.get('/show',function(req,res,next){
	var pageNo =parseInt( req.query.pageNo || 1);
	var count =parseInt( req.query.count || 10);
//	(skip)略过n条数据（limit）拿到n条数据,（sort）按照*顺序排列
	log.find({},function(err,docs){
		var pagegood = log.find({}).skip((pageNo-1)*count).limit(count).sort({date:-1})
		var all=docs.length;
		var last=Math.ceil(all / count);
//	.exec:发送给客户端
	pagegood.exec(function(err,doc){
		res.render('list',{list:doc,pageNo:pageNo,count:count,last:last,all:all})
	})
	})
})

//商品删除
router.get('/api/remove',function(req,res,next){
	log.findByIdAndRemove({_id:req.query._id},function(err){
		var result={
			status:1,
			massage:"删除成功"
		}
		if(err){
			result.status = 1140,
			result.massage = "删除失败"
		}
		res.send(result);
	})

})
//获取用户名密码进行比对，页面跳转
var one = new user()
one.name = "asd";
one.pwd="123";
one.save(function(err){
	if(err){
		console.log("用户名密码保存失败！")
	}
})
router.get('/login',function(req,res){
	var name=req.query.username;
	var pwd=req.query.pwd;
	user.find({"name":name,"pwd":pwd},function(err,num){
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
	var um = new log();
	um.goodname =  req.body.goodname,
	um.goodcode =  req.body.goodcode,
	um.goodnum = req.body.goodnum,
	um.goodprice = req.body.goodprice,
	um.sale = req.body.sale,
	um.date = req.body.date,
	um.sort = req.body.sort
	um.save(function(err){
		console.log(um)
		var result = {
			status : 1,
			msg :"成功上传新商品到数据库"
		}
		if(err){
			result = {
				status : 110,
				msg :"上传失败！"
			}
		}
		res.send(result);
		console.log(um)
	})
})


//搜索商品
router.get('/api/serch',function(req,res,next){
	var resgs = new RegExp(req.query.keyword,"i");
	log.find({goodname:{$regex:resgs}},function(err,docs){
		var result = {
			status:1,
			con:docs
		}
		if(err){
			result.status=110,
			result.con=null
		}
		res.send(docs);
	})
})
//信息更改
router.get('/api/rewrite',function(req,res,next){
	log.find({_id:req.query.id},function(err,docs){
		res.send("list")
	})
})
module.exports = router;
