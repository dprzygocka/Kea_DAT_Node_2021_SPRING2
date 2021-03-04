const express = require("express");
const app = express();
// const plants = require("./plants.json");

app.use(express.json);

let plants = [
    {
        id : 1,
        dangerlevel : 9.3
    },
    {
        id : 2,
        description : 'dangerous, toxic'
    }
]

//GET list of plants
app.get("/plants", (req, res) => {
    res.send({plants})
})

//GET list of plants
app.get("/plants:plantId", (req, res) => {
    let requestedPlantId = Number(req.params.plantId);
    let neededPlant = plants.find(plant => plant.id === requestedPlantId )
    res.send({
        Plant : neededPlant
    })
})


app.listen(8080, error => error ? console.log(error) : console.log('Server is running on port: ', 8080) );