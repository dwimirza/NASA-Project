const http = require('http');
const app = require(`./app`);
const mongoose = require('mongoose');

const {loadPlanetsData} = require('./models/planets.model')
const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://Dev:nanda1@nasacluster.iorhfai.mongodb.net/nasa?retryWrites=true&w=majority&appName=NasaCluster'

const server = http.createServer(app)

// mongoose.connection.once('open', () => {
//     console.log('server is ready')
// })

async function startServer(){
await mongoose.connect(MONGO_URL)
await loadPlanetsData()

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
    })
}
startServer();