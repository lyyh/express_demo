/**
 * Created by liuyanhao on 31/5/16.
 */
var express = require('express');
var router = express.Router();
var db = require('../../db/db');
var domainUtil = require('../../util/domainUtil');

router.use('/',function (req,res,next) {
	if(!(req.body.account&&req.body.password)){
		res.send('请输入账号或者密码！');
		return;
	}
	next();
})

//登录验证
router.use('/doLogin',function(req,res,next){
		var account = req.body.account;
		var pwd = req.body.password;
		domainUtil.createDomain(res,function(){
			db.login(res,account,pwd);
		},next)
})

//登录成功
router.use('/',function(req,res){
	var account = req.body.account;
	var pwd = req.body.password;
	// res.statusCode = 500;
	// 	res.status(500);
	// res.set('Content-Type', 'text/html');
	res.render('welcome',{'account':account,'password':pwd,'layout':'layout'});
})

module.exports = router;