/**
 * Created by liuyanhao on 30/5/16.
 */
var express = require('express');
var User = require('../model/user');
var errUtil = require('../util/errorUtil');
var errStatus = errUtil.errorStatus();

//插入数据
exports.insert = function(req, res, acc,pwd) {
    //生成要添加的数据文档
    var data = new User({
        account:acc,
        password:pwd
    });

    data.save(function(e, product, numberAffected) {
        if (e) {
            errUtil.handlerErr(errStatus['sysError'], '系统错误！');
            return;
        }
        errUtil.handlerErr(errStatus['opeSuccess'], '注册成功！');
    })
}

//登录
exports.login = function(res, acc, pwd) {
    User.find({
            account: acc,
            password: pwd
        }, function(e, data) {
            if (e) {
                errUtil.handlerErr(errStatus['sysError'], '系统错误！');
                return;
            }

            if (data.length == 0) {
                errUtil.handlerErr(errStatus['opeFail'], '账号或者密码错误！');
            } else {
                errUtil.handlerErr(errStatus['opeSuccess'], '登录成功！');
            }
    });
}

//根据账号查找
exports.findByAccount = function(acc) {
    
    User.find({
        account: acc
    }, function(e, data) {
        if (e) {
            errUtil.handlerErr(errStatus['sysError'], '系统错误！');
            return;
        }

        if (data.length > 0) {
            errUtil.handlerErr(errStatus['opeFail'], '账号已经存在！');
        } else {
            errUtil.handlerErr(errStatus['opeSuccess'], '操作成功！');
        }
    })
}

// //返回用户的账号和密码
// exports.getUserInfo = function (acc) {
//    
// }