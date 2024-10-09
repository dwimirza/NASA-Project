const express = require('express')
const path = require('path')
const planets = require('./routes/planets/planets.router')
const launches = require('./routes/launches/launches.router')
const app = express();
const cors = require('cors')
const morgan = require('morgan')


app.use(cors({
    origin : 'http://localhost:3000'
}))
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, '..','public')))
app.use(express.json())
app.use('/planets',planets)
app.use('/launches',launches)

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '..','public', 'index.html'))
})

module.exports = app

