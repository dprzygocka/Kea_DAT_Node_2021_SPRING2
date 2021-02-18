const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({"message" : "This is response to get"});
});

app.get("/students", (req, res) => {
    res.send({ 
        "Students" : [
            {"Name" : "Dagmara",
            "Surname" : "Przygocka",
            "Age" : 24,
            "Id" : 20},

            {"Name" : "Filip",
            "Surname" : "Andrzejaczak",
            "Age" : 26,
            "Id" : 21}
        ]
    });
});

app.get("/students/20", (req, res) => {
    res.send({ 
        "Name" : "Dagmara",
        "Surname" : "Przygocka",
        "Age" : 24,
        "Id" : 20
    })
});

app.get("/me", (req, res) => {
    res.send({ 
        "Name" : "Dagmara",
        "Surname" : "Przygocka",
        "Age" : 24
    })
});

app.get("/welcome", (req, res) => {
    res.send('<header>Welcome</header>')
});

app.listen(8080);