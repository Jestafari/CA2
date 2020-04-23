var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var Bike = require('./models/bike')

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/bikes', (req, res) => {
    Bike.find({}, (err, bikes) => {
        if (err) return res.status(500).send({message: 'Error retrieving data: ${err}'})
        if (!bikes) return res.status(404).send({message: 'Bike does not exist'})

        res.send(200, {bikes})
    })   
})

app.get('/bikes/:bikeId', (req, res) => {
    let bikeId = req.params.bikeId

    Bike.findById(bikeId, (err, bike) => {
        if(err) return res.status(500).send({message: 'Error retrieving data'})
        if(!bike) return res.status(404).send({message: 'Bike does not exist'})

        res.status(200).send({bike})
    })
})

app.post('/bikes', (req, res) => {
    console.log('POST /bike')
    console.log(req.body)

    let bike = new Bike()
    bike.brand = req.body.brand
    bike.model = req.body.model
    bike.price = req.body.price

    bike.save((err, bikeStored) =>{
    if(err) res.status(500).send({message: 'Error saving data'})
    res.status(200).send({bike: bikeStored})
    })
})

app.delete('/bikes/:id', (req, res) => {


})


mongoose.connect('mongodb://localhost:27017/bikes', (err, res) => {
    if(err) throw err
        console.log('Database connected')
        app.listen(port, function() {
            console.log("WORKING ON PORT: " + port);
        })
})