function magicMatricies(input) {
    let matrix = input.map(row => row.split(' ').map(Number))
    let sum = matrix[0].reduce((cur, next) => {return cur + next})
    return checkRowsAndCols(matrix)

    function checkRowsAndCols(matrix) {
        for (let i = 1; i < matrix.length; i++) {
            let rowSum = 0
            for (let j = 0; j < matrix[i].length; j++) {
                rowSum += matrix[i][j]
            }
            if(rowSum !== sum) return false
        }
        for (let i = 0; i < matrix[0].length; i++) {
            let colSum = 0
            for (let j = 0; j < matrix.length; j++) {
                colSum += matrix[j][i]
            }
            if(colSum !== sum) return false
        }
        return true
    }
}

console.log(magicMatricies(
    ['4 5 6',
    '6 5 4',
    '5 5 5']
))