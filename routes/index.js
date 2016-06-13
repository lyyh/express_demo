var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
  // next()
});

router.get('/hello',function (req,res,next) {
  res.render('index',{title:'hello'});
})
//
// router.post('/',function (req,res,next) {
//   res.render('list',{title:'hello'});
// })



module.exports = router;