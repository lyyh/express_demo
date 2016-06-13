var express = require('express');
var router = express.Router();


var users = {
  lyh:{
    name:'liuyanhao',
    website:'http://www.qf.com',
    id:'100'
  },
}; 

//中间件
router.all("/:username",function (req,res,next) {
  //检查用户是否存在
  if(users[req.params.username]){
     next();
  }else{
    next(new Error(req.params.username+' does not exist.'))
  }
})

/* GET users listing. */
/*
处理/users/:username请求,路径规则支持正则表达式
 */
router.get('/:username', function(req, res, next) {
  //用户一定存在,直接展示
  res.send(JSON.stringify(users[req.params.username]));
});

router.put('/:username',function (req,res,next) {
    //修改用户信息
  res.send('Done');
})

router.get("/list",function (req,res) {
  res.render('list',{
    title:'List',
    items:[1991,'liuyh','express','node.js'],
    layout:'layout'
  });
});
module.exports = router;
