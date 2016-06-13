/**
 * Created by liuyanhao on 30/5/16.
 */
var express = require('express');
var testRouter = express.Router();


testRouter.use('/',function (req,res,next) {
    console.log("12312312312312")
    // if(req.query){
    //     console.log(req.query)
    //     res.render('服务器处理了get请求:'+req.query);
    // }
     if(req.body){
        console.log(req.body);
        var account = req.body.account;
        // res.setHeader("Access-Control-Allow-Origin", "*");
        res.render('服务器处理了post请求'+'获取了账号:'+account);
    }
    else{
        res.render("不能正确解析json格式的post参数")
    }
})

module.exports = testRouter;
