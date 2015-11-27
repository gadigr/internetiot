var  express = require('express'),
     app = express(),
     db  = require('./modules/db/db');

app.use(express.static(__dirname + '../../client'));

app.get('/', function (req, res) {
    res.sendFile("index.html");
});

app.get('/screen=:number', function (req, res) {    
    res.send("whee");
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('app listening at http://%s:%s', host, port);
});