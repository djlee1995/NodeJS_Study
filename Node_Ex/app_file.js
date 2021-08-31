var express = require('express');
var ejs = require("ejs");
var fs = require('fs');
var app = express();
var compression = require('compression');

app.set('views', __dirname + '/views_file');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded( {extended : false } ));
app.use(compression());

app.get('/topic/new',function(req, res){
    res.render('new');
});

app.post('/topic', function(req ,res){
    var title = req.body.title;
    var description = req.body.description;
    console.log(title,description);
    res.send(title+','+description);
    res.send('post')
    
});
app.listen(3000, function(){
    console.log('Connected, 3000port!!')
});
