const express = require("express");
const app = express();
const fetch = require("node-fetch");

//homework: Implement node-fetch in a route called proxy that calls google and serves that webpage page. Result: When calling /proxy you should see a Google-like homepage. 

app.get('/proxy', (req,res) => {
    fetch('https://google.com/')
    .then(res => res.textConverted())
    .then(body => res.send(body))
})










//rest of the lesson 


app.use(express.static('public'));

app.get('/', (req,res) => {
//__dirname return path to server
    res.sendFile(__dirname + '/public/welcome.html')
})

app.get('/currency', (req,res) => {
    //__dirname return path to server
        res.sendFile(__dirname + '/ajax.html')
    })

app.get('/dragons', (req, res) => {
    res.sendFile(__dirname + '/public/dragons/dragons.html')
})
const PORT = process.env.PORT || 8080;
console.log("Port is running on :", PORT)
app.listen(PORT, e => e ? console.log(e) : 'server is running on: ',PORT);