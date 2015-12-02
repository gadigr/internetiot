var messages = [{
    name: "First",
    text: ["First", "text2", "text3", "text4"],
    pics: ["a.png", "b.png"],
    template: "templates\\tempA.html",
    displayTime: 10,
    screens: [1,2],
    timeTable: {
        dateRange: {
            from: new Date("2016-01-01"),
            to: new Date("2016-12-30")
        },
        weekDays: [2, 4],
        timeRange: [{
            day: 2,
            from: "06:00",
            to: "12:00"
        },
        {
            day: 4,
            from: "13:00",
            to: "20:00"
        }]
    }
},
    {
        name: "Second",
        text: ["text1", "text2", "text3", "text4", "text5", "text6", "text7", "text8", "text9", "text10"],
        pics: ["a.png"],
        template: "templates\\tempB.html",
        displayTime: 10,
        screens: [1,3],
        timeTable: {
            dateRange: {
                from: new Date("2016-03-01"),
                to: new Date("2016-04-30")
            },
            weekDays: [3, 4],
            timeRange: [{
                day: "*",
                from: "10:00",
                to: "16:00"
            }]
        }
    },
    {
        name: "Third",
        text: [],
        pics: [],
        template: "templates\\tempC.html",
        displayTime: 10,
        screens: [2,3],
        timeTable: {
            dateRange: {
                from: new Date("2016-05-01"),
                to: new Date("2016-06-15")
            },
            weekDays: [1, 2, 3, 4, 5, 6, 7],
            timeRange: [{
                day: "*",
                from: "08:00",
                to: "22:00"
            }]
        }
    },
    {
        name: "Forth",
        text: ["text1", "text2"],
        pics: [],
        template: "templates\\tempA.html",
        displayTime: 10,
        screens: [1],
        timeTable: {
            dateRange: {
                from: new Date("2016-03-29"),
                to: new Date("2016-04-15")
            },
            weekDays: [2],
            timeRange: [{
                day: "*",
                from: "15:00",
                to: "19:00"
            }]
        }
    },
    {
        name: "Fifth",
        text: ["text1", "text2", "text3", "text4", "text5", "text6", "text7"],
        pics: ["a.png", "b.png"],
        template: "templates\\tempB.html",
        displayTime: 10,
        screens: [3],
        timeTable: {
            dateRange: {
                from: new Date("2016-04-01"),
                to: new Date("2016-04-30")
            },
            weekDays: [2, 3, 4],
            timeRange: [{
                day: "*",
                from: "01:00",
                to: "23:00"
            }]
        }
    }];

module.exports = messages;