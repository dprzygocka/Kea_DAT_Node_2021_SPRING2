const express = require("express");
const app = express();


const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', ' Saturday', 'Sunday'];
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.get('/time', (req, res) => {
    const date = new Date();
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    res.send({
        'time (HH-MM-SS)' : hour + ':' + minutes + ':' + seconds,
    })
});

app.get('/day', (req, res) => {
    const date = new Date();
    res.send({
        'day of the week' : dayOfWeek[date.getDay() -1],
        'day of the month' : date.getDate(), //it's american way so sunday is first and it starts from 0 
        //toLocaleDateString('dk-DK', {​​weekday: "long"}​​) function to extract a day and convert it to name of the week day
    })
});

app.get('/month', (req, res) => {
    const date = new Date();
    res.send({
        'month' : month[date.getMonth()],
    })
});


app.get('/about', (req, res) => {
    res.send({
     'version' : '14.15.4'
    })
})
app.listen(8080);
