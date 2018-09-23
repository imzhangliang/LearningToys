var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// 配置本地验证方法
passport.use(new LocalStrategy(function(username, password, done) {
  if (username == 'zhang' && password == '123') { //验证成功，一般是查数据库
    let user = {id:13, name:'zhang', gender:'male'};
    return done(null, user);  //返回用户信息
  } else {  //验证失败
    return done(null, false);
  }
}))

//将用户信息的一部分序列化后存在session中。当然也可以把所用用户信息全存在session中，那么反序列化时也要做相应改动
//保存id的好处是，当用户信息有改动时，passport得到的用户信息可以实时改动；坏处是登录后每个页面都要查数据库（假如反序列化中查了数据库）。
passport.serializeUser(function(user, done) {
  done(null, user.id);
})

//将序列化的用户信息反序列化后，在通过数据库查询出来返回给用户。
passport.deserializeUser(function(id, done) {
  let user = {id:id, name:'zhang', gender:'male'};  //假设这条是根据id从数据库里面查的
  done(null, user);
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',
  passport.authenticate('local'),
  function(req, res) {  //验证成功后，会把用户信息放在req.user中，通过回调函数使用； 验证失败，返回401错误，不执行回调
    res.send('登录成功:' + JSON.stringify(req.user));
  }
)

// router.get('/login',
//   passport.authenticate('local', {
//     successRedirect: '/success',  //验证成功
//     failureRedirect: '/failure'   //验证失败
//   })
// )

//显示session中的所有变量
router.get('/session', function(req, res, next){
  res.jsonp(req.session);
})

//显示登录后每个页面通过passport获得的用户信息
router.get('/user', function(req, res, next){
  res.jsonp(req.user);
})



module.exports = router;
