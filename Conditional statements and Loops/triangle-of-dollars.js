function printTriangle([row]) {
    let line = ''
    for (let i = 0; i < row; i++) {
        line += '$'
        console.log(line)
    }
}

printTriangle([5])