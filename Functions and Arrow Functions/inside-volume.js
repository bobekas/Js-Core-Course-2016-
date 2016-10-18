function insideVolume(input) {
    let print = function (isInside) {
        isInside === true ? console.log('inside') : console.log('outside')
    }
    let rectangle = {
        minX: 10,
        maxX: 50,
        minY: 20,
        maxY: 80,
        minZ: 15,
        maxZ: 50
    }

    for (let i = 0; i < input.length; i += 3) {
        let point = {
            x: input[i],
            y: input[i + 1],
            z: input[i + 2]
        }
        print(isInside(point))
    }

    function isInside(point) {
        if(point.x < rectangle.minX ||
            point.x > rectangle.maxX ||
            point.y < rectangle.minY ||
            point.y > rectangle.maxY ||
            point.z < rectangle.minZ ||
            point.z > rectangle.maxZ) {
            return false
        }
        return true
    }
}

insideVolume([
    13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43
])