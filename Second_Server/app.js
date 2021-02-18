const express = require("express");
const app = express();

const date = new Date();
const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', ' Saturday', 'Sunday'];
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.get('/time', (req, res) => {
    res.send({
        'time' : date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
    })
});

app.get('/day', (req, res) => {
    res.send({
        'day of the week' : dayOfWeek[date.getDay() -1],
        'day of the month' : date.getDate(),
    })
});

app.get('/month', (req, res) => {
    res.send({
        'month' : month[date.getMonth()],
    })
});

app.listen(8080);
