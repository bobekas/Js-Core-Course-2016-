function roadRider([speed, area]) {
    speed = Number(speed)
    let speedLimit = getSpeedLimit(area)

    let overSpeed = speed - speedLimit
    if(overSpeed > 0) {
        if(overSpeed <= 20) {
            console.log('speeding')
        } else if(overSpeed <= 40) {
            console.log('excessive speeding')
        } else if(overSpeed > 40) {
            console.log('reckless driving')
        }
    }

    function getSpeedLimit(area) {
        switch (area) {
            case 'motorway':
                return 130
            case 'interstate':
                return 90
            case 'city':
                return 50
            case 'residential':
                return 20
        }
    }
}

roadRider([200, 'motorway'])