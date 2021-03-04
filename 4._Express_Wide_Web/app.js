const express = require("express");
const app = express();

app.get('/', (req,res) => {
//__dirname return path to server
    res.sendFile(__dirname + '/public/welcome.html')
})

app.get('/dragons', (req, res) => {
    res.sendFile(__dirname + '/public/dragons.html')
})

app.listen(8080, e => e ? console.log(e) : 'server is running on: ',8080);