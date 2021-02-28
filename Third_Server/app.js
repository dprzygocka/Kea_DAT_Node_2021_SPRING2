const express = require('express')
const app = express()


// /day/today?name=Dagmara

app.get('/querystring', (req, res) => {
    res.send({ 'query value' : req.query})
})
app.listen(8080)