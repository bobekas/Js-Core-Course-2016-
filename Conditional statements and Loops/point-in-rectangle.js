function isInsidePoint([x, y, xMin, xMax, yMin, yMax]) {
    [x, y, xMin, xMax, yMin, yMax] = [x, y, xMin, xMax, yMin, yMax].map(Number)
    let point = {
        x: x,
        y: y
    }
    let rectangle = {
        xMin: xMin,
        xMax: xMax,
        yMin: yMin,
        yMax: yMax
    }
    if (point.x >= rectangle.xMin &&
        point.x <= rectangle.xMax &&
        point.y >= rectangle.yMin &&
        point.y <= rectangle.yMax
    ) {
        console.log('inside')
    } else {
        console.log('outside')
    }
}

isInsidePoint(['8', '-5', '2', '12', '-3', '3'])