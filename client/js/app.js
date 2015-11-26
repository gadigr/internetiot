/**
 * Created by gadi on 11/13/2015.
 **/

function showMessage(lastMsg){
    // find messages to show now
    var now = new Date();
    var msgToShow = _.chain(messages)
        .filter(function(msg) {
        return ((now >= msg.timeTable.dateRange.from && now <= msg.timeTable.dateRange.to) &&
        (msg.timeTable.weekDays.indexOf(now.getDay() + 1) >= 0) &&
        (now >= Date.parse(msg.timeTable.timeRange.from) && now <= Date.parse(msg.timeTable.timeRange.to)));
    })
        .without(lastMsg)
        .value();

    // set default interval
    var interval = 1000;

    if (msgToShow.length > 0) {
        interval = msgToShow[0].displayTime * 1000;

        // load template
        $("#template-container").load(msgToShow[0].template, function () {
            for (i = 0; i < msgToShow[0].text.length; i++) {
                $("#text" + i).html(msgToShow[0].text[i]);
            }
            for (i = 0; i < msgToShow[0].pics.length; i++) {
                $("#img" + i).attr('src', "assets\\" + msgToShow[0].pics[i]);
            }
        });
    }
    // set timeout for next banner
    setTimeout(function(){
        showMessage(msgToShow[0]);
    }, interval)
}

showMessage();