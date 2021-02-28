const express = require('express');
const app = express();
app.use(express.json());

const students = [
{name : 'Dagmara',
surname : 'Przygocka',
age : 24,
Id : 20},

{name : 'Filip',
surname : 'Andrzejaczak',
age : 26,
Id : 21}];
    

app.get('/', (req, res) => {
    res.send({'message' : 'This is response to get'});
});

app.get('/students', (req, res) => {
    res.send(
        JSON.stringify(students)
)});

app.get('/students/:studentId', (req, res) => {
    res.send( JSON.stringify(students.find(x => x.Id == req.params.studentId)))
});

app.post('/students', (req, res) => {
    students.push(req.body)
    res.send({
        Student: req.body,
        'message' : 'Student added'
    })
});

app.put('/students/:studentId', (req, res) => {
    const student = students.find(x => x.Id == req.params.studentId)
    students[students.indexOf(student)] = req.body;
    res.send({
        Student: req.body,
        'message' : 'Student updated'
    })
});

app.delete('/students/:studentId', (req, res) => {
    const deleteStudent = students.find(x => x.Id == req.params.studentId)
    students.splice(students.indexOf(students.find(x => x.Id == req.params.studentId)),1)
    res.send({
        Student: deleteStudent,
        'message' : 'Student deleted'
    })
});

app.delete('/students', (req, res) => {
    students.length = 0;
    res.send({
        'message' : 'Students deleted'
    })
});

app.listen(8080);