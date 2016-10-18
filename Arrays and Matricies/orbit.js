function orbit(input) {
    let [rows, cols] = input.shift().split(' ').map(Number)
    let [starX, starY] = input.shift().split(' ').map(Number)
    let matrix = []

    for (let i = 0; i < rows; i++) {
        matrix.push(new Array(cols))
    }

    matrixTravel(starX, starY, 0)
    function matrixTravel(x, y, count) {
        if(x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length && (typeof matrix[x][y] === 'undefined' | matrix[x][y] > count)) {
            matrix[x][y] = ++count
            setValueToNeighbour(x + 1, y, count + 1)
            setValueToNeighbour(x + 1, y + 1, count + 1)
            setValueToNeighbour(x + 1, y - 1, count + 1)
            setValueToNeighbour(x - 1, y + 1, count + 1)
            setValueToNeighbour(x - 1, y - 1, count + 1)
            setValueToNeighbour(x - 1, y, count + 1)
            setValueToNeighbour(x, y - 1, count + 1)
            setValueToNeighbour(x, y + 1, count + 1)

            moveToNeightbours(x, y, count)
        }
    }

    matrix.forEach(el => console.log(el.join(' ')))

    function setValueToNeighbour(x, y, count) {
        if(x >= 0 && x < matrix.length && y >= 0 && y < matrix[0].length && typeof matrix[x][y] === 'undefined') {
            matrix[x][y] = count
        }
    }
    function moveToNeightbours(x, y, count) {
        matrixTravel(x - 1, y, count)
        matrixTravel(x - 1, y - 1, count)
        matrixTravel(x - 1, y + 1, count)
        matrixTravel(x, y + 1, count)
        matrixTravel(x, y - 1, count)
        matrixTravel(x + 1, y, count)
        matrixTravel(x + 1, y + 1, count)
        matrixTravel(x + 1, y - 1, count)
    }
}
orbit([
    '4 4',
    '0 0'
])