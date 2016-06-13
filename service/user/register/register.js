/**
 * Created by liuyanhao on 31/5/16.
 */
var express = require('express');
var router = express.Router();
var db = require('../../db/db');
var domainUtil = require('../../util/domainUtil');

//注册domain实例
router.use('/', function(req, res, next) {
    if (!(req.body.account&&req.body.password)) {
        res.send('请将信息填写完整！');
        return;
    }
    next();
})

//查询账号
router.use('/',function(req,res,next){
    // //异常处理
    domainUtil.createDomain(res,function(){
        db.findByAccount(req.body.account);
    },next);
});

//进行注册
router.use('/doRegister', function(req, res,next) {
        var account = req.body.account;
        var pwd = req.body.password;

        //插入数据
        domainUtil.createDomain(res,function(){
            db.insert(req, res, account,pwd);
        },next)
})

//注册成功
router.use('/',function(req,res){
    res.send('注册成功！')
})

module.exports = router;