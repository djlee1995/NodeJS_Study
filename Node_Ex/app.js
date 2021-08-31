var express = require('express');
var ejs = require('ejs');
var app = express();

console.log(__dirname);
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded( {extended : false } ));

app.get('/form',function(req, res){
    res.render('form');
});
app.post('/form_receiver',function(req, res){
    var title = req.body.title;
    var description = req.body.description;
    res.send(title+','+description);
});
app.get('/topic',function(req, res){
    var topics = [
        'Javascript is ...',
        'Nodejs is ...',
        'Express is ...'
    ];
    var output = `
    <a href="/topic?id=0">JavaScript</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br><br>
    ${topics[(req.query.id)]}
    `
    res.send(output);
});
app.get('/topic/:id/:mode',function(req, res){
    res.send(req.params.id+','+req.params.mode);
});

app.get('/template',function(req, res){
    res.render('temp');
});
app.get('/', function(req, res){ //get = 라우터 
    res.send('Hello home page');
});
app.get('/login', function(req, res){
    res.send('login please');
});
app.get('/public', function(req, res){
    res.send('Hello 123 , <img src ="/123.PNG">');
});
app.get('/dynamic', function(req, res){
    res.send('');
});

app.listen(3000,function(){
    console.log('connected 3000 port!!');
});
