function tripLenght(input) {
    let points = []
    for (let i = 0; i < input.length; i+=2) {
        points.push(createPoint(input[i], input[i + 1]))
    }
    for(index in points) {
        index = Number(index)
        let point = points[index]

        for (let index2 = 0; index2 < points.length; index2++) {
            if(index2 === index) continue
            for (let index3 = 0; index3 < points.length; index3++) {
                if(index3 === index || index3 === index2) continue
                point.roads.push(createSegment(point, points[index2], points[index3], index, index2, index3))
            }
        }
    }

    let roadLength = Infinity
    let path = []

    points.forEach(point => {
        point.roads.forEach(road => {
            if(road.length < roadLength) {
                roadLength = road.length
                path = road.path
            }
        })
    })

    console.log(`${path.join('->')}: ${roadLength}`)
    
    function createSegment(point1, point2, point3, index, index2, index3) {
        let length = calcDistance(point1, point2)
        length += calcDistance(point2, point3)
        return {
            length: length,
            path: [++index, ++index2, ++index3]
        }
    }
    function createPoint(x, y) {
        return {
            x: x,
            y: y,
            roads: []
        }
    }
    function calcDistance(point1, point2) {
        let a = Math.abs(point1.x - point2.x)
        let b = Math.abs(point1.y - point2.y)

        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    }
}

tripLenght([-1, -2, 3.5, 0, 0, 2])