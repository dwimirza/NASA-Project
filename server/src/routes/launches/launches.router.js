const express = require('express')
const {httpgetAllLaunches, httpAddLaunches, httpAbortLaunch} = require('./launches.controller')
const launchesRouter = express.Router()

launchesRouter.get('/', httpgetAllLaunches)
launchesRouter.post('/', httpAddLaunches)
launchesRouter.delete('/:id', httpAbortLaunch)
module.exports = launchesRouter