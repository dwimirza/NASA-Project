const {
    gettAllLaunches,
    addLaunches,
    existWithoutLaunchId,
    abortLaunchById
} = require('../../models/launches.model')

function httpgetAllLaunches(req, res) {
    return res.status(200).json(gettAllLaunches())
}

function httpAddLaunches(req, res) {
    const launch = req.body

    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(400).json({
            error: "Missing Required Property"
        })
    }
    launch.launchDate = new Date(launch.launchDate)

    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid Date'
        })
    }
    addLaunches(launch);
    return res.status(201).json(launch)
}

function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);
    if (!existWithoutLaunchId(launchId)) {
        return res.status(404).json({
            error: 'launch not found'
        })
    }
    const aborted = abortLaunchById(launchId);
    return res.status(200).json(aborted)

}



module.exports = {
    httpgetAllLaunches,
    httpAddLaunches,
    httpAbortLaunch,
    abortLaunchById
}