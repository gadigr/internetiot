var  express = require('express'),
     app = express(),
     db  = require('./modules/db/db'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    _ = require("underscore"),
    date = require('date-and-time');

app.use(express.static(__dirname + '../../client'));
app.use(cookieParser());
app.use(session({   secret: '1234567890QWERTY',
                    resave: false,
                    saveUninitialized: false}));

app.get('/', function (req, res) {
    res.sendFile("index.html");
});

app.get('/screen=:number', function (req, res) {
    req.session.screen = req.params.number;
    res.sendFile("index.html", { root: '../client'});
});

app.get('/next', function (req, res) {
    //var msgs = _.without(db, _.findWhere(db, {name: req.query.name }));
    var now = new Date();

    var msgToShow = _.chain(db)
        .filter(function(msg) {
        return ((now >= msg.timeTable.dateRange.from && now <= msg.timeTable.dateRange.to) &&
            (msg.timeTable.weekDays.indexOf(now.getDay() + 1) >= 0) &&
            _.find(msg.timeTable.timeRange, function (dailySchedule){
                return (((dailySchedule.day == (now.getDay() + 1)) || (dailySchedule.day == "*")) &&
                        (now >= date.parseH(dailySchedule.from) && now <= date.parseH(dailySchedule.to)));
            }) != undefined);
    })
        .without(_.findWhere(db, {name: req.query.name }))
        .value();

    res.send(msgToShow);
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('app listening at http://%s:%s', host, port);
});