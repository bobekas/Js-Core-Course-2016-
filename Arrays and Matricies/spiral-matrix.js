function spiralMatrix([dimensions]) {
    let x, y
    dimensions = dimensions.split(' ').map(Number)
    x = dimensions[0]
    y = dimensions[1]
    let elementsCount = x*y
    let matrix = initMatrix(x, y)
    let pos = {
        x: 0,
        y: -1
    }
    let moves = [right, bot, left, top]
    let steps = 0
    let currentMove = 0

    while(steps < elementsCount) {
        moves[currentMove % 4]()
        currentMove++
    }

    matrix.forEach(row => console.log(row.join(' ')))
    function left() {
        while(true) {
            if(matrix[pos.x][pos.y - 1] === 'empty') {
                pos.y--
                matrix[pos.x][pos.y] = ++steps
            } else break
        }
    }
    function right() {
        while(true) {
            if(matrix[pos.x][pos.y + 1] === 'empty') {
                pos.y++
                matrix[pos.x][pos.y] = ++steps
            } else break
        }
    }
    function top() {
        while(true) {
            if(matrix[pos.x - 1] !== undefined && matrix[pos.x - 1][pos.y] === 'empty') {
                pos.x--
                matrix[pos.x][pos.y] = ++steps
            } else break
        }
    }
    function bot() {
        while(true) {
            if(matrix[pos.x + 1] !== undefined && matrix[pos.x + 1][pos.y] === 'empty') {
                pos.x++
                matrix[pos.x][pos.y] = ++steps
            } else break
        }
    }
    function initMatrix(x, y) {
        let matrix = [];
        for(let i=0; i<x; i++) {
            matrix[i] = new Array(y).fill('empty');
        }
        return matrix
    }
}

spiralMatrix(['5 5'])