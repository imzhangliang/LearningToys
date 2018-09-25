var express = require('express');
var router = express.Router();
const path = require('path');
var upload = require('jquery-file-upload-middleware');


upload.configure({
    uploadDir: path.join(__dirname, '../public/images/'),   //上传存放的目录
    uploadUrl: '/images'                                    //上传之后的url的目录部分（不包括文件名）
})


router.post('/upload', function(req, res, next) {
    upload.fileHandler()(req, res, next);
});



module.exports = router;
