var domain = require('domain');

exports.createDomain = function (res,fun,next){
	// 创建domain实例
    var d = domain.create();
    //监听domain的错误事件
    d.on('error', function(err) {
    	//释放domain实例
    	d.dispose();
        if(err.number < 1010){
            res.send(err.message);
            return;
        }else{
            next();
        }
    });
    d.run(fun);
}