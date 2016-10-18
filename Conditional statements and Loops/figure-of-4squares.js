function printSquare([n]) {
    let multiplier = n - 2
    let squareHeight = Math.floor((n - 3) / 2)

    let line1 = `+${'-'.repeat(multiplier)}+${'-'.repeat(multiplier)}+`
    let line2 = `|${' '.repeat(multiplier)}|${' '.repeat(multiplier)}|\n`
    let output = ''
    for (let i = 0; i < 2; i++) {
        output += line1 + '\n'
        for (let j = 0; j < squareHeight; j++) {
            output += line2
        }
    }
    output += line1
    console.log(output)
}

printSquare([4])