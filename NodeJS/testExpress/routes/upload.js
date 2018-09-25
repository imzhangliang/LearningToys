var express = require('express');
var router = express.Router();
const path = require('path');
var upload = require('jquery-file-upload-middleware');


upload.configure({
    uploadDir: path.join(__dirname, '../public/images/'),
    uploadUrl: '/images'
})


router.post('/upload', function(req, res, next) {
    upload.fileHandler()(req, res, next);
});



module.exports = router;
