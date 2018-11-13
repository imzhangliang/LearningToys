var express = require('express');
var router = express.Router();

// 显示图片
router.get('/showImage', function(req, res, next) {
    res.sendfile("data/images.jpeg");   //将图片显示在浏览器上。
    //如果sendfile中的文件是二进制文件，浏览器也可能会转为下载
});


// 下载图片
router.get('/downloadImage', function(req, res, next){
    res.download("data/images.jpeg");   //访问此链接将进行下载
    // 原理是会在response header中加入 Content-Disposition: attachment; filename="images.jpeg"
    // 默认保存的文件名字未filename=中的内容

})

module.exports = router;
