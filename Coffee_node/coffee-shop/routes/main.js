var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    var data = {
        title : "DongJun`s CoffeeShop",
        description : "동준 커피숍에 오신걸 환영합니다."
    }
    res.render('home',data);
});

module.exports = router;