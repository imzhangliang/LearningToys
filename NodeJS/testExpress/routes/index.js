var express = require('express');
var router = express.Router();
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {

    if (username == "zhang") {
      return done(null, {'name':'zhang', age:27});
    } else {
      return done(null, false, {message: "登录错误！"});
    }
  }
))

passport.serializeUser(function(user, done) {
  done(null, user.name);
})

passport.deserializeUser(function(id, done) {
  done(null, {'name':'zhang'});
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/session',  passport.authenticate('local'),
function(req, res, next){
  res.jsonp(req.user);
})

router.get('/login', passport.authenticate('local', {
  //session: false,
  successRedirect: '/ok',
  failureRedirect: '/no'
}))

router.get('/ok', function(req, res, next){
  res.send("OK");
});

router.get('/no', function(req, res, next){
  res.end("login failure");
})

module.exports = router;
