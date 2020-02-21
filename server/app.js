var express = require('express')
var app = express()

const aws = require('./controllers/aws');

// Server params
const port = 3000

// Routes
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/upload', (req, res) => res.send(aws.upload('./controllers/data/listingsData.json')))
app.get('/data', (req, res) => res.send(aws.grabData()))

app.get('/store_data', (req, res) => res.send(Window.localStorage()))
app.listen(port, () => console.log("Server has started"))