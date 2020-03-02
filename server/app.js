var express = require('express')
var app = express()

const aws = require('./controllers/aws');

// Server params
const port = 3000

// Routes
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/upload', (req, res) => res.send(aws.upload('./controllers/data/listingsData.json')))
app.get('/data', (req, res) => {
    let data = aws.grabData('Listings')
    data.then(result => res.send(result))
})

app.listen(port, () => console.log("Server has started"))