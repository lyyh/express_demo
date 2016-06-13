/**
 * Created by liuyanhao on 31/5/16.
 */
var mongoose = require('/usr/local/lib/node_modules/mongoose');

//新建一个数据模型
//参数1:数据表
//参数2:数据格式
var User = mongoose.model("user",{
    account:String,
    password:String
});

module.exports = User;