function diagonalAttack(input) {
    let matrix = input.map(row => row.split(' ').map(Number))
    let diag1 = 0
    let diag2 = 0
    let width = matrix.length

    matrix.forEach((el, index) => {
        diag1+=matrix[index][index]
        diag2+=matrix[index][width - index - 1]
    })
    if(diag1 === diag2) {
        let matrix2 = []
        matrix.forEach((el, index) => matrix2[index] = new Array(width).fill(diag1))
        matrix.forEach((el, index) => {
            matrix2[index][index] = matrix[index][index]
            matrix2[index][width - index - 1] = matrix[index][width - index - 1]
        })
        matrix2.forEach(row => console.log(row.join(' ')))
    } else {
        matrix.forEach(row => console.log(row.join(' ')))
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)