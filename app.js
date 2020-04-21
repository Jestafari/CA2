var express = require('express')
var bodyParser = require('body-parser')

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/bikes', (req, res) => {
    res.send(200, {bikes: []})
})

app.get('/bikes/:id', (req, res) => {


})

app.post('/bikes', (req, res) => {
    console.log(req.body)
    res.status(200).send({message: 'TRABAJANDO'})

})

app.delete('/bikes/:id', (req, res) => {


})

app.listen(port, function() {
    console.log("WORKING ON PORT: " + port);
})