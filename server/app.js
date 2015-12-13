var  express = require('express'),
     app = express(),
     db  = require('./modules/db/db'),
    mDb = require('./modules/db/messages.db'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    _ = require("underscore");

// setup app settings and session
app.use(express.static(__dirname + '../../client'));
app.use(cookieParser());
app.use(session({   secret: '1234567890QWERTY',
                    resave: false,
                    saveUninitialized: false}));

// default screen is screen 1
app.get('/', function (req, res) {
    req.session.screen = 1;

    res.sendFile("index.html", { root: '../client'});
});

// localhost:8080/screen=2 to set screen 2 to session
app.get('/screen=:number', function (req, res) {
    req.session.screen = Number(req.params.number);
    res.sendFile("index.html", { root: 'client'});
});

// get next message by screen number saved on session
app.get('/next', function (req, res) {

    var now = new Date();

    var msgToShow = _.chain(db)
        .filter(function(msg) {
        return ((msg.screens.indexOf(req.session.screen) >= 0) && // filter by screen number from session
        (now >= msg.timeTable.dateRange.from && now <= msg.timeTable.dateRange.to) && // filter by date range (from-to)
            (msg.timeTable.weekDays.indexOf(now.getDay() + 1) >= 0) && // filter by days to display message
            _.find(msg.timeTable.timeRange, function (dailySchedule){ // filter by time range in relevant day and hour
                return (((dailySchedule.day == (now.getDay() + 1)) || (dailySchedule.day == "*")) &&
                        (now >= parseHours(dailySchedule.from) && now <= parseHours(dailySchedule.to)));
            }) != undefined);
    })
        .without(_.findWhere(db, {name: req.query.name })) // remove from list the current message that is displayed now
        .value();

    // return the message to client
    res.send(msgToShow);
});

// run server
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('app listening at http://%s:%s', host, port);
});

// parse from 'HH:mm' string to date object
function parseHours(hoursString){
    var now = new Date();
    var time = hoursString.split(":");
    return (new Date(now.getFullYear(), now.getMonth(), now.getDate(), time[0], time[1]));

}

