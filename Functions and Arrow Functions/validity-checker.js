function validityChecker([x1, y1, x2, y2]) {
    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number)
    let start = {
        x: 0,
        y: 0
    }
    let point1 = {
        x: x1,
        y: y1
    }
    point1.distanceToStart = calcDistance(point1, start)
    let point2 = {
        x: x2,
        y: y2
    }
    point2.distanceToStart = calcDistance(point2, start)
    let distanceBetweenPoints = calcDistance(point1, point2)

    point1.distanceToStart % 1 === 0 ? print('valid', point1, start) : print('invalid', point1, start)
    point2.distanceToStart % 1 === 0 ? print('valid', point2, start) : print('invalid', point2, start)
    distanceBetweenPoints % 1 === 0 ? print('valid', point1, point2) : print('invalid', point1, point2)


    function print(type, point1, point2) {
        console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is ${type}`)
    }

    function calcDistance(point1, point2) {
        let a = Math.abs(point1.x - point2.x)
        let b = Math.abs(point1.y - point2.y)

        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    }

}

validityChecker(['2','1','1','1'])