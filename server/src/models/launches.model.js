const launches = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber : 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchdate : new Date('27 December 2030'),
    target : 'Kepler-442 b',
    customer: ['ZTM','NASA'],
    upcoming: true,
    success: true, 
}
launches.set(launch.flightNumber, launch);
function gettAllLaunches(){
    return Array.from(launches.values())
}
function existWithoutLaunchId(launchId){
    return launches.has(launchId)
}

function addLaunches(launch){
    latestFlightNumber++;
    launches.set(latestFlightNumber, Object.assign(launch, {
        flightNumber : latestFlightNumber,
        customer : ['Nanda', 'ZTM'],
        upcoming : true,
        success : true,
    }))
}

function abortLaunchById(launchId){
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted
}

module.exports = {
    existWithoutLaunchId,
    gettAllLaunches,
    addLaunches,
    abortLaunchById
}